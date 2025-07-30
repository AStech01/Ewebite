// const stripe = require("../config/stripe");

// // @desc Create payment intent
// // @route POST /api/payments/create
// exports.createPaymentIntent = async (req, res) => {
//   const { amount } = req.body; // in rupees

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount * 100, // convert to paisa
//       currency: "inr",
//       metadata: { integration_check: "accept_a_payment" },
//     });

//     res.json({ clientSecret: paymentIntent.client_secret });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// const stripe = require("../config/stripe"); // Your stripe instance (require('stripe')(secretKey))

// // @desc    Create a Stripe PaymentIntent
// // @route   POST /api/payments/create
// // @access  Private (requires token)
// exports.createPaymentIntent = async (req, res) => {
//   const { amount } = req.body;

//   if (!amount || amount <= 0) {
//     return res.status(400).json({ error: "Invalid amount" });
//   }

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount * 100, // in paisa
//       currency: "inr",
//       metadata: {
//         userId: req.user?._id?.toString() || "anonymous",
//       },
//     });

//     res.json({ clientSecret: paymentIntent.client_secret });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// controllers/paymentController.js
const stripe = require("../config/stripe"); // Your initialized stripe instance

exports.createCheckoutSession = async (req, res) => {
  const { productName, amount, quantity } = req.body;

  if (!productName || !amount || !quantity) {
    return res.status(400).json({ error: "Missing payment details." });
  }

  if (amount < 50) {
    return res.status(400).json({ error: "Minimum amount is ₹50." });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: productName,
            },
            unit_amount: Math.round((amount * 100) / quantity),
          },
          quantity,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/ordersuccess`,
      cancel_url: `${process.env.CLIENT_URL}/paymentcancel`,
      metadata: {
        userId: req.user?._id?.toString() || "guest",
      },
    });

    res.json({ sessionId: session.id });
  } catch (err) {
    console.error("Stripe Checkout error:", err);
    res.status(500).json({ error: "Stripe session creation failed." });
  }
};

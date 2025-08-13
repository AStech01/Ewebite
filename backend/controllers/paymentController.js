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
// const stripe = require("../config/stripe"); // Your initialized stripe instance

// exports.createCheckoutSession = async (req, res) => {
//   const { productName, amount, quantity } = req.body;

//   if (!productName || !amount || !quantity) {
//     return res.status(400).json({ error: "Missing payment details." });
//   }

//   if (amount < 50) {
//     return res.status(400).json({ error: "Minimum amount is ₹50." });
//   }

//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency: "inr",
//             product_data: {
//               name: productName,
//             },
//             unit_amount: Math.round((amount * 100) / quantity),
//           },
//           quantity,
//         },
//       ],
//       mode: "payment",
//       success_url: `${process.env.CLIENT_URL}/ordersuccess`,
//       cancel_url: `${process.env.CLIENT_URL}/paymentcancel`,
//       metadata: {
//         userId: req.user?._id?.toString() || "guest",
//       },
//     });

//     res.json({ sessionId: session.id });
//   } catch (err) {
//     console.error("Stripe Checkout error:", err);
//     res.status(500).json({ error: "Stripe session creation failed." });
//   }
// };


// backend/controllers/paymentController.js
// const stripe = require("../config/stripe"); // initialized stripe instance

// exports.createCheckoutSession = async (req, res) => {
//   const { productId, quantity, shippingAddress } = req.body;

//   if (!productId || !quantity || !shippingAddress) {
//     return res.status(400).json({ error: "Missing required payment details." });
//   }

//   try {
//     // ✅ Get product from DB
//     const product = await Product.findById(productId);
//     if (!product) {
//       return res.status(404).json({ error: "Product not found." });
//     }

//     // ✅ Create Stripe Checkout session
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency: "inr",
//             product_data: {
//               name: product.name,
//               description: product.description,
//               images: [product.image],
//             },
//             unit_amount: product.price * 100, // in paise
//           },
//           quantity,
//         },
//       ],
//       mode: "payment",
//       success_url: `${process.env.CLIENT_URL}/ordersuccess`,
//       cancel_url: `${process.env.CLIENT_URL}/paymentcancel`,
//       metadata: {
//         shippingDetails: JSON.stringify(shippingAddress),
//         userId: req.user?._id?.toString() || "guest",
//       },
//     });

//     // ✅ Return Stripe URL
//     res.status(200).json({ url: session.url });

//   } catch (error) {
//     console.error("🔥 Stripe session creation failed:", error.message);
//     return res.status(500).json({ error: "Stripe session creation failed." });
//   }
// };

// const stripe = require('../config/stripe');
// const Product = require('../models/Product'); // adjust if different

// exports.createCheckoutSession = async (req, res) => {
//   const { productId, quantity, shippingAddress } = req.body;

//   if (!productId || !quantity || !shippingAddress) {
//     return res.status(400).json({ message: "Missing checkout details" });
//   }

//   try {
//     const product = await Product.findById(productId);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency: "inr",
//             product_data: {
//               name: product.name,
//             },
//             unit_amount: product.price * 100,
//           },
//           quantity,
//         },
//       ],
//       mode: "payment",
//      success_url: `${process.env.CLIENT_URL}/ordersuccess?productId=${product._id}&qty=${quantity}`,
//       cancel_url: `${process.env.CLIENT_URL}/paymentcancel`,
//       metadata: {
//         productId: product._id.toString(),
//         userId: req.user?._id?.toString() || "guest",
//         shipping: JSON.stringify(shippingAddress),
//       },
//     });

//     res.json({ url: session.url });

//   } catch (error) {
//     console.error("Stripe session creation failed:", error);
//     res.status(500).json({ message: "Stripe session creation failed" });
//   }
// };

// controllers/checkoutController.js
const stripe = require('../config/stripe');
const Product = require('../models/Product');

exports.createCheckoutSession = async (req, res) => {
  const { productId, quantity, shippingAddress } = req.body;

  if (!productId || !quantity || !shippingAddress) {
    return res.status(400).json({ message: "Missing checkout details" });
  }

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Encode address fields for use in URL
    const queryParams = new URLSearchParams({
      productId: product._id.toString(),
      qty: quantity.toString(),
      name: shippingAddress.fullName,
      address: shippingAddress.address,
      city: shippingAddress.city,
      postal: shippingAddress.postalCode,
      country: shippingAddress.country,
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: product.name,
            },
            unit_amount: product.price * 100,
          },
          quantity,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/ordersuccess?${queryParams.toString()}`,
      cancel_url: `${process.env.CLIENT_URL}/paymentcancel`,
      metadata: {
        productId: product._id.toString(),
        userId: req.user?._id?.toString() || "guest",
        shipping: JSON.stringify(shippingAddress),
      },
    });

    res.json({ url: session.url });

  } catch (error) {
    console.error("Stripe session creation failed:", error);
    res.status(500).json({ message: "Stripe session creation failed" });
  }
};




// const Order = require("../models/Order");
// const mongoose = require("mongoose");

// // Create new order
// exports.createOrder = async (req, res) => {
//   const { orderItems, shippingAddress, paymentMethod } = req.body;

//   if (!orderItems || orderItems.length === 0) {
//     return res.status(400).json({ error: "No order items" });
//   }

//   const order = new Order({
//     user: req.user._id,
//     orderItems,
//     shippingAddress,
//     paymentMethod,
//   });

//   const createdOrder = await order.save();
//   res.status(201).json(createdOrder);
// };

// // Get logged in user's orders
// exports.getMyOrders = async (req, res) => {
//   const orders = await Order.find({ user: req.user._id });
//   res.json(orders);
// };

// // Get all orders (admin only)
// exports.getAllOrders = async (req, res) => {
//   const orders = await Order.find().populate("user", "name email");
//   res.json(orders);
// };

// // Mark order as delivered (admin only)
// exports.markAsDelivered = async (req, res) => {
//   const order = await Order.findById(req.params.id);

//   if (!order) return res.status(404).json({ error: "Order not found" });

//   order.isDelivered = true;
//   order.deliveredAt = Date.now();
//   await order.save();

//   res.json({ message: "Order marked as delivered" });
// };

// // Delete order (admin only)
// exports.deleteOrder = async (req, res) => {
//   try {
//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       return res.status(400).json({ error: "Invalid order ID" });
//     }

//     const order = await Order.findById(req.params.id);
//     if (!order) {
//       return res.status(404).json({ error: "Order not found" });
//     }

//     await Order.findByIdAndDelete(req.params.id);

//     res.json({ message: "Order deleted successfully" });
//   } catch (err) {
//     console.error("Delete order error:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// };


// const Order = require("../models/Order");
// const mongoose = require("mongoose");

// exports.createOrder = async (req, res) => {
//   const { orderItems, shippingAddress, paymentMethod } = req.body;

//   if (!orderItems || orderItems.length === 0)
//     return res.status(400).json({ error: "No order items" });

//   const order = new Order({
//     user: req.user._id,
//     orderItems,
//     shippingAddress,
//     paymentMethod,
//   });

//   const createdOrder = await order.save();
//   res.status(201).json(createdOrder);
// };

// exports.getMyOrders = async (req, res) => {
//   const orders = await Order.find({ user: req.user._id });
//   res.json(orders);
// };

// exports.getAllOrders = async (req, res) => {
//   const orders = await Order.find().populate("user", "name email");
//   res.json(orders);
// };

// exports.markAsDelivered = async (req, res) => {
//   const order = await Order.findById(req.params.id);
//   if (!order) return res.status(404).json({ error: "Order not found" });

//   order.isDelivered = true;
//   order.deliveredAt = Date.now();
//   await order.save();

//   res.json({ message: "Order marked as delivered" });
// };

// exports.deleteOrder = async (req, res) => {
//   if (!mongoose.Types.ObjectId.isValid(req.params.id))
//     return res.status(400).json({ error: "Invalid order ID" });

//   const order = await Order.findById(req.params.id);
//   if (!order) return res.status(404).json({ error: "Order not found" });

//   await Order.findByIdAndDelete(req.params.id);
//   res.json({ message: "Order deleted successfully" });
// };


const Order = require("../models/Order");
const mongoose = require("mongoose");

// Create new order
exports.createOrder = async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, isPaid, paidAt } = req.body;

  if (!orderItems || orderItems.length === 0) {
    return res.status(400).json({ error: "No order items" });
  }

  // Calculate total price
  const totalPrice = orderItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const order = new Order({
    user: req.user._id,
    orderItems,
    shippingAddress,
    paymentMethod,
    isPaid: isPaid || false,
    paidAt: paidAt || null,
    totalPrice,
  });

  try {
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ error: "Failed to create order" });
  }
};

// Get logged in user's orders
exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

// Get all orders (admin only)
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch all orders" });
  }
};

// Mark order as delivered (admin only)
exports.markAsDelivered = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });

    order.isDelivered = true;
    order.deliveredAt = Date.now();
    await order.save();

    res.json({ message: "Order marked as delivered" });
  } catch (error) {
    res.status(500).json({ error: "Failed to mark as delivered" });
  }
};

// Delete order (admin only)
exports.deleteOrder = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid order ID" });
    }

    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });

    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete order" });
  }
};

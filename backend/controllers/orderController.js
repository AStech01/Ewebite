const Order = require("../models/Order");

// @desc Create new order
// @route POST /api/orders
exports.createOrder = async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod } = req.body;

  if (!orderItems || orderItems.length === 0) {
    return res.status(400).json({ error: "No order items" });
  }

  const order = new Order({
    user: req.user._id,
    orderItems,
    shippingAddress,
    paymentMethod,
  });

  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
};

// @desc Get logged in user's orders
// @route GET /api/orders/my
exports.getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
};

// @desc Get all orders (Admin)
// @route GET /api/orders
exports.getAllOrders = async (req, res) => {
  const orders = await Order.find().populate("user", "name email");
  res.json(orders);
};

// @desc Update order delivery status
// @route PUT /api/orders/:id/deliver
exports.markAsDelivered = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) return res.status(404).json({ error: "Order not found" });

  order.isDelivered = true;
  order.deliveredAt = Date.now();
  await order.save();

  res.json({ message: "Order marked as delivered" });
};

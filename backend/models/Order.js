const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  orderItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
      },
      name: String,
      quantity: Number,
      price: Number,
      image: String
    }
  ],

  shippingAddress: {
    fullName: String,
    address: String,
    city: String,
    postalCode: String,
    country: String
  },

  paymentMethod: {
    type: String,
    required: true
  },

  isPaid: {
    type: Boolean,
    default: false
  },

  paidAt: Date,

  isDelivered: {
    type: Boolean,
    default: false
  },

  deliveredAt: Date
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);

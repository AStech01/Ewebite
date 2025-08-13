// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true
//   },

//   orderItems: [
//     {
//       product: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Product",
//         required: true
//       },
//       name: String,
//       quantity: Number,
//       price: Number,
//       image: String
//     }
//   ],

//   shippingAddress: {
//     fullName: String,
//     address: String,
//     city: String,
//     postalCode: String,
//     country: String
//   },

//   paymentMethod: {
//     type: String,
//     required: true
//   },

//   isPaid: {
//     type: Boolean,
//     default: false
//   },

//   paidAt: Date,

//   isDelivered: {
//     type: Boolean,
//     default: false
//   },

//   deliveredAt: Date
// }, { timestamps: true });

// module.exports = mongoose.model("Order", orderSchema);

// models/Order.js
const mongoose = require('mongoose');

const orderItemSchema = mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: false },
});

const orderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    orderItems: [orderItemSchema],
    shippingAddress: {
      fullName: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: { type: String, required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
    totalPrice: { type: Number, required: false }, // you can calculate this
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);

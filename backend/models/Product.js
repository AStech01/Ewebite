// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },

//   description: {
//     type: String,
//     required: true
//   },

//   price: {
//     type: Number,
//     required: true
//   },

//   category: {
//     type: String,
//     required: true
//   },

//   image: {
//     type: String,
//     required: true
//   },

//   stock: {
//     type: Number,
//     default: 0
//   },

//   ratings: {
//     type: Number,
//     default: 0
//   },

//   numReviews: {
//     type: Number,
//     default: 0
//   }
// }, { timestamps: true });

// module.exports = mongoose.model("Product", productSchema);

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Product description is required"],
    },

    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price cannot be negative"],
    },

    category: {
      type: String,
      required: [true, "Product category is required"],
    },

    image: {
      type: String,
      required: [true, "Product image URL is required"],
    },

    stock: {
      type: Number,
      default: 0,
      min: [0, "Stock cannot be negative"],
    },

    ratings: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    numReviews: {
      type: Number,
      default: 0,
    },

    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
          min: 0,
          max: 5,
        },
        comment: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);

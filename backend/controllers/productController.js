// const Product = require("../models/Product");

// // @desc    Get all products
// // @route   GET /api/products
// // @access  Public
// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch products" });
//   }
// };

// // @desc    Get product by ID
// // @route   GET /api/products/:id
// // @access  Public
// exports.getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product)
//       return res.status(404).json({ error: "Product not found" });

//     res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json({ error: "Error retrieving product" });
//   }
// };

// // @desc    Create a new product
// // @route   POST /api/products
// // @access  Admin
// exports.createProduct = async (req, res) => {
//   const { name, description, price, category, image, stock } = req.body;

//   try {
//     const newProduct = new Product({
//       name,
//       description,
//       price,
//       category,
//       image,
//       stock,
//     });

//     const savedProduct = await newProduct.save();
//     res.status(201).json(savedProduct);
//   } catch (err) {
//     res.status(400).json({ error: "Invalid product data" });
//   }
// };

// // @desc    Update an existing product
// // @route   PUT /api/products/:id
// // @access  Admin
// exports.updateProduct = async (req, res) => {
//   const { name, description, price, category, image, stock } = req.body;

//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product)
//       return res.status(404).json({ error: "Product not found" });

//     product.name = name || product.name;
//     product.description = description || product.description;
//     product.price = price || product.price;
//     product.category = category || product.category;
//     product.image = image || product.image;
//     product.stock = stock || product.stock;

//     const updatedProduct = await product.save();
//     res.status(200).json(updatedProduct);
//   } catch (err) {
//     res.status(400).json({ error: "Failed to update product" });
//   }
// };

// // @desc    Delete a product
// // @route   DELETE /api/products/:id
// // @access  Admin
// exports.deleteProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ error: "Product not found" });
//     }

//     await Product.findByIdAndDelete(req.params.id);

//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (err) {
//     console.error("Delete Error:", err);
//     res.status(500).json({ error: "Failed to delete product" });
//   }
// };


const Product = require("../models/Product");
const Order = require("../models/Order");

// === PRODUCT CONTROLLERS ===

// @desc    Get all products
// @route   GET /api/products
// @access  Public
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json(products);
  } catch (error) {
    console.error("Get All Products Error:", error);
    return res.status(500).json({ error: "Failed to fetch products" });
  }
};

// @desc    Get product by ID
// @route   GET /api/products/:id
// @access  Public
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    return res.status(200).json(product);
  } catch (error) {
    console.error("Get Product By ID Error:", error);
    if (error.kind === "ObjectId") {
      return res.status(400).json({ error: "Invalid product ID" });
    }
    return res.status(500).json({ error: "Error retrieving product" });
  }
};

// @desc    Create a new product
// @route   POST /api/products
// @access  Admin
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, category, image, stock } = req.body;

    // Basic validation
    if (!name || !description || price == null || !category || !image) {
      return res.status(400).json({ error: "Missing required product fields" });
    }

    const newProduct = new Product({
      name,
      description,
      price,
      category,
      image,
      stock: stock || 0,
    });

    const savedProduct = await newProduct.save();
    return res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Create Product Error:", error);
    return res.status(400).json({ error: "Invalid product data" });
  }
};

// @desc    Update an existing product
// @route   PUT /api/products/:id
// @access  Admin
exports.updateProduct = async (req, res) => {
  try {
    const { name, description, price, category, image, stock } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    // Update only provided fields
    if (name !== undefined) product.name = name;
    if (description !== undefined) product.description = description;
    if (price !== undefined) product.price = price;
    if (category !== undefined) product.category = category;
    if (image !== undefined) product.image = image;
    if (stock !== undefined) product.stock = stock;

    const updatedProduct = await product.save();
    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Update Product Error:", error);
    if (error.kind === "ObjectId") {
      return res.status(400).json({ error: "Invalid product ID" });
    }
    return res.status(400).json({ error: "Failed to update product" });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Admin
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Delete Product Error:", error);
    if (error.kind === "ObjectId") {
      return res.status(400).json({ error: "Invalid product ID" });
    }
    return res.status(500).json({ error: "Failed to delete product" });
  }
};

// === ORDER CONTROLLERS ===

// @desc    Create new order
// @route   POST /api/orders
// @access  Private (User must be authenticated)
exports.createOrder = async (req, res) => {
  try {
    // Authentication check (make sure your auth middleware sets req.user)
    if (!req.user) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const { orderItems, shippingAddress, paymentMethod } = req.body;

    // Validate order items
    if (!orderItems || !Array.isArray(orderItems) || orderItems.length === 0) {
      return res.status(400).json({ error: "No order items" });
    }
    if (!shippingAddress) {
      return res.status(400).json({ error: "Shipping address is required" });
    }
    if (!paymentMethod) {
      return res.status(400).json({ error: "Payment method is required" });
    }

    // Create order object
    const order = new Order({
      user: req.user._id,
      orderItems: orderItems.map(item => ({
        product: item.product || item.productId,  // Accept product or productId
        name: item.name,
        quantity: item.quantity || item.qty || 1,
        price: item.price,
        image: item.image,
      })),
      shippingAddress,
      paymentMethod,
    });

    const createdOrder = await order.save();
    return res.status(201).json(createdOrder);
  } catch (error) {
    console.error("Create Order Error:", error);
    return res.status(500).json({ error: "Failed to create order" });
  }
};

// @desc    Get logged in user's orders
// @route   GET /api/orders/my
// @access  Private
exports.getMyOrders = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    return res.status(200).json(orders);
  } catch (error) {
    console.error("Get My Orders Error:", error);
    return res.status(500).json({ error: "Failed to fetch orders" });
  }
};

// @desc    Get all orders (Admin only)
// @route   GET /api/orders
// @access  Admin
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });
    return res.status(200).json(orders);
  } catch (error) {
    console.error("Get All Orders Error:", error);
    return res.status(500).json({ error: "Failed to fetch orders" });
  }
};

// @desc    Mark order as delivered
// @route   PUT /api/orders/:id/deliver
// @access  Admin
exports.markAsDelivered = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });

    order.isDelivered = true;
    order.deliveredAt = Date.now();

    await order.save();
    return res.status(200).json({ message: "Order marked as delivered" });
  } catch (error) {
    console.error("Mark as Delivered Error:", error);
    if (error.kind === "ObjectId") {
      return res.status(400).json({ error: "Invalid order ID" });
    }
    return res.status(500).json({ error: "Failed to update order status" });
  }
};

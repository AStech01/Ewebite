const Product = require("../models/Product");

// @desc    Get all products
// @route   GET /api/products
// @access  Public
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// @desc    Get product by ID
// @route   GET /api/products/:id
// @access  Public
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ error: "Product not found" });

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving product" });
  }
};

// @desc    Create a new product
// @route   POST /api/products
// @access  Admin
exports.createProduct = async (req, res) => {
  const { name, description, price, category, image, stock } = req.body;

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      image,
      stock,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ error: "Invalid product data" });
  }
};

// @desc    Update an existing product
// @route   PUT /api/products/:id
// @access  Admin
exports.updateProduct = async (req, res) => {
  const { name, description, price, category, image, stock } = req.body;

  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ error: "Product not found" });

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.category = category || product.category;
    product.image = image || product.image;
    product.stock = stock || product.stock;

    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(400).json({ error: "Failed to update product" });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Admin
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("Delete Error:", err);
    res.status(500).json({ error: "Failed to delete product" });
  }
};

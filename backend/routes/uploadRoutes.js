const express = require("express");
const router = express.Router();
const upload = require("../uploads/uploadMiddleware"); // multer config
const { protect, isAdmin } = require("../middleware/authMiddleware");

// @desc    Upload a product image
// @route   POST /api/uploads
// @access  Private/Admin
router.post(
  "/",
  protect,
  isAdmin,
  upload.single("image"),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    res.status(200).json({
      imageUrl: `/uploads/${req.file.filename}`, // path to access image
    });
  }
);

module.exports = router;

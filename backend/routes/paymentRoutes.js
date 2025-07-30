// const express = require("express");
// const router = express.Router();
// const { createPaymentIntent } = require("../controllers/paymentController");
// const { protect } = require("../middleware/authMiddleware");

// router.post("/create", protect, createPaymentIntent);

// module.exports = router;

// routes/paymentRoutes.js
const express = require("express");
const { createCheckoutSession } = require("../controllers/paymentController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();
router.post("/create", protect, createCheckoutSession);

module.exports = router;
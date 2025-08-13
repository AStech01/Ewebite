// const express = require("express");
// const router = express.Router();
// const { createPaymentIntent } = require("../controllers/paymentController");
// const { protect } = require("../middleware/authMiddleware");

// router.post("/create", protect, createPaymentIntent);

// module.exports = router;

// routes/paymentRoutes.js
// const express = require("express");
// const { createCheckoutSession } = require("../controllers/paymentController");
// const { protect } = require("../middleware/authMiddleware");

// const router = express.Router();
// router.post("/create", protect, createCheckoutSession);

// module.exports = router;

const express = require('express');
const router = express.Router();

const { createCheckoutSession } = require('../controllers/paymentController');
const { protect } = require('../middleware/authMiddleware'); // Only if you're using auth

// ✅ Route registration
router.post('/create-checkout-session', protect, createCheckoutSession);
// OR, if not using `protect`:
// router.post('/create-checkout-session', createCheckoutSession);

module.exports = router;

const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // from .env

module.exports = stripe;

// server.js
const express = require('express');
const app = express();
const streampayments = require('streampayments');

// Initialize StreamPayments SDK with StreamPay / Stripe API key
const stream = new streampayments.StreamPayments({
    apiKey: 'STRIPE_API_KEY',
});

// Generate a crypto/stablecoin onramp session
app.post('/generate-session', async(req, res) => {
    try {
        const session = await stream.createSession({
            // Define session parameters (e.g., amount, currency, etc.)
        });
        res.json({ session });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to generate session' });
    }
});

// Start the server
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
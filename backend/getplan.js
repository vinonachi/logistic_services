const express = require('express');
const app = express();
const stripe = require('stripe')('your-secret-key');

app.use(express.static('public'));
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
    const { plan } = req.body;

    const prices = {
        basic: 'price_1Hh1N2XXXXXX',
        standard: 'price_1Hh1N2XXXXXX',
        premium: 'price_1Hh1N2XXXXXX',
    };

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price: prices[plan],
                quantity: 1,
            },
        ],
        mode: 'subscription',
        success_url: 'https://yourdomain.com/success',
        cancel_url: 'https://yourdomain.com/cancel',
    });

    res.json({ id: session.id });
});

app.listen(3000, () => console.log('Server is running on port 3000'));

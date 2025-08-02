const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('checkout', {
        title: 'Checkout',
        content: 'Choose your payment method below.'
    });
});

router.get('/card', (req, res) => {
    res.render('subpage', {
        title: 'Card Payment',
        desc: 'Pay with Visa, Mastercard or American Express.'
    });
});

router.get('/swish', (req, res) => {
    res.render('subpage', {
        title: 'Swish Payment',
        desc: 'Use Swish for fast and secure payments.'
    });
});

module.exports = router;

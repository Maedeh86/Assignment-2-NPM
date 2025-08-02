const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('about', {
        title: 'About Us',
        content: 'We provide high-quality makeup products with luxury branding.'
    });
});

router.get('/team', (req, res) => {
    res.render('subpage', {
        title: 'Our Team',
        desc: 'Meet our professional makeup artists and stylists.'
    });
});

router.get('/contact', (req, res) => {
    res.render('subpage', {
        title: 'Contact Us',
        desc: 'Reach out to us via email or social media.'
    });
});

module.exports = router;

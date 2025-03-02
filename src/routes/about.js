
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('about', { title: 'About Us', content: 'We provide high-quality makeup products with luxury shades of red & gold.' });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const allProducts = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8'));

function getRandomProducts(num) {
    let shuffled = allProducts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}


router.get('/', (req, res) => {
    const products = getRandomProducts(6);
    res.render('products', { title: "Products", products });
});

router.get('/lipstick', (req, res) => {
    res.render('subpage', {
        title: 'Lipstick Collection',
        desc: 'Explore our luxury lipstick range in bold reds and nudes.'
    });
});

router.get('/foundation', (req, res) => {
    res.render('subpage', {
        title: 'Foundation Range',
        desc: 'Lightweight, full-coverage foundations to match your skin tone.'
    });
});

module.exports = router;

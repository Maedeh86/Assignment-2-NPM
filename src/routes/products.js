
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

module.exports = router;

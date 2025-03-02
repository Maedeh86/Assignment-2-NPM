
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home', message: 'Welcome to Makeup Pro!' });
});

module.exports = router;

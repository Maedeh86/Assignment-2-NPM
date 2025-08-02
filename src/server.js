

require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));


const homeRouter = require('./routes/home');   
const productsRouter = require('./routes/products');
const aboutRouter = require('./routes/about');
const checkoutRouter = require('./routes/checkout');


app.use('/', homeRouter);
app.use('/products', productsRouter);
app.use('/about', aboutRouter);
app.use('/checkout', checkoutRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

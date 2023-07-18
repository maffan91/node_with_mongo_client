const mongoose = require('mongoose');

const Product = require('./models/product');

const url = 'YOUR_URL_HERE';


mongoose.connect(url).then(() => {
    console.log('Connected to the database');

}).catch(() => {

    console.log('Could not connect to the database');
});


const createProduct = async (req, res, next) => {
    const createdProduct = new Product({
        name: req.body.name,
        price: req.body.price
    });

    const result = await createdProduct.save();

    res.json(result);

}

const getProducts = async (req, res, next) => {
    const products = await Product.find().exec();
    res.json({products});
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;

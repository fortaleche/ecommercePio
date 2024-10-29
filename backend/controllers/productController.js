const product = require('../models/products');

//obtener todos los productos

exports.getProducts = async (req, res) => {
    try {
        const products = await product.find();
        res.json(products);
    } catch (error) {
        console.error('error al obtener los productos: ', error);
        res.status(500).send('Error al obtener los productos');
    }
};

//crear un nuevo producto (admin)

exports.createProduct = async (req, res) => {
    try {
        const products = await product.find();
        res.json(products);
    } catch (error) {
        res.status(500).send('Error al crear el producto');
    }
}
const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
  .connect(
    "mongodb+srv://manu:SRdTMVNWVG9VOOQw@cluster0.thsvvhd.mongodb.net/products_test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  let result
  try {
    result = await createdProduct.save();
    console.log(typeof createdProduct._id);
  } catch (err) {
    return res.json({ message: "Could not store data." });
  }
    res.json(result);
};

const getProducts = async (req, res, next) => {
    let products;
    try {
        products = await Product.find().exec();
    } catch (err) {
        return res.json({message: 'Could not retrieve products.'})
    }
    res.json(products);
}

exports.createProduct = createProduct;
exports.getProducts = getProducts;

const express = require("express");
const Products = require("../models/productsmodels");
const router = express.Router();

//Get Products
router.get("/products", (req, res) => {
	try {
		Products.find((err, data) => {
			if (err) {
				return res.status(400).send({ message: "Error While Retrieving Product" });
			}
			res.status(200).send(data);
		});
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

//Get Specific Product
router.get("/products/:prodId", (req, res) => {
	try {
		Products.findOne({ _id: req.params.prodId }, (err, data) => {
			if (err) {
				return res.status(400).send({ message: "Error While Retrieving Product" });
			}
			res.status(200).send(data);
		});
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

//Create Products
router.post("/products", (req, res) => {
	try {
		const payload = req.body;
		const newProduct = new Products(payload);

		newProduct.save((err, data) => {
			if (err) {
				return res.status(400).send({ message: "Error While Product Adding" });
			}
			res.status(200).send({ productID: data._id, message: "Product Added Successfully" });
		});
		console.log("Product Added Successfully");
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

//Edit Products
router.put("/products/:prodID", (req, res) => {
	try {
		Products.findByIdAndUpdate({ _id: req.params.prodID }, { $set: req.body }, (err, data) => {
			if (err) {
				return res.status(400).send({ message: "Error While updating Product" });
			}
			res.status(201).send({ productID: data._id, message: "Product Details Successfully Updated" });
		});
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

//Delete Products
router.delete("/products/:prodID", (req, res) => {
	try {
		Products.deleteOne({ _id: req.params.prodID }, (err, data) => {
			if (err) {
				return res.status(400).send("Error while deleting Product");
			}
			res.status(200).send({ message: `Product with id ${req.params.prodID} has been Deleted Successfully.` });
		});
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;

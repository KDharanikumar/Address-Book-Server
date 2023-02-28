const mongoose = require("mongoose");

//Schema Definition
const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please Enter Name"],
		trim: true,
	},

	gender: {
		type: String,
		require: [true, "Please Enter Gender"],
		enum: {
			values: ["Male", "Female"],
			// values: ["Fruits", "Vegetables", "Drinks", "Foods", "Snacks"],
			message: "Please Select Gender",
		},
	},

	mobile: {
		type: Number,
		required: [true, "Please Enter Mobile No"],
		trim: true,
	},

	email: {
		type: String,
		required: [true, "Please Enter Email"],
		trim: true,
	},

	address: {
		type: String,
		required: [true, "Please Enter Address"],
	},

	pincode: {
		type: Number,
		required: [true, "Please Enter PinCode"],
	},

	createAt: {
		type: Date,
		default: Date.now(),
	},

	// unit: {
	//   type: String,
	//   required: true,
	//   trim: true,
	// },

	// images: [
	// 	{
	// 		image: {
	// 			type: String,
	// 			required: true,
	// 		},
	// 	},
	// ],

	// stock: {
	//   type: Number,
	//   required: [true, "Please Enter Stock"],
	//   maxLength: [20],
	// },
});

//Module Creation
module.exports = mongoose.model("Products", productSchema);

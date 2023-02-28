const express = require("express");
require("dotenv").config();
const db = require("./db/connect");
const cors = require("cors");

//Import Routes
const productRoutes = require("./router/productsroutes");
const userRouter = require("./router/userRouter");

const app = express();

// Connecting DB
db();

//MiddleWares
app.use(express.json());

//CORS
app.use(cors());

app.use("/api", productRoutes);
app.use("/users", userRouter);

const PORT = process.env.PORT || 4000;

app.listen(5000, () => {
	console.log(`App is Running on port ${PORT}`);
});

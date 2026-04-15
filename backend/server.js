import express from "express";
import cors from "cors";
import categoryRouter from "./routes/categoryRoutes.js";
import productRouter from "./routes/productRoutes.js";




const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/categories", categoryRouter);
app.use("/products", productRouter);

// start server
app.listen(PORT, () => {
  console.log("Server running on http://localhost:5000");
});
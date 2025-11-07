const express = require("express");
const cors = require("cors");
const productsRoute = require("./routes/products");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Root route
app.get("/", (req, res) => {
  res.send("Backend is running correctly 🚀");
});

// ✅ Product route
app.use("/api/products", productsRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});

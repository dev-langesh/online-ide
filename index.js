const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "server is running" });
});

app.listen(PORT, () => {
  console.log(`server is ready at http://localhost:${PORT}`);
});

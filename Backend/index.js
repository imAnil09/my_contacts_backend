const express = require("express");
const errorHandler = require("./middleWare/errorHandler");
const connectDb = require("./config/dbConnection");
require("dotenv").config();
const cors = require('cors');

const app = express();

connectDb();

const allowedOrigins = [
  "http://localhost:5173",
  "https://my-contacts-frontend.vercel.app"
];

app.use(cors({
  origin: allowedOrigins,
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));

const PORT = process.env.PORT || 5005;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "My Contacts Backend is running 🚀" });
});

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

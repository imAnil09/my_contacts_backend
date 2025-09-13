const express = require("express");
const errorHandler = require("./middleWare/errorHandler");
const connectDb = require("./config/dbConnection");
require("dotenv").config();
const cors = require('cors');

const app = express();

connectDb();

const allowedOrigins = [
  "http://localhost:5173", // for local dev
  "https://my-contacts-mern-project.vercel.app" // your deployed frontend
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps, Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// Handle preflight requests explicitly
app.options("*", cors());

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
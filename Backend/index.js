const express = require("express");
const errorHandler = require("./middleWare/errorHandler");
const connectDb = require("./config/dbConnection");
require("dotenv").config();
const cors = require("cors");

const app = express();
connectDb();

// ✅ Allowed origins
const allowedOrigins = [
  "http://localhost:5173", // local dev
  "https://my-contacts-mern-project.vercel.app" // deployed frontend
];

// ✅ CORS middleware (must be before routes)
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// ✅ Handle preflight requests explicitly
app.options("*", cors());

// ✅ Debug log (check origins in Vercel logs)
app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.path, "Origin:", req.headers.origin);
  next();
});

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Backend is running 🚀" });
});

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

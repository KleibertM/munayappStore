const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { route }= require('./src/routes/index')

const app = require('./src/server')
const { PORT } = require('./src/config');

app.use(morgan("dev"));
app.use(express.json());

// Lista de orígenes permitidos
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://munayapp-store.vercel.app/",
  "https://ecomarketsenati.onrender.com"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Tus rutas
app.use(route);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
const express = require('express');
const app = express();
const router = require('./routes/index');
const cors = require("cors");
const bodyParser = require('body-parser');
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json())
app.use(bodyParser.json())

const allowedOrigins = ['http://localhost:5173', 'https://munayapp-store.vercel.app/'];
const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use((req,res,next) => {
    console.log('pasasndo por el moddelware');
    next();
})
app.use(router)

module.exports = app
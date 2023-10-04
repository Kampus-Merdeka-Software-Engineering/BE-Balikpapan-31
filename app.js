require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// const { PrismaClient } = require('@prisma/client');

const cors = require('cors');
const routes = require('./routes');
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} ${new Date()}`);    
    next();
});

routes.forEach((route) => app.use(route));

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const errorHandler = require('./midlleware/error')
// Load env vars

dotenv.config({ path: './config/config.env' })

// Connect database
connectDB();

// route file
const fackbook = require('./routes/fackbook');

const app = express();

// Body Parse
app.use(express.json())


// Mount routes
app.use("/api/v1/fackbook", fackbook);

// Error handler
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(5000,
    console.log('App listening on port 5000!')
);
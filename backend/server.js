const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB(); 



app.listen(3000, () => {
  console.log(" Server running on http://localhost:3000");
});

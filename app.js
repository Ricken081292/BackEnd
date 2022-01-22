const express = require('express');
const app = express();
const port = 4000;
const productsRoute = require('./src/routes/products');


app.use('/',productsRoute);

app.listen(port, () => {
    console.log(`your server || http://localhost:${port}`)
})
const express = require('express');
const app = express();
const router = express.Router();
const port = 4000;


app.use(( ) => {
    console.log('hello server');
})

app.listen(port, () => {
    console.log(`your server || http://localhost:${port}`)
})
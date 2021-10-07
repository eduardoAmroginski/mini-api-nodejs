const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./config/routes')

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(port, () => {
    console.log(`Express started at http://localhost:${port}`);
});
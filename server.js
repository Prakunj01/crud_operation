const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Hello World");
});

const employeeRoutes = require('./src/routes/employee.routes')

// middleware
app.use('/api/v1/employees', employeeRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
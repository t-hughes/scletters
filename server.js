//Required Dependencies
let express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    session = require('express-session'),
    // passport = require('passport'),
    // FacebookStrategy = require('passport-facebook').Strategy,
    // port = process.env.PORT || 2000;
    port = 2000;

// TODO Setup localAuth for admin and possible user if you want to do user logins

//Init Express
let app = express();

//Controllers
let restCtrl = require('./controllers/restCtrl');

//Middleware and Controllers

app.use(bodyParser.json());
app.use(cors());

//Serving up Frontend files
app.use(express.static(__dirname + '/public'));

////////ENDPOINTS////////
let endpoints = ['customers', 'products', 'orders', 'order_details', 'templates'];

endpoints.forEach(endpoint => {
  app.post(`/api/${endpoint}/`, restCtrl.create(endpoint));
  app.get(`/api/${endpoint}/:id`, restCtrl.read(endpoint));
  app.get(`/api/${endpoint}/`, restCtrl.readList(endpoint));
  app.put(`/api/${endpoint}/:id`, restCtrl.update(endpoint));
  app.delete(`/api/${endpoint}/:id`, restCtrl.delete(endpoint));
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});

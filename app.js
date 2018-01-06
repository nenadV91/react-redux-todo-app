const path = require('path');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const eSession = require('express-session');
const MongoStore = require('connect-mongo')(eSession);
const passport = require('passport');
var cors = require('cors');


// DB connection
const {DB_USER, DB_PASS, DB_NAME} = process.env;
const dbString = `mongodb://localhost/${DB_NAME}`;
mongoose.connect(dbString);

// Require routes
const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');

require('./services/passport');

const app = express();

// Use middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(eSession({
  store: new MongoStore({ 
    mongooseConnection: mongoose.connection 
  }),
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());


// Use routes 
app.use('/', authRoutes);
app.use('/api', apiRoutes);


// Serve static files
app.use(express.static(path.join(__dirname, 'build')));


// Serve index.html and let React handle the rest
app.get('*', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

//Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('Server is running...'));
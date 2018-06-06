const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const routes = require('./config/routes');
const User = require('./models/user');

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
const { port, dbURI } = require('./config/environment');

mongoose.connect(dbURI);



app.use(express.static(`${__dirname}/public`));
app.use(ejsLayouts);
app.use(morgan('dev'));



app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET || 'ssh it\'s a secret',
  resave: false,
  saveUninitialized: false
}));

app.use((req, res, next) => {
  if(!req.session.userId) return next();
  console.log('session middleware');
  console.log(req.session);
  User
    .findById(req.session.userId)
    .populate({path: 'pictures', populate: {path: 'creator'}})
    .exec()
    .then((user) =>{
      res.locals.user = user;
      res.locals.isLoggedIn = true;
      next();
    });


});


app.use(routes);

app.listen(port, () => console.log('Express is listening to port 4000'));




// 1. touch index.js
// 2. yarn init
// 3. yarn add express (install express)
// 4. in index.js require express
// 5. create express app
// 6. listen for incoming traffic (on localhost 4000)
// 7. test if it's working, nodemon
// 8. create a request handler for '/'
// 9. test in browser (localhost:4000)
// 10. yarn add ejs
// 11. set up templating engine using app.set
// 12. make a template file
// 13. render the template file
// 14. yarn add express-ejs-layouts
// 15. get the app to use express-ejs-layouts using app.use
// 16. create a layout.ejs file
// 17. set up static folder
// 18. link static files in the layout.ejs file

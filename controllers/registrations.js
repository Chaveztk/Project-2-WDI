const User = require('../models/user');

function newRoute(req, res) {
  res.render('registrations/new');
}

function createRoute(req, res){
  console.log(req.body);
  User
    .create(req.body)
    .then((user)=> {
      console.log('yo', user);
      res.redirect('profiles/new');
    })
    .catch((err) =>{
      console.log(err);
    });
}

module.exports = {
  new: newRoute,
  create: createRoute
};

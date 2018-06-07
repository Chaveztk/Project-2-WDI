const UserDisplay = require('../models/profile.js');

function indexRoute(req, res){
  UserDisplay
    .find()
    .populate('creator')
    .exec()
    .then( users => {
      res.render('users/index', {users});
      console.log(users);
    });
}

function showRoute(req, res){
  UserDisplay
    .findById(req.params.id)
    .exec()
    .then( user => {
      res.render('users/show', {user});
    });
}



module.exports = {
  index: indexRoute,
  show: showRoute
};
// createComment: createCommentRoute

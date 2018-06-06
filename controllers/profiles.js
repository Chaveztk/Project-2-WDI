const UserProfile = require('../models/profile.js');

function indexRoute(req, res){
  UserProfile
    .find()
    .populate('creator')
    .exec()
    .then( profiles => {
      res.render('networks/index', {profiles});
      console.log(profiles);
    });
}

function showRoute(req, res){
  UserProfile
    .findById(req.params.id)
    .exec()
    .then( profile => {
      res.render('networks/show', {profile});
    });
}

function newRoute(req, res){
  if(!res.locals.isLoggedIn) return res.redirect('/');
  res.render('networks/new');
}

function createRoute(req, res){
  const profileData = req.body;
  profileData['creator'] = res.locals.user.id;
  UserProfile
    .create(req.body)
    .then((profile) =>{
      return res.redirect(`networks/${profile._id}`);
    });
}

function editRoute(req, res){
  UserProfile
    .findById(req.params.id)
    .exec()
    .then(profile =>{
      res.redirect('/networks/edit', {profile});
    });
}

function updateRoute(req, res){
  UserProfile
    .findById(req.params.id)
    .update(req.body)
    .then(profile => {
      return res.redirect(`/networks${profile.id}`);
    });
}

function deleteRoute(req, res){
  UserProfile
    .findById(req.params.id)
    .then(profile => {
      profile.remove();
      return res.redirect('/networks');
    });
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  new: newRoute,
  create: createRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
// createComment: createCommentRoute

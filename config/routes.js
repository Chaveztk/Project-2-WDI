const express  = require("express");
const router   = express.Router();

const static = require('../controllers/static');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const profiles = require('../controllers/profiles');

router.route('/')
  .get(profiles.index); // home page going to pictures

router.route('/registrations')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.route('/networks')
  .get(profiles.index)
  .post(profiles.create);

router.route('/networks/new')
  .get(profiles.new);

router.route('/networks/:id')
  .get(profiles.show)
  .put(profiles.update)
  .delete(profiles.delete);

router.route('/networks/:id/edit')
  .get(profiles.edit);

  // router.route('/networks/:id/comment')
  // .post(profiles.createComment);

module.exports = router;

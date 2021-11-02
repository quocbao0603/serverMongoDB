module.exports = function (app) {
  app.use('/classes', require('../controllers/course.route'));
};

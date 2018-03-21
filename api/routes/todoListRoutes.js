module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/eduardo_fam')
    .get(todoList.list_all_fam)
    .post(todoList.create_a_fam)
    .delete(todoList.delete_a_fam);;


  app.route('/eduardo_fam/:id')
    .get(todoList.read_a_fam)
    .put(todoList.update_a_fam);
};
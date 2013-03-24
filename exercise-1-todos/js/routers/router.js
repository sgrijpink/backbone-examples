var Workspace = Backbone.Router.extend({

  routes: {
    '*filter': 'setFilter'
  },

  setFilter: function(param) {
    if (param) {
      app.TodoFilter = param.trim();
    } else {
      app.TodoFilter = '';
    }

    app.Todos.trigger('filter');
  }
});

app.TodoRouter = new Workspace();
Backbone.history.start();


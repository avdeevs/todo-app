Todo.MustRoute = Ember.Route.extend Todo.TodoRoutesMixin,

  setupController: (controller, model)->
    todos = model.filter (todo)->
      todo.get('priority') == 'must'
    controller.set('model', todos)

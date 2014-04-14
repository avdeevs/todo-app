Todo.CouldRoute = Ember.Route.extend Todo.TodoRoutesMixin,

  setupController: (controller, model)->
    todos = model.filter (todo)->
      todo.get('priority') == 'could'
    controller.set('model', todos)

Todo.ShouldRoute = Ember.Route.extend Todo.TodoRoutesMixin,

  setupController: (controller, model)->
    todos = model.filter (todo)->
      todo.get('priority') == 'should'
    controller.set('model', todos)

Todo.MustRoute = Ember.Route.extend

  model: ->
    @store.findAll('todo')

  setupController: (controller, model)->
    todos = model.filter (todo)->
      todo.get('priority') == 'must'
    controller.set('model', todos)
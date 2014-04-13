Todo.MustRoute = Ember.Route.extend

  model: ->
    @store.findAll('todo')

  setupController: (controller, model)->
    console.log(model.get('firstObject.priority'))
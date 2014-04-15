Todo.TodoRoutesMixin = Ember.Mixin.create

  model: ->
    @store.findAll('todo')

  setupController: (controller, model)->
    fltr = @get('priorityFilter')
    todos = model.filter (todo)->
      todo.get('priority') == fltr
    controller.set('model', todos)

  renderTemplate: (controller)->
    @render 'shared',
      controller: controller

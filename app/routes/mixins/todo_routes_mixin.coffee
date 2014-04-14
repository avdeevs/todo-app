Todo.TodoRoutesMixin = Ember.Mixin.create

  model: ->
    @store.findAll('todo')

  renderTemplate: (controller)->
    @render 'shared',
      controller: controller
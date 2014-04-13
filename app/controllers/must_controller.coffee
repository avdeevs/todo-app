Todo.MustController = Ember.Controller.extend

  actions:
    createTodo: ->
      newTodo = @get('store').createRecord('todo',
        title: @get('newTodoTitle')
        isCompleted: false
        priority: 'must'
      )
      @get('model').pushObject(newTodo)
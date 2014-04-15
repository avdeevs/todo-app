Todo.TodoControllersMixin = Ember.Mixin.create

  actions:
    createTodo: ->
      title = @get('newTodoTitle')
      if not (title and title.trim())
        return

      newPriority = @get('newPriority')
      newTodo = @get('store').createRecord('todo',
        title: title
        isCompleted: false
        priority: newPriority
      )
      @get('model').pushObject(newTodo)

      @set('newTodoTitle', '')

      newTodo.save();
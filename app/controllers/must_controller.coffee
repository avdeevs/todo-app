Todo.MustController = Ember.Controller.extend

  actions:
    createTodo: ->
      title = @get('newTodoTitle')
      if not (title and title.trim())
        return

      newTodo = @get('store').createRecord('todo',
        title: title
        isCompleted: false
        priority: 'must'
      )
      @get('model').pushObject(newTodo)

      @set('newTodoTitle', '')

      newTodo.save();
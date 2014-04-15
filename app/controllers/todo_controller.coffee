Todo.TodoController = Ember.ObjectController.extend

  isCompleted: ((key, value)->
    model = @get('model')

    if value is undefined
      # property being used as a getter
      model.get('isCompleted');
    else
      # property being used as a setter
      model.set('isCompleted', value)
      model.save()
      value
  ).property('model.isCompleted')

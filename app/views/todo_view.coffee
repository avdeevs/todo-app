Todo.TodoView = Ember.View.extend
  tagName: 'td'
  classNameBindings: ['success']

  click: ->
    @toggleProperty('success')

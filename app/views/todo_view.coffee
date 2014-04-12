Todo.TodoView = Ember.View.extend
  tagName: 'td'
  classNameBindings: ['success']
  success: false

  click: ->
    @toggleProperty('success')
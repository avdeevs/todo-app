Todo.TodoView = Ember.View.extend
  tagName: 'li'
  classNames: ['list-group-item']
  classNameBindings: ['list-group-item-success']

  click: ->
    @toggleProperty('list-group-item-success')

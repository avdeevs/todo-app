Todo.Todo = DS.Model.extend
  title: DS.attr('string')
  isCompleted: DS.attr('boolean')
  priority: DS.attr('string')

Todo.Todo.FIXTURES = [
  {
    id: 1
    title: 'Learn Ember.js'
    isCompleted: true
    priority: 'must'
  },
  {
    id: 2
    title: '...'
    isCompleted: false
    priority: 'should'
  },
  {
    id: 3
    title: 'Profit!'
    isCompleted: false
    priority: 'could'
  }
]
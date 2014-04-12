Ember.Application.initializer

  name: 'initSharedStore'

  initialize: (container, application)->
    sharedStore = Ember.Object.create()

    container.optionsForType('globals', {instantiate: false, singleton: true})
    container.register('globals:shared', sharedStore)
    container.typeInjection('controller', 'shared', 'globals:shared')
    container.typeInjection('route', 'shared', 'globals:shared')

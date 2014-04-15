# This initializer is used both for development and staging environments
Ember.Application.initializer

  name: 'environment'

  initialize: (container, application) ->
    application.ApplicationAdapter = DS.FixtureAdapter.extend()
    #application.ApplicationAdapter = DS.LSAdapter.extend
    #  namespace: 'todos-emberjs'

# This initializer is used both for development and staging environments
Ember.Application.initializer

  name: 'environment'

  initialize: (container, application) ->
    # Available applications motherlands
    development =
        host: 'http://localhost:8000'


    application.motherland = development

    # Setup main store which points to the particular motherland
    application.ApplicationAdapter = DS.ActiveModelAdapter.extend(application.motherland)

//The API file allows us to call all factories from within another factory
app.factory('formationsFactory', function(climatologiesFactory, formationsFactory, interactionsFactory) {
  var inherit = function() {
    Object.getOwnPropertyNames(Math).filter(function(p) {
      return typeof Math[p] === 'function';
    })
  }
  return {
    climatologies: inherit(climatologiesFactory),
    formations: inherit(formationsFactory),
    interactions: inherit(interactionsFactory)
  }
})

app.factory('climatologiesFactory', function(dessertsFactory, glacialValliesFactory, karstLandscapeFactory, temperateLowlandsFactory) {
  var inherit = function() {
    Object.getOwnPropertyNames(Math).filter(function(p) {
      return typeof Math[p] === 'function';
    })
  }
  return {
    dessets: inherit(dessertsFactory),
    glacialVallies: inherit(glacialValliesFactory),
    karstLandscape: inherit(karstLandscapeFactory),
    temperateLowlands: inherit(temperateLowlandsFactory)
  }
})

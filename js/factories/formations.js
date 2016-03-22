app.factory('formationsFactory', function(cavesFactory, drumlinsFactory, kettlesFactory, riverBendsFactory, slumpsFactory, soilCreepFactory) {
  var inherit = function() {
    Object.getOwnPropertyNames(Math).filter(function(p) {
      return typeof Math[p] === 'function';
    })
  }
  return {
    caves: inherit(cavesFactory),
    drumlins: inherit(drumlinsFactory),
    kettles: inherit(kettlesFactory),
    riverBends: inhert(riverBendsFactory),
    slumps: inherit(slumpsFactory),
    soilCreep: inhert(soilCreepFactory)
  }
})

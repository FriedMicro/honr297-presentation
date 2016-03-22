app.factory('interactionsFactory', function(quizesFactory) {
  var inherit = function() {
    Object.getOwnPropertyNames(Math).filter(function(p) {
      return typeof Math[p] === 'function';
    })
  }
  return {
    quiz: inherit(quizesFactory)
  }
})

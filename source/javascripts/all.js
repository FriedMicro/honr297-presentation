//= require_tree .

var Quiz = function (container, filepath) {
  var self = this;
  self.container = container;

  $.getJSON(filepath, function(response){
    console.log("loading " + filepath);
  }).done(function(response) {
    loadJSON(response);
    loadQuiz();
  });

  var loadJSON = function(response) {
    self.json = response;
  }

  var loadQuiz = function() {
    $(self.container).css('display','block');
    $(self.container).html('<p>' + self.json.title + '</p>');
  }

};

(function() {

  $(document).ready(function() {
    console.log('document ready');
  });

})();
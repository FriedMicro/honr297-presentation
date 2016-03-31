//= require_tree .

var Quiz = function (filepath) {

  $.getJSON(filepath, function(response){
    console.log("loading " + filepath);
    console.log(JSON.stringify(response));
   });

};

(function() {

  $(document).ready(function() {
    console.log('document ready');
  });

})();
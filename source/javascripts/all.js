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
    var outputHTML;
    outputHTML += '<p class="quizTitle">' + self.json.title + '</p>';
    $.each(self.json.questions, function(index, question) {
      outputHTML += '<div class="questionWrapper" data-qindex="' + index + '">';
      outputHTML += '<p class="quizQuestion">' + question.question_name + '</p>';
      $.each(question.answers, function(index, answer) {
        outputHTML += '<p class="quizAnswer">' + (index+1) + ". " + answer + '</p>';
      });
      outputHTML += '</div>';
    });

    $(self.container).html(outputHTML);

    $('.quizAnswer').click(function() {
      var qindex = $(this).parent('.questionWrapper').html();
      console.log(qindex);
    });
  }
};

(function() {

  $(document).ready(function() {
    console.log('document ready');
  });

})();
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
    var outputHTML = "";
    outputHTML += '<h2 class="quizTitle">' + self.json.title + '</h2>';
    $.each(self.json.questions, function(index, question) {
      outputHTML += '<div class="questionWrapper" data-qindex="' + index + '">';
      outputHTML += '<h4 class="quizQuestion">' + question.question_name + '</h4>';
      $.each(question.answers, function(index, answer) {
        outputHTML += '<p class="quizAnswer" data-value="' + answer + '">' + (index+1) + ". " + answer + '</p>';
      });
      outputHTML += '</div>';
    });

    $(self.container).html(outputHTML);

    $('.quizAnswer').click(function() {
      $(this).siblings().removeClass('correct incorrect');
      var qindex = $(this).parent('.questionWrapper').data('qindex');
      if ($(this).data('value') == self.json.questions[qindex].correct_answer) {
        $(this).addClass('correct');
      } else {
        $(this).addClass('incorrect');
      }
    });
  }
};

(function() {

  $(document).ready(function() {

    $('.navigation').click(function () {
        $('.navigation').addClass('nav-hidden');
    });

    $('.nav-slideout-icon').click(function () {
        $('.navigation').removeClass('nav-hidden');
    });

  });

})();

app.directive("homeBackground.js", function() {
  return {
    restrict: 'E',
    template: "",
    replace: true,
    transclude: true,
    link: function($scope) {
      $scope.clicked = function() {

        }
      };
    }
  };
});

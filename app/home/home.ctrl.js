angular.module('epsilon-web')
.controller('HomeCtrl', function($mdDialog, $timeout, $mdSidenav, $mdUtil, langUtils){
  'use strict';
  var self = this;

  self.toggleInfo = $mdUtil.debounce(function(){
      $mdSidenav('info').toggle();
    },
    300
  );

  self.calculate = function(event){
    self.epsilon = langUtils.machineEpsilon();
    var message = 'Your browser\'s epsilon is: ' + self.epsilon + '.\n';
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.body))
        .title('Finished!')
        .content(message)
        .ariaLabel('Alert Dialog')
        .ok('Cool!')
        .targetEvent(event)
      );
  }

  self.closeInfo = function () {
    $mdSidenav('info').close();
  };
});

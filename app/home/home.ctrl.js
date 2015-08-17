angular.module('epsilon-web')
.controller('HomeCtrl', function($mdDialog, $timeout, $mdSidenav, $mdUtil, langUtils){
  'use strict';
  var self = this;

  self.toggleInfo = $mdUtil.debounce(function(){
      $mdSidenav('info').toggle();
    },
    300
  );

  self.calculate = function(event, radians){
    if(radians !== '0' && (!radians || !parseFloat(radians))){
      return;
    }
    self.res_obj = langUtils.taylorSine(parseFloat(radians));
    var message = 'Taylor\'s sine is: ' + self.res_obj.result + '.\n'
      + 'Iterations:' + ' ' + self.res_obj.iterations + '.\n'
      + '\nNative sine result: ' + Math.sin(radians);
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

angular.module('epsilon-web')
.factory('langUtils', function(){
  
  function machineEpsilon(){
    var x = 1
    while((1 + x) > 1){
      x = x / 2;
    }
    return x * 2;
  }

  return {
    'machineEpsilon': machineEpsilon
  };
});

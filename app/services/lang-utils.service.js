angular.module('epsilon-web')
.factory('langUtils', function(){
  'use strict';

  function machineEpsilon(){
    var x = 1;
    while((1 + x) > 1){
      x = x / 2;
    }
    return x * 2;
  }

  function taylorSine(x){
    var factor = x < 0 ? -1 : 1;
    x = Math.abs(x);
    while(!(x >= 0 && x <= 2 * Math.PI)){
      x -= 2 * Math.PI;
    }
    var partialRes = x;
    var res = x;
    var i = 1;
    while(true){
      var index = 2 * i + 1;
      partialRes += (Math.pow(-1, i) * Math.pow(x, index)) / factorial(index);
      if(partialRes === res){
        break;
      }
      res = partialRes;
      i++;
    }
    return {result: res * factor, iterations: i + 1};
  }

  function factorial(x){
    return x <= 1 ? 1 : factorial(x - 1) * x;
  }

  return {
    'machineEpsilon': machineEpsilon,
    'taylorSine': taylorSine
  };
});

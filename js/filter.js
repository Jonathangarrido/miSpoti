(function () {
  'use strict';

  function Tiempo(){
    return function(s) {

      function addZ(n) {
        return (n<10? '0':'') + n;
      }

      var ms = s % 1000;
      s = (s - ms) / 1000;
      var secs = s % 60;
      s = (s - secs) / 60;
      var mins = s % 60;
      var hrs = (s - mins) / 60;

      return addZ(mins) + ':' + addZ(secs);
      
    };
  }

  function EspacioGuion(){
    return function(value){
      return (!value) ? '' : value.replace(' ', '');
    };
  }

   angular
    .module('app.filter', [])
    .filter('Tiempo',Tiempo)
    .filter('EspacioGuion',EspacioGuion);
})();
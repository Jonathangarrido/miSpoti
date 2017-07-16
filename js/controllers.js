// File: home.ctrl.js
'use strict';

(function () {
  // CONTROLADOR DE LA VISTA HOME
  function HomeCtrl(Search,TopChile){

    var self = this;
    self.tops = [];
    self.search;
    self.buscadorCasilla = false;
    self.modalTrack = [];

    // Inicio la navegacion por Tabs
    $('#myTabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })

    // Obtengo los datos de las 50 canciones mas populares de chile
    TopChile.query()
      .$promise
      .then(function(user) {
        self.tops = user.tracks.items;
        console.log(self.tops)
        }, function(error) {
          console.log('Tiempo agotado del token. Ingrese un nuevo en ./js/services.js line 42')
      });

    // Obtengo los datos de la consulta
    self.busquedaFunction = function() {
      if(self.search.length > 2){
        var busquedaTracks = self.search.split(" ").join("-");
        Search.query({busqueda: busquedaTracks})
          .$promise
          .then(function(user) {
            self.busqueda = user.tracks.items;
            self.buscadorCasilla = true;
            }, function(error) {
            console.log('Tiempo agotado del token. Ingrese un nuevo en ./js/services.js line 42')
          });
      }else{
        self.busqueda = [];
        self.buscadorCasilla = false;
      }
    }

    // Envio datos al modal del track correspondiente
    self.modal = function(t){
      self.modalTrack = t;
    }

  }
  
  angular
    .module('app.controllers', ['app.services'])
    .controller('HomeCtrl', HomeCtrl);

})();
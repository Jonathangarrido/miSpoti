// File: home.ctrl.js
'use strict';

(function () {

  function Search($resource, Host, Authorization){
    return $resource(
      'https://api.spotify.com/v1/search?q=:busqueda&type=artist,track&market=CL&offset=0&limit=50',
      {busqueda:'@busq'},
      {
        query: {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Authorization
          }
        }
      }
    );
  }

  function TopChile($resource, Host, Authorization){
    return $resource(
      'https://api.spotify.com/v1/users/spotifycharts/playlists/37i9dQZEVXbL0GavIqMTeb?market=CL',
      null,
      {
        query: {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Authorization
          }
        }
      }
    );
  }


  angular
    .module('app.services', ['ngResource'])
    .constant('Host', 'api.spotify.com')
    .constant('Authorization', 'BQAK6NV8SY0vY80OVs7BWbhHZ0QLHSTFFnfVzanYchDMouX9iPM984bqI7uK7VqzVlmYEQOFxVzxNzakaQHOup9ainbe1uaWbrtYeVTKgOvcOIyVwNbQZ8NqJDfc6opAMVy7em-jYibVbBS08KzESOf02d2TIkmyupelH3WZ4Vb0nSIKA8_LfZVX0jqTarE2TcvWE0HIm6zjk4mjk88u')
    .factory('TopChile', TopChile)
    .factory('Search', Search);

})();

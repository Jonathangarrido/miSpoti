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
    .constant('Authorization', 'BQA-WyPj9X4ALd8d1JBMyTsgikU0IKbFsZeQLuc__BfDOpi249vaRGnWJMD-n8fq9UJlH6Fuum6PaDGVYBat3ivm6_rJcX2Dd2eGoXxSqFf3zWH5C-5Al_cG_0cYpPPpIRHTAV6vOgDGNYjqOspBguW1CE8C_o3x_Uai4z4cjrWgYguqthKWr-1seuDICh-itrbr0M2KhueAPuqKOw-T')
    .factory('TopChile', TopChile)
    .factory('Search', Search);

})();

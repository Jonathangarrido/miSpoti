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
    .constant('Authorization', 'BQBEq6WYskx8t2inSjUHeb0kpH-rUJaOt4aNd7mCwymOBN-rS4PhYlCOgTolG55sVK0ZhqXLMBV63iK9ZkytWyEqPkoHYEfbUug1XOtDNa090_715YHQVphwiJd7oXwJPzqgkCst-zl1ZRsn5vvtW6x95oqc9gFebpF-P0vmpgKkIhMwwxKQCA9mCFpiZ7zG7zYLEsP89bllODDYtnTi')
    .factory('TopChile', TopChile)
    .factory('Search', Search);

})();

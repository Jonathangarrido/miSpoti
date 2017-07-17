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
    .constant('Authorization', 'BQDONHk2oq8x-atFmqPO5f1wwq30_KhYvX9gLJLYOpIxwuzEeUedtNupjBNsDrdlgqMphhojv22UOLRexCMihBujzJevrAAhzx6SfDQocRjHypSYY2vbbXy2MKLbKYn6TSlfvPzxbBpMiYH0DwjZ3XQPLzocVUubvoa1EVpPSAQSkp1xNzELkINoQfTh4LAnBXOvfIbXhZGZLQo9N3GD')
    .factory('TopChile', TopChile)
    .factory('Search', Search);

})();

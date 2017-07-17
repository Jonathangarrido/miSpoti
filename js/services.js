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
    .constant('Authorization', 'BQDQUbVXWYFFLHD5v0Xm8w8HXzCNLt5jQUkIJ_7XqbEFOAyCpeqA992y6wp-espHixNyoEfBEz8RtkgmAJMSVsqZzUCMM9GKmsgp5mtZ24xjxIcfMjriDqlCWPbCCj0B8Z5H6JVIQfEum_RrCwFuDFQY6ZpOugqo3jMzPcuU4zaTK49fck16WCiKRYcIuxZu_yDUZXIm2TuVMBADmZlJ')
    .factory('TopChile', TopChile)
    .factory('Search', Search);

})();

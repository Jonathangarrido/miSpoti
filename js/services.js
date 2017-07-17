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
    .constant('Authorization', 'BQCwqYzsaNRpNj0glksAN8nzvL-EMKwvldB0qRrqfymemDd1Tl1qrUsjDzUAM6CwsxARUwN9oZZaEpxp4wkPFUVCYPMBDUwjYi9_YMzkwRNvkhdNx0xvRmL_y0o6gorKpO58phRdECG1QCg8UY4z6YGjYGd3vb2iY0oTd7TV2vpTFFFWpWf5JVisP5F9yF-EAXxpvUH533IvQMjVUP1I')
    .factory('TopChile', TopChile)
    .factory('Search', Search);

})();

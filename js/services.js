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
    .constant('Authorization', 'BQCZIgrO4iIsUgDGrIL3Jtl6BwjKc3UjP6Le0rYZ5sV7HUSurn7sGstq1FAVt7oydjznHvz_b_cTahtisVSFh9CJl5GzXCNdTBxN9h9zsl7yf6VFSszwEoOuZXVo5HTy2lo3lX8OW7EPbtCEV6A7mouBZ3nOB00ZhJeM7OEclTHXaXKa-qxdKVHbGd40n0MC0kaDe2RJAEeQfIpqyFXS')
    .factory('TopChile', TopChile)
    .factory('Search', Search);

})();

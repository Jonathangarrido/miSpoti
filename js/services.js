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
    .constant('Authorization', 'BQBnO9680atgNYX17_EBomdcyVWvq8L3px3fZB3s42T-HjvIu3PWkT7ci2uiCYD57YEgB69RVIUu3U3RiMrdUUd-OpPE0M-nN40kVQ8GkeCKgaVmv-WN6ASCninJOMJg1awstzKn_5hFXXodUNTEpnnu6RfhgPA0sph9TtbVg3KJsHUDntG9RTjXQaJoAMGWKOjeAzqsxGFfHkjtblAU')
    .factory('TopChile', TopChile)
    .factory('Search', Search);

})();

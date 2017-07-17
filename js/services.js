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
    .constant('Authorization', 'BQDjeqbeRfyCHyE58iwo3Ig0mtWQ98TjTFMoLhlbQrjJjvVySQvwubq9Ft5H_Ev3DtLd0nytBT0tOPZKDhLEWm7gDVaaUnnxgT0A0nt8pCQquaT8B0Kh43gYigf0sb_7A10ICMfxFxzR-n55Sg6rmqTMwa8Q6T5WkvfHotuj-ShkdgxFfPecOAu9GYnAmkn-07ySRmVKR09T7JI7pNi3')
    .factory('TopChile', TopChile)
    .factory('Search', Search);

})();

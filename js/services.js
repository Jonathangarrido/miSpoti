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
    .constant('Authorization', 'BQCH9gagyVWgvvj8CTBZIhPAjtwDYR4pq_Mj7Lk6IvDq4rFtomjFacU3sge6NOhlrFMMs0m2OnwWWU5t7NSyt-a7yjJxvsRuofsD5NT58ix8Ql7kQD2nW7xzWxVe3g9_TFLyGobHe4teWmTvJ94MCGyqXjR8fbXP40UC_vzT6hxS3cVbLyvAjPLaEuTk7Euu_Gl36q1hm_weaQ7iO_0G')
    .factory('TopChile', TopChile)
    .factory('Search', Search);

})();

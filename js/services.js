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
    .constant('Authorization', 'BQCHphov4Z43DugNcuAkXcHfWs_dwE3HE2FSaxCGXlt0uzSrU4Pq826uDPqWtkxkAdrGAaP5Kk--sL98dao-0Ne3WEE9AJ8KTJU2OPeAdTenZrYoq87OfR4s4TDAFus9Xk-HBlgeRUPusauUWT2S_Z_rLQPaNJYrnk_uyPfcGsYuTLNyyya0on001_KlVrSz2j32gMO5cc2Qu2GjFEIO')
    .factory('TopChile', TopChile)
    .factory('Search', Search);

})();

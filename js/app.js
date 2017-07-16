// File: App.js
'use strict';

(function () {

  // Loader
  $('body, html').css('overflow','hidden');
  self.miLoaded = function(){
    $('body, html').css('overflow','scroll');
    $('.entrada').addClass('entrada--off')
  }
    
  setTimeout(miLoaded, 2000);

  angular
    .module('app', [
      'app.controllers',
      'app.services',
      'app.filter',
      '720kb.socialshare'
    ]);

})();
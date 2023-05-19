var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil( 
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './autorizacao.html',
        './cadastro.html',
        './identificacao.html',
        './nova-senha.html',
        // assets\css caminho relativo
        './styles.css',
        /*
        './assets/img/favicon.png',
        './assets/img/logo.png',
        './assets/img/icon_128.png',
        './assets/img/icon_144.png',
        './assets/img/icon_152.png',
        './assets/img/icon_167.png',
        './assets/img/icon_180.png',
        './assets/img/icon_192.png',
        './assets/img/icon_256.png',
        './assets/img/icon_512.png',
        './assets/img/formulas.JPG',
        */
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('buenota-radio-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/service-worker.js',
        '/assets/background.png',
        '/icons/icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

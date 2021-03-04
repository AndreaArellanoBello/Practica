self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/Practica/',
      '/Practica/index.html',
      '/Practica/index.js',
      '/Practica/style.css',
      '/Practica/images/image1.jpg',
      '/Practica/images/image2.jpg',
      '/Practica/images/image3.jpg',
      '/Practica/images/image4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

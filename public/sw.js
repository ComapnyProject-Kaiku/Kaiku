let cacheData = "appData";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/bundle.js",
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "/index.html",
        "/static/media/camera-icon.185b470ad11119ed6e3efb262a7f2cb7.svg",
        "/static/media/logo.5cf927873296e6db83fd23c145ae89d0.svg",
        "/static/media/ellipse-2.8879025c68f49a35e238bb07ebf73d7b.svg",
        "/static/media/vector.4edb6b807d261a12f6a0826691e50911.svg",
        "/static/media/report-icn.1c9c43aae35c2c2f870d51cd83fc43ab.svg",
        "/static/media/home-icn.d200934f53fbba9c77ab533aedffa3b3.svg",
        "/static/media/gps-icon.e8fd9c881ecdfa7a2cba769d91a07e27.svg",
        "/static/media/group.6b84da5fd89a9d6b4c74e19b9602871a.svg",
        "/static/media/media.dea7a1321c11c1379e80b182df1553c3.svg",
        "/favicon.ico",
        "/manifest.json",
        "/logo192.png",
        "/",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((result) => {
      if (result) {
        return result;
      }
    })
  );
});

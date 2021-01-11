const sam_johnston_dev = "sam-dev-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/avatar1.png",
  "/images/avatar2.png",
  "/images/avatar3.png",
  "/images/avatar4.png",
  "/images/avatar5.png",
  "/images/avatar6.png",
  "/images/avatar7.png",
  "/images/avatar8.png",
  "/images/avatar9.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(sam_johnston_dev).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});

const CACHE_NAME = "john-moka-portfolio-v1";
const OFFLINE_URL = "/offline.html";

const ASSETS_TO_CACHE = [
  "/",
  "/offline.html",
  "/manifest.json",
  "/favicon.ico",
  "/globals.css"
];

// Install Event - Pre-cache essential shells
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Pre-caching offline fallback and shell assets");
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("[Service Worker] Removing old cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Serve from cache, fallback to network, then offline page
self.addEventListener("fetch", (event) => {
  // Only handle GET requests
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          // Check if valid response
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== "basic") {
            return networkResponse;
          }

          // Cache dynamically fetched items (only static files and pages)
          const responseToCache = networkResponse.clone();
          const url = new URL(event.request.url);
          const isStaticAsset = ASSETS_TO_CACHE.includes(url.pathname) || 
                                url.pathname.endsWith(".js") || 
                                url.pathname.endsWith(".css") || 
                                url.pathname.endsWith(".png") || 
                                url.pathname.endsWith(".jpg") || 
                                url.pathname.endsWith(".svg");

          if (isStaticAsset) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }

          return networkResponse;
        })
        .catch(() => {
          // If network fetch fails and request is for an HTML page (navigation)
          if (event.request.mode === "navigate" || (event.request.headers.get("accept") && event.request.headers.get("accept").includes("text/html"))) {
            return caches.match(OFFLINE_URL);
          }
        });
    })
  );
});

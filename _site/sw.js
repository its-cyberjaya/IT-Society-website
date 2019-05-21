const version = '20190521174320';
const cacheName = `static::${version}`;

const buildContentBlob = () => {
  return ["/general/2015/09/16/Ruby-on-Rails-Workshop/","/tutorial/2015/09/16/How-To-Validate-Google-Forms/","/events/2015/09/05/Polymer-Summit-Extended-2015/","/events/2015/08/19/Microsot-Azure-workshop/","/events/2015/08/18/RESTful-API-with-Laravel-workshop/","/events/2015/08/16/Startup-Featurette/","/general/2015/08/13/conduct-your-workshop-with-IT-Society/","/general/2015/08/07/initial-commit/","/about/","/categories/","/elements/","/blog/","/contact/","/events/","/join/","/partners/","/MadeByStudents/","/","/manifest.json","/assets/search.json","/search/","/assets/styles.css","/redirects.json","/blog/page2/","/feed.xml","/sitemap.xml","/robots.txt","", "/assets/default-offline-image.png", "/assets/scripts/fetch.js"
  ]
}

const updateStaticCache = () => {
  return caches.open(cacheName).then(cache => {
    return cache.addAll(buildContentBlob());
  });
};

const clearOldCache = () => {
  return caches.keys().then(keys => {
    // Remove caches whose name is no longer valid.
    return Promise.all(
      keys
        .filter(key => {
          return key !== cacheName;
        })
        .map(key => {
          console.log(`Service Worker: removing cache ${key}`);
          return caches.delete(key);
        })
    );
  });
};

self.addEventListener("install", event => {
  event.waitUntil(
    updateStaticCache().then(() => {
      console.log(`Service Worker: cache updated to version: ${cacheName}`);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(clearOldCache());
});

self.addEventListener("fetch", event => {
  let request = event.request;
  let url = new URL(request.url);

  // Only deal with requests from the same domain.
  if (url.origin !== location.origin) {
    return;
  }

  // Always fetch non-GET requests from the network.
  if (request.method !== "GET") {
    event.respondWith(fetch(request));
    return;
  }

  // Default url returned if page isn't cached
  let offlineAsset = "/offline/";

  if (request.url.match(/\.(jpe?g|png|gif|svg)$/)) {
    // If url requested is an image and isn't cached, return default offline image
    offlineAsset = "/assets/default-offline-image.png";
  }

  // For all urls request image from network, then fallback to cache, then fallback to offline page
  event.respondWith(
    fetch(request).catch(async () => {
      return (await caches.match(request)) || caches.match(offlineAsset);
    })
  );
  return;
});

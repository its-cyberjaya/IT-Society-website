const version = '20201207133644';
const cacheName = `static::${version}`;

const buildContentBlob = () => {
  return ["/events/2020/12/07/Tech-Career-Days-2021/","/events/2020/08/14/CodeContest-1/","/events/2020/08/14/BarCamp-2020/","/general/2020/07/18/FCI-Jumpstart-Orientation-2020-post-event/","/events/2020/07/08/FCI-Jumpstart-Orientation-2020/","/general/2019/06/11/Google-Developer-Student-Club/","/events/2018/12/23/Blockchain-&-Crytocurrency-Talk/","/events/2018/12/22/FCI-Jumpstart-Orientation-2018/","/general/2017/09/17/Binary-Hackathon/","/events/2017/06/30/Google-Ignite-2017/","/about/","/categories/","/elements/","/blog/","/contact/","/events/","/join/","/scoreboard/","/partners/","/MadeByStudents/","/","/manifest.json","/newpage/","/assets/search.json","/assets/styles.css","/redirects.json","/blog/page2/","/blog/page3/","/blog/page4/","/blog/page5/","/blog/page6/","/blog/page7/","/blog/page8/","/blog/page9/","/feed.xml","/sitemap.xml","/robots.txt","", "/assets/default-offline-image.png", "/assets/scripts/fetch.js"
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

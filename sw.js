const filesToCache = ['./', './index.html']
const cacheName = 'ebook'
const version = '0.0.1'

// install
self.addEventListener('install', (event) => {
  console.log('installing…')
  self.skipWaiting();
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('Caching app ok')
      return cache.addAll(filesToCache)
    })
  )
})

// activate
self.addEventListener('activate', (event) => {
  console.log('now ready to handle fetches!')
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      var promiseArr = cacheNames.map(function (item) {
        if (item !== cacheName) {
          // Delete that cached file
          console.log(
            '[ServiceWorker] Removing Cached Files from Cache - ',
            item
          )
          return caches.delete(item)
        }
      })
      return Promise.all(promiseArr)
    })
  ) // end event.waitUntil
})

// fetch
self.addEventListener('fetch', (event) => {
  const tryFetch = fetch(event.request).then(
    (res) => {
      var clone = res.clone()
      caches.open(cacheName).then(function (cache) {
        cache.put(event.request, clone)
      })
      return res
    }
  )
  const promise = caches.match(event.request).then(cached => {
    return tryFetch.catch((err) => {
      if(!cached) throw err
      console.warn('[ServiceWorker] Network Error! resource serve from cache.')
      return cached
    })
  })
  event.respondWith(promise);
})

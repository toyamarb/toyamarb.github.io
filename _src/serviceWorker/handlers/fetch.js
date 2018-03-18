import cacheResources from '../../cacheResources';

const isApiRequest = (url) => cacheResources.api.some(apiUrl => url.startsWith(apiUrl));

const respond = async (e) => {
  const response = await caches.match(e.request);
  return response || fetch(e.request);
};

const cacheAndRespondApi = async (e) => {
  const response = await fetch(e.request);
  const cache = await caches.open(cacheResources.version);
  cache.put(e.request.url, response.clone());
  return response;
};

export default function(event) {
  if (event.request.method !== 'GET') return;

  if (isApiRequest(event.request.url)) {
    event.respondWith(cacheAndRespondApi(event));    
  } else {
    event.respondWith(respond(event));
  }
};

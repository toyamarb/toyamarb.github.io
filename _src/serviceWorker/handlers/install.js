import cacheResources from '../../cacheResources';

const cacheStaticFiles = async () => {
  const cache = await caches.open(cacheResources.version);

  cache.addAll(cacheResources.externals);
  await cache.addAll(cacheResources.resources);
};

export default function (event) {
  event.waitUntil(cacheStaticFiles().then(() => self.skipWaiting()));
};

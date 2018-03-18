import cacheResources from '../../cacheResources';

const clearCache = async () => {
  const keys = await caches.keys();

  await Promise.all(
    keys
      .filter(key => key != cacheResources.version)
      .map(key => caches.delete(key))
  );
};

export default function(event) {
  event.waitUntil(clearCache().then(() => self.clients.claim()));
};

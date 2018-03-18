import handlers from './serviceWorker/handlers';

self.addEventListener('install', handlers.install);
self.addEventListener('activate', handlers.activate);
self.addEventListener('fetch', handlers.fetch);

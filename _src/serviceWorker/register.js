export default async function() { 
  if (!('serviceWorker' in navigator)) return;
  
  const registration = await navigator.serviceWorker.register('/serviceWorker.js');

  registration.update();
};

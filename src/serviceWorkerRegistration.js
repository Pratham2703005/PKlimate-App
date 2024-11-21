// serviceWorkerRegistration.js

// Check if service workers are supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/serviceWorker.js')  // Path relative to the root
        .then((registration) => {
          console.log('Service Worker registered with scope: ', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker registration failed: ', error);
        });
    });
  }
  
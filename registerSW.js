if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/fokusrad-app/sw.js', { scope: '/fokusrad-app/' })})}
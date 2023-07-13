// main.js
let worker = new Worker('worker.js');
// listen to message event of worker
worker.addEventListener('message', function(event) {
    console.log('message received from workerFor => ', event.data);
});
// listen to error event of worker
worker.addEventListener('error', function(event) {
    console.error('error received from workerFor => ', event);
});
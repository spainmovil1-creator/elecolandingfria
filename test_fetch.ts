import http from 'http';

http.get('http://localhost:3000/elena2.jpg', (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log('Headers:', res.headers);
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});

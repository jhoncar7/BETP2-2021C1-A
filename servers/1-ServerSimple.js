import http from 'http';

http.createServer((request, response) =>{
    response.writeHead(200, {'Content-Type': 'text/html'} );
    response.write('<h1>Hola mundo desde un servidor web</h1>');
    response.end();
}).listen(3000, '127.0.0.1', ()=>{
    console.log('Servidor Web activo');
});
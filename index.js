const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

app.listen(port, () =>{
    console.log('Running the server on Port', port);
})
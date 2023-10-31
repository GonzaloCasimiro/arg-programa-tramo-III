//CREAR UN SERVIDOR
const http=require('node:http');

const PORT=5000;
const servidor=http.createServer();

servidor.listen(PORT,()=>{
    console.log("servidor corriendo en el puerto: "+PORT)
});

//ENRUTAMIENTO => asociar una url con una accion o recurso que mi app debe manejar


const express = require('express');
const app = express();
const port = 3000;
app.use(express.static(__dirname + "/public"))

app.use('/', (req, res) => {res.status(404).sendFile(__dirname + "/public/404.html")})

app.get('/', (req, res) => {res.send('Mi respuesta desde express v2')})

app.get('/servicios', (req, res) => {res.send('Mi respuesta desde Servicio en expressv.2')})
app.get('/proyectos', (req, res) => {res.send('Mi respuesta desde Servicio en expressv.2')})
app.get('/tareas', (req, res) => {res.send('Mi respuesta desde Servicio en expressv.2')})
app.get('/modulos', (req, res) => {res.send('Mi respuesta desde Servicio en expressv.2')})
app.get('/proformas', (req, res) => {res.send('Mi respuesta desde Servicio en expressv.2')})

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port)

})


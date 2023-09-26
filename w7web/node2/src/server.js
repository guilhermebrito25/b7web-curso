import express from 'express';
import mainRoutes from './routes/index.js';

const server = express()
const port = 8080

server.use(mainRoutes);

server.use((req, res) => {
    res.status(404).send('Página não encontrada')
})
server.listen(port)
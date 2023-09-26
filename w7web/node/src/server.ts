import express from "express";
import mainRoutes from './routes/index'



const server = express()

server.use(mainRoutes)


server.listen(80);
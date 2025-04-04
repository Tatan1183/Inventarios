// importal framework express
import express from "express";
import servicioRoutes from "./routes/servicios.routes.js"

//asignamos a app toda la funcionalidad para mi server web
const app = express();

//setear un puerto a mi web server
app.set("port",5000)

//routes
app.use("/api/servicios",servicioRoutes)
//se pone disponible el server app para toda la app
export default app;



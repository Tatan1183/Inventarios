import {Router} from "express";
import { methodHTTP as servicioController} from "../controllers/servicio.controller.js";
// creacion de enrutador
const router = Router();

//config respuest from server metod http get
router.get("/", servicioController.getServicios); // Acceso correcto a la función

//se hace disponible el server app para toda la app
export default router;
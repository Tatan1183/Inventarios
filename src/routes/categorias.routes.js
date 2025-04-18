import {Router} from "express";
import { methodHTTP as categoriaController} from "../controllers/categoria.controller.js";
// creacion de enrutador
const router = Router();

//config respuest from server metod http get
router.get("/", categoriaController.getCategorias); // Acceso correcto a la función

//se hace disponible el server app para toda la app
export default router;
import { Router } from "express";
import { 
    getEmpleados, 
    crearEmpleados, 
    updateEmpleados, 
    deleteEmpleados, 
    getOneEmpleado 
} from "../controllers/empleados.controller.js";

const router = Router()

router.get('/empleados', getEmpleados)
router.get('/empleados/:id', getOneEmpleado)
router.post('/empleados', crearEmpleados)
//PUT para actualizar objeto completo sino usar PATCH
router.patch('/empleados/:id', updateEmpleados)
router.delete('/empleados/:id', deleteEmpleados)

export default router
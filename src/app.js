//import requiere de node v16 o superior
import express from 'express';
import empleadosRoutes from './routes/empleados.routes.js'
const app = express()

//Para poder manipular los archivos json
app.use(express.json())
app.use('/api/',empleadosRoutes)

//En caso de solicitar una url que no este definida
app.use((req, res, next ) => {
    res.status(404).json({
        message: 'url not found'
    })
})

export default app;


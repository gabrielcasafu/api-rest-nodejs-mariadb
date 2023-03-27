import { pool } from '../database/db.js';

export const getEmpleados = async (req, res) =>{
    try {
        const result = await pool.query('SELECT * FROM empleado');
        res.json(result)
    }catch (error){
        return res.status(500).json({
            message: 'Server not found'
        })
    }
}

export const getOneEmpleado = async (req, res) =>{
    const { id } = req.params
    try {
        const result = await pool.query('SELECT * FROM empleado WHERE id=?', [id]);
        if (result.length == 0) return res.status(404).send({
            message: 'Empleado not found'
        })
        res.json(result)
    }catch (error){
        return res.status(500).json({
            message: 'Server not found'
        })
    }
    
}

export const crearEmpleados = async (req, res) => {
    const { name, salary } = req.body;
    try {
        const result = await pool.query('INSERT INTO empleado(name, salary) VALUES(?,?)', [name, salary]);
        console.log(result)
        res.send({
            name,
            salary
        })
    }catch (error){
        return res.status(500).json({
            message: 'Server not found'
        })
    }
    
}

export const updateEmpleados = async (req, res) => {
    const { id } = req.params;
    const { name, salary } = req.body;
    try{
        const result = await pool.query('UPDATE empleado SET name= IFNULL(?, name), salary=IFNULL(?, salary) WHERE id=?', [name, salary, id]);
        if (result.affectedRows === 0) return res.status(404).send({
            message: 'Empleado not found'
        })
        const rows = await pool.query('SELECT * FROM empleado WHERE id=?', [id]);
        res.json(rows[0])
    }catch (error){
        return res.status(500).json({
            message: 'Server not found'
        })
    }
    
}

export const deleteEmpleados = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM empleado WHERE id=?', [id]);
        // sendStatus(204) fue bien pero no debuelvo msj al cliente
        res.sendStatus(204)
    }catch (error){
        return res.status(500).json({
            message: 'Server not found'
        })
    }
    
}
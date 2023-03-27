//const mariadb = require('mariadb');
import mariadb from 'mariadb'
import {
     DB_HOST, 
     DB_PORT, 
     DB_USER, 
     DB_PASSWORD, 
     DB_DATABASE
} from '../config.js'

export const pool = mariadb.createPool({
     host: DB_HOST, 
     user: DB_USER, 
     password: DB_PASSWORD,
     database: DB_DATABASE,
     port: DB_PORT,
     connectionLimit: 5,
});
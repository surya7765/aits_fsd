import { createPool } from 'mysql2/promise'
import 'dotenv/config'

const pool = createPool({
    port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DB_NAME,
    user: process.env.MYSQL_USER,
})

const connectToDB = async () => {
    try {
        await pool.getConnection();
        console.log("Successfully connected to DB! 🎉");
    } catch (error) {
        console.log("Error getting connection from DB: " + error.message);
    }
}

export {connectToDB, pool}
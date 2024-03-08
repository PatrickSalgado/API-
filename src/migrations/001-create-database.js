const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createDatabase() {
    try{
        const connection = await mysql.createConnection({
            host: databaseConfig.host,
            user: databaseConfig.user,
            password: databaseConfig.password,    
        });
        await connection.query(
            `create database if not exists ${databaseConfig.database}` 
        );
        await connection.end();
    
        console.log("Database createde!");
    } catch (error){
        console.log(`Error creating database: ${error}`);
    }
    
}

createDatabase();

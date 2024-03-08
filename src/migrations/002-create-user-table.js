const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createUserTable() {
    try{
    const connection = await mysql.createConnection(databaseConfig);
    
    await connection.query(`USE ${databaseConfig.database}`);
    
    await connection.query(`Create table if not exists user(
        id int not null auto_increment primary key,
        name varchar(255) not null,
        password varchar(255) not null,
        email varchar(255) not null

    )`);

    await connection.end();
    
    console.log("Table user created!")

    }catch (error){

        console.log(`Error creating database: ${error}`);
    } 
    
}

createUserTable();

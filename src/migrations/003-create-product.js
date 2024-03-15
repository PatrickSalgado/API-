const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createproductTable() {
    try{
    const connection = await mysql.createConnection(databaseConfig);
    
    await connection.query(`USE ${databaseConfig.database}`);
    
    await connection.query(`Create table if not exists product(
        id int not null auto_increment primary key,
        descricao varchar(255) not null,
        quantidadeEstoque varchar(255) not null,
        unidadeMedida varchar(255) not null,
        valorUnidade varchar(255) not null
    )`);

    await connection.end();
    
    console.log("Table product created!")

    }catch (error){

        console.log(`Error creating table product: ${error}`);
    } 
    
}

createproductTable();

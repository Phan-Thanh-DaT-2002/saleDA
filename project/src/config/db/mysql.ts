import mysql from 'mysql';


const connection = {
    user: 'root',
    password: '1411',
    host: 'localhost',
    database: 'db_mysql',
};

async function Connect() {
    try {
        await mysql.createConnection(connection);
        console.log('Connection ok');
    } catch (error) { 
        console.log('Error creating connection');

    }
}
export { Connect };





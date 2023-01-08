import mysql from 'mysql';


const params = {
    user: 'root',
    password: '1411',
    host: 'localhost',
    database: 'db_mysql',
};

async function Connect() {
    try {
        await mysql.createConnection(params);
        console.log('Connection ok');
    } catch (error) { 
        console.log('Error creating connection');

    }
}
export { Connect };




// const Query = async (connection: mysql.Connection, query: string) =>
//     new Promise((resolve, reject) => {
//         connection.query(query, connection, (error, result) => {
//             if (error) {
//                 reject(error);
//                 return;
//             }

//             resolve(result);
//         });
//     });


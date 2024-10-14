// // utils/executeQuery.ts (or .js)
// import mysql from 'mysql2/promise';

// let connection;

// export const getConnection = async () => {
//     if (!connection) {
//         connection = await mysql.createConnection({
//             host: process.env.DB_HOST,
//             user: process.env.DB_USER,
//             password: process.env.DB_PASSWORD,
//             database: process.env.DB_NAME,
//         });
//     }
//     return connection;
// };

// export const executeQuery = async ({ query, values }) => {
//     const conn = await getConnection();
//     const [rows] = await conn.execute(query, values);
//     return rows;
// };

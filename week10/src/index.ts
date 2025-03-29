import {Client} from 'pg'

const client = new Client({
    // host : "",
    // port : 5334,
    // database : "",
    // user : "",
    // password : "",

    connectionString: "postgresql://neondb_owner:npg_O6jJEsxVWt0N@ep-hidden-pond-a5c6oqq6-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
})

async function createTable() {
    try {
        await client.connect();
        // const result = await client.query(`
        //     CREATE TABLE users (
        //         id SERIAL PRIMARY KEY,
        //         username VARCHAR(50) UNIQUE NOT NULL,
        //         email VARCHAR(255) UNIQUE NOT NULL,
        //         password VARCHAR(255) NOT NULL,
        //         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        //     );
        // `);
        const insertQuery = "INSERT INTO users (username,email,password) Values ('naman', 'naman@gmail.com', 'hello');";
        const result = await client.query(insertQuery);
        console.log('Table created successfully:', result);
    } catch (error) {
        console.error('Error creating table:', error);
        throw error;
    } finally{
        await client.end();
    }
}

createTable();
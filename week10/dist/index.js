"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    // host : "",
    // port : 5334,
    // database : "",
    // user : "",
    // password : "",
    connectionString: "postgresql://neondb_owner:npg_O6jJEsxVWt0N@ep-hidden-pond-a5c6oqq6-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
});
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
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
            const result = yield client.query(insertQuery);
            console.log('Table created successfully:', result);
        }
        catch (error) {
            console.error('Error creating table:', error);
            throw error;
        }
        finally {
            yield client.end();
        }
    });
}
createTable();

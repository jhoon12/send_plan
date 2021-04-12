import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
    database : {
        user : process.env.DB_USERNAME || 'root',
        password : process.env.DB_PASSWORD,
        name : process.env.DB_DBNAME || 'typescript_test',
        host : process.env.DB_HOST || 'localhost',
        port : process.env.DB_PORT || 3301,
        dialect : "mysql"
    }
}
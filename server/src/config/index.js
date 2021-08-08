import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    CORS: process.env.CORS,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
}
import { Sequelize } from "sequelize"

export const sequelize = new Sequelize(
    'studycardsmdb',
    'admin', //usuario
    'adminadmin', //contraseña
    {
        host: 'studycardsmdb.cn0lov2coyhd.us-west-2.rds.amazonaws.com',
        dialect: 'mysql',
        pool:{
            max:5,
            min:0,
            require: 30000,
            idle:10000
        },
        logging: false //log de operaciones
    }
)
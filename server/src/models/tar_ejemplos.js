import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Tar_ejemplos = sequelize.define('Tar_ejemplos',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_tarjeta: {
        type: Sequelize.INTEGER,
    },
    ejemplo: {
        type: Sequelize.TEXT
    },
    estado: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
},{
    timestamps:false
});

export default Tar_ejemplos;
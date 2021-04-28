import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Tar_ejemplos = sequelize.define('Tar_ejemplos',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_tarjeta: {
        type: Sequelize.INTEGER,
    },
    ejemplo: {
        type: Sequelize.TEXT
    }
},{
    timestamps:false
});

export default Tar_ejemplos;
import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Tar_contenidos = sequelize.define('Tar_contenidos',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_tarjeta: {
        type: Sequelize.INTEGER,
    },
    contenido: {
        type: Sequelize.TEXT
    },
    estado: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
},{
    timestamps:false
});

export default Tar_contenidos;
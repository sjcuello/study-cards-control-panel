import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Tar_contenidos = sequelize.define('Tar_contenidos',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_tarjeta: {
        type: Sequelize.INTEGER,
    },
    contenido: {
        type: Sequelize.TEXT
    }
},{
    timestamps:false
});

export default Tar_contenidos;
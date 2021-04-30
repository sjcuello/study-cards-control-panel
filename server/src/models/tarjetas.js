import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Tar_contenidos from './tar_contenidos';
import Tar_ejemplos from './tar_ejemplos';


const Tarjetas = sequelize.define('Tarjetas',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_tema_estudio: {
        type: Sequelize.INTEGER,
    },
    titulo: {
        type: Sequelize.TEXT
    },
    color: {
        type: Sequelize.TEXT
    },
    estado: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
},{
    timestamps:false
});

Tarjetas.hasMany(Tar_contenidos, {foreignKey: 'id_tarjeta', sourceKey: 'id'})
Tarjetas.hasMany(Tar_ejemplos, {foreignKey: 'id_tarjeta', sourceKey: 'id'})

Tar_contenidos.belongsTo(Tarjetas, {foreignKey: 'id_tarjeta', sourceKey: 'id'})
Tar_ejemplos.belongsTo(Tarjetas, {foreignKey: 'id_tarjeta', sourceKey: 'id'})

export default Tarjetas;
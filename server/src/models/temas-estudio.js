import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Tarjetas from './tarjetas'

const TemasEstudio = sequelize.define('Temas-estudio',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_disciplina: {
        type: Sequelize.INTEGER,
    },
    nombre: {
        type: Sequelize.TEXT
    },
    color: {
        type: Sequelize.TEXT
    },
    tag: {
        type: Sequelize.TEXT
    }
},{
    timestamps:false
});

TemasEstudio.hasMany(Tarjetas, {foreignKey: 'id_tema_estudio', sourceKey: 'id'})
Tarjetas.belongsTo(TemasEstudio, {foreignKey: 'id_tema_estudio', sourceKey: 'id'})

export default TemasEstudio;
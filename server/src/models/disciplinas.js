import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import TemasEstudio from './temas-estudio';

const Disciplinas = sequelize.define('Disciplinas',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
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

Disciplinas.hasMany(TemasEstudio, {foreignKey: 'id_disciplina', sourceKey: 'id'})
TemasEstudio.belongsTo(Disciplinas, {foreignKey: 'id_disciplina', sourceKey: 'id'})

export default Disciplinas;
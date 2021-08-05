import { json } from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import disciplinasRoute from './routes/disciplinas';
import temasEstudioRoute from './routes/temas-estudio';
import tarjetasRoute from './routes/tarjetas';
import tarContenidoRoute from './routes/tar_contenidos';
import tarEjemploRoute from './routes/tar_ejemplos';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(json())


app.use('/api/disciplinas', disciplinasRoute)
app.use('/api/temas-estudio', temasEstudioRoute)
app.use('/api/tarjetas', tarjetasRoute)
app.use('/api/tar-contenido', tarContenidoRoute)
app.use('/api/tar-ejemplo', tarEjemploRoute)


export default app;
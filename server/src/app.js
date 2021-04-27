import { json } from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import projectRoute from './routes/project';
import taskRoute from './routes/task';


const app = express();


app.use(morgan('dev'));
app.use(json())


app.use('/api/project', projectRoute)
app.use('/api/tasks',taskRoute)



export default app;
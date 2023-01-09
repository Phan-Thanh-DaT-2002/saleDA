import path from 'path';
import express, { Express, Request, Response } from 'express';
import { engine } from 'express-handlebars';
import dotenv from 'dotenv';
import { router } from './routers/index.router';
import "reflect-metadata";


import { Connect } from './config/db/mysql';


dotenv.config();
Connect()

const app: Express = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Satic file 
app.use(express.static(path.join('./src/public')));

//Express handlebar
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join('./src/resources/views'));

//Routes 
app.use('/', router);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});


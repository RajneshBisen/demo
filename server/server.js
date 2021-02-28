import express from 'express';
import userRoute from './route/user';
import bodyParser from 'body-parser';
require('./db');
const app = express();
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
userRoute(app);

// console.log(process.env.NODE_ENV)
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev';
app.get('/', (req, res) => res.send(`<h1>demo 1 ${env} environment</h1>`));

const port = process.env.NODE_ENV === 'dev' ? 4545 : 4000;

app.listen(port, () => console.log(`Backend is running on port ${port}`));
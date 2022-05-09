import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routers/index.js';
import { mongoConnection } from './database.js';

dotenv.config();

const app = express();

app.use(json());
app.use(cors());
app.use(router);


app.delete('/logoff', async (req, res) => { /*  delete user session */

   

});


const port = process.env.PORT || 5000;

app.listen(port, () => {

    mongoConnection();
    console.log('MyWallet API is running!');

})
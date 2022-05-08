import express, { json } from 'express';
import dotenv from 'dotenv';
import Joi from 'joi';
import cors from 'cors';
import bcrypt from 'bcrypt';
import { v4 } from 'uuid';

const app = express();

app.use(json());
app.use(cors());

dotenv.config();

let database = null;

app.get('/home', async (req, res) => {

    const { authorization } = req.headers.authorization;
    const token = authorization ?.replace('Bearer', '').trim();

    if (!token) {

        return res.sendStatus(401);

    }

    const session = await database.collection('sessions').findOne({ token });
    
    if (!session) {

        return res.sendStatus(401);

    }

    const user = await database.collection('users').findOne({ _id: session.userId });

    if (!user) {

        return res.status(404).send('Not found');

    }

    delete user.password;
    delete user._id;
    
    res.send(user);

});

app.delete('/logoff', async (req, res) => { /*  delete user session */

   

});


const port = process.env.PORT || 5000;

app.listen(port, () => {

    console.log('MyWallet API is running!');

})
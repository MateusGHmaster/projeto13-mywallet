import express, { json } from 'express';
import dotenv from 'dotenv';
import Joi from 'joi';
import cors from 'cors';
import bcrypt from 'bcrypt';
import { v4 } from 'uuid';
import { MongoClient } from 'mongodb';

const app = express();

app.use(json());
app.use(cors());

dotenv.config();

let database = null;

const loginSchema = Joi.object({

    email: Joi.string().email({minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}).required(),
    password: Joi.string().required()

});

const signUpSchema = Joi.object({

    name: Joi.string().min(3).required(),
    email: Joi.string().email({minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}).required(),
    password: Joi.string().min(3).required(),
    confirm: Joi.string().min(3).required()

});

const mongoClient = new MongoClient(process.env.MONGO_URL);
mongoClient.connect().then(() => {

    database = mongoClient.db('my-wallet');   

});

app.post('/login', async (req, res) => {

    const login = req.body;
    const isValidLogin = loginSchema.validate(login, {abortEarly: false});

    if (isValidLogin.error) {

        return res.status(409).send('Seu email ou senha está incorreto. Por favor, insira o seu email e senha cadastrados');

    }

    try {

        const user = await database.collection('users').findOne({ email: login.email });
        if (user && bcrypt.compareSync(login.password, user.password)) {

            const token = v4();
            await database.collection('sessions').insertOne({

                token,
                userId: user._id

            });
            
            res.status(200).send(token);

        } else {

            res.status(404).send('User not found!');

        }

    } catch (e) {

        console.log('Algo de errado não está corretamente errado...', e);
        res.sendStatus(500);

    }
    
});

app.post('/sign-up', async (req, res) => {

    const signUp = req.body;
    const isValidSignUp = signUpSchema.validate(signUp, {abortEarly: false});

    if (isValidSignUp.error) {

        return res.status(409).send('Ocorreu um erro. Por favor, insira os dados corretamente');

    }

    try {

        const user = await database.collection('users').insertOne({ 
            ...signUp,
            password: bcrypt.hashSync(signUp.password, 10)
        })

        console.log('New user created');
        res.status(201).send('New user registered!');

    } catch (e) {

        res.status(500).send('Failed to register new user. Please, try again later');

    }

});

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

app.post('/home', async (req, res) => {



});

app.get('/new-withdraw', async (req, res) => {



});

app.post('/new-withdraw', async (req, res) => {



});

app.get('/amount', async (req, res) => {



});


app.delete('/logoff', async (req, res) => { /*  delete user session */



});


const port = process.env.PORT || 5000;

app.listen(port, () => {

    console.log('MyWallet API is running!');

})
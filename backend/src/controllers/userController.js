import database from '../database';
import { v4 } from 'uuid';
import bcrypt from 'bcrypt';
import dayjs from 'dayjs';

export async function createUser (req, res) {

    try {

        const user = await database.collection('users').insertOne({ 
            ...user,
            password: bcrypt.hashSync(signUp.password, 10),
            transactions: []
        })

        console.log('New user created');
        res.status(201).send('New user registered!');

    } catch (e) {

        res.status(500).send('Failed to register new user. Please, try again later');

    }

}

export default function createTransaction (req, res) {

    const transaction = req.body;

    const amount = transaction;

    try {

        const newTransaction = {

            ...transaction,
            id: v4(),
            amount: amount, 
            registeredAt: dayjs().format('DD/MM') 

        }

        await database.collection('users').updateOne(

            { _id: user._id },
            { $push: { transactions: newTransaction } }

        );

        res.status(201).send('New transaction registered!');
    
    } catch(e) {

        return res.status(500).send('Failed to register new transaction');

    }

}

export async function getHome (req, res) {

    

}

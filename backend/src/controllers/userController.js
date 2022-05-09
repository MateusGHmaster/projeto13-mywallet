import {database} from '../database.js';
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

export async function createTransaction (req, res) {

    const transaction = req.body;
    const { user } = res.locals;

    const amount = transaction;

    try {

        const newTransaction = {

            ...transaction,
            id: v4(),
            amount: transaction.amount, 
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

    const { user } = res.locals;

    try {

        let userTotalAmount = 0;

        user.transactions.forEach(transaction => {
            
            if (transaction.type === 'entrance') {

                userTotalAmount += transaction.amount;
    
            } else {
    
                userTotalAmount -= transaction.amount;
    
            }

        });

        const userAmountStatus = {

            ...user,
            userTotalAmount

        };

        delete userAmountStatus.password;

        res.send(userAmountStatus);

    } catch (e) {

        return res.sendStatus(500);

    }

}

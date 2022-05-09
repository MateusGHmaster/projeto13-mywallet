import bcrypt from 'bcrypt';
import { v4 } from 'uuid';
import database from '../database';

export async function userLogin (req, res) {

    const { email, password } = req.body;

    const user = await database.collection('users').findOne({ email });

    if (!user) {

        return res.sendStatus(404);

    }

    if (bcrypt.compareSync(password, user.password)) {

        const token = v4();

        await database.collection('sessions').insertOne({

            token: token,
            userId: user._id

        });

        return res.send(token);

    }

    res.sendStatus(401);

}
import {database} from "../database.js";

export async function validToken (req, res, next) {

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

    next();

}
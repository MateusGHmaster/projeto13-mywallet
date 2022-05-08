import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URL);
mongoClient.connect().then(() => {

    database = mongoClient.db('my-wallet');   

});

export default database;
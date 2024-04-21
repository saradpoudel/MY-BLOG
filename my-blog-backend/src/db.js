import { MongoClient } from 'mongodb';

let db;

async function connectToDb(cb) {
    const client = new MongoClient('mongodb+srv://mrsaradpoudel:Newpass05@cluster0.u7crw2x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    await client.connect();
    db = client.db('react-blog-db');
    cb();
}

export {
    db,
    connectToDb
};
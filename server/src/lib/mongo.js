import { MongoClient, ObjectId } from 'mongodb'
import { config } from '../config/index'

const USER = encodeURIComponent(config.db_user)
const PASSWORD = encodeURIComponent(config.db_password)
const NAME = encodeURIComponent(config.db_name)
const HOST = encodeURIComponent(config.db_host)


const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${NAME}?retryWrites=true&w=majority`
const client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
const dbName = NAME;
let connection;

async function connect() {
    if (!connection) {
        connection = new Promise((resolve, reject) => {
            client.connect(err => {
                if (err) {
                    reject(err)
                }
                console.log('Connected succesfully to mongo !');
                resolve(client.db(dbName))
            });
        });
    }
    return connection;
}

async function getAll(collection, query) {
    return connect().then(db => {
        return db.collection(collection).find(query).toArray();
    })
}

async function get(collection, id) {
    return connect().then(db => {
        return db.collection(collection).findOne({ _id: ObjectId(id) }).toArray();
    })
}

async function create(collection, data) {
    return connect().then(db => {
        return db.collection(collection).insertOne(data);
    }).then(result => result.insertedId);
}

async function update(collection, id, data) {
    return connect().then(db => {
        return db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
    }).then(result => result.upsertId || id);
}

async function deleteId(collection, id) {
    return connect().then(db => {
        return db.collection(collection).deleteOne({ _id: ObjectId(id) }).toArray();
    }).then(() => id);
}

module.exports = {
    getAll,
    get,
    create,
    update,
    deleteId
};
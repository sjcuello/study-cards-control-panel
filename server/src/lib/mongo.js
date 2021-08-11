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

function get(collection, id) {
    return connect().then(db => {
        return db.collection(collection).findOne({ _id: ObjectId(id) }).toArray();
    })
}

function create(collection, data) {
    console.log('collection :>> ', collection);
    try {
        console.log('data :>> ', data);
        return connect().then(db => {
            return db.collection(collection).insertOne(data).toArray();
        }).then(result => result.insertId);
    } catch (error) {
        console.log('error :>> ', error);
    }
}

function update(collection, id, data) {
    return connect().then(db => {
        return db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
    }).then(result => result.upsertId || id);
}

function deleteId(collection, id) {
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
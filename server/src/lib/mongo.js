import { MongoClient, ObjectId } from 'mongodb'
import { config } from '../config/index'

const USER = encodeURIComponent(config.db_user)
const PASSWORD = encodeURIComponent(config.db_password)
const NAME = encodeURIComponent(config.db_name)
const HOST = encodeURIComponent(config.db_host)


const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${NAME}?retryWrites=true&w=majority`

class MongoLib {
    constructor() {
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
        this.dbName = NAME;
    }

    connect() {
        if (!MongoLib.connection) {
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect(err => {
                    if (err) {
                        reject(err)
                    }
                    console.log('Connected succesfully to mongo !');
                    resolve(this.client.db(this.dbName))
                });
            });
        }
        return MongoLib.connection;
    }

    getAll(collection, query) {
        return this.connect().then(db => {
            return db.collection(collection).find(query).toArray();
        })
    }

    get(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection).findOne({ _id: ObjectId(id) }).toArray();
        })
    }
    dummy(){
        return 'hola'
    }
    create(collection, data) {
        console.log('collection :>> ', collection);
        try {
            console.log('data :>> ', data);
            return this.connect().then(db => {
                return db.collection(collection).insertOne(data).toArray();
            }).then(result => result.insertId);
        } catch (error) {
            console.log('error :>> ', error);
        }
        
    }

    update(collection, id, data) {
        return this.connect().then(db => {
            return db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
        }).then(result => result.upsertId || id);
    }

    delete(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection).deleteOne({ _id: ObjectId(id) }).toArray();
        }).then(() => id);
    }
}

module.exports = MongoLib;
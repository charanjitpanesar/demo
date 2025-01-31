const { default: dbConnect } = require("./config/db");
import { ObjectId } from "mongodb";

const formatId = (id) => {
    if (id instanceof ObjectId) return id; // If already ObjectId, return as is
    return ObjectId.createFromHexString(id); // Convert if string
};

export const add = async (dbCollection, data) => {
    const db = await dbConnect();
    const collection = db.collection(dbCollection);
    return await collection.insertOne(data);
}

export const updateOne = async (dbCollection, id, data) => {
    const db = await dbConnect();
    const collection = db.collection(dbCollection);
    return await collection.updateOne({ _id: formatId(id) }, { $set: data });
}

export const deleteOne = async (dbCollection, id) => {
    const db = await dbConnect();
    const collection = db.collection(dbCollection);
    return await collection.deleteOne({ _id: formatId(id) });
};

export const getOne = async (dbCollection, id) => {
    const db = await dbConnect();
    const collection = db.collection(dbCollection);
    return await collection.findOne({ _id: formatId(id) });
};

export const getAllWhere = async (dbCollection, condition) => {
    const db = await dbConnect();
    const collection = db.collection(dbCollection);
    return await collection.find(condition).toArray();
};

export const updateAllWhere = async (dbCollection, condition, data) => {
    const db = await dbConnect();
    const collection = db.collection(dbCollection);
    return await collection.updateMany(
        condition, 
        { $set: data }
    );
};
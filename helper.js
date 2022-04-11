import { MongoClient } from "mongodb";

async function getManagers(client){
    return await client
    .db("users")
    .collection("managers")
    .find({})
    .toArray();
}

async function createManagers(client, username, hashedPassword) {
    return await client
        .db("users")
        .collection("managers")
        .insertOne({ username: username, password: hashedPassword });
}

async function createUsers(client, adduser) {
    return await client.db("users").collection("people").insertMany(adduser);
}

async function createMovies(client, addMovies) {
    return await client.db("users").collection("movies").insertMany(addMovies);
}

async function deleteUsers(client) {
    return await client.db("users").collection("people").deleteMany({});
}

async function getUsers(client) {
    return await client.db("users").collection("people").find({}).toArray();
}

async function getMovies(client) {
    return await client.db("users").collection("movies").find({}).toArray();
}

async function updateUserById(client, id, newData) {
    return await client.db("users").collection("people").updateOne({ id: id }, { $set: newData });
}

async function deleteUserByID(client, id) {
    return await client.db("users").collection("people").deleteOne({ id: id });
}

async function getUsersById(client, id) {
    return await client.db("users").collection("people").findOne({ id: id });
}

async function genPassword(password){
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password , salt);
}



// console.log(process.env);
async function createconnection() {
    // const MONGO_URL = "mongodb://0.0.0.0:27017/users";
    const MONGO_URL = process.env.MONGO_URL;
    const client = new MongoClient(MONGO_URL);

    await client.connect();
    console.log("connected success");
    // const insertData = client.db("users").collection("people").insertMany(users);
    return client;
    // const user = await client.db("users").collection("people").findOne({id:"5"})
    // console.log(user);
}

export{
    getManagers,
    createManagers,
    createUsers,
    deleteUsers,
    getUsers,
    updateUserById,
    deleteUserByID,
    getUsersById,
    genPassword,
    createconnection,
    createMovies,
    getMovies
}
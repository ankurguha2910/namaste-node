//Go to MongoDB website
//Create a free M0 cluster
//Create a user
//Get the connection string
//Install MongoDB compass on our local machine
const { MongoClient } = require("mongodb");

const url = "mongodb+srv://ankurguha16:cCFeoWNGXvn81QtR@namaste-node.oiauvyk.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function connecttoDB(){
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("User");

    //Inserting document
    const data = {
        firstname: "Shah Rukh",
        lastname: "Khan",
        city: "Mumbai",
        phoneNumber: "884631120"
    }
    // const insertDocument = await collection.insertMany([data]);
    // console.log("Document inserted =>", insertDocument);

    const insrtOneDocument = await collection.insertOne(data);
    console.log("Document inserted =>", insrtOneDocument);

    //Finding all the documents. It is mandatory to add toArray() at the end of find() function
    const findResult = await collection.find({}).toArray();
    console.log("Found documents are :", findResult);

    //Finding count of all documents
    const count = await collection.countDocuments({});
    console.log("Count of documents :", count);

    //Finding a specific document. It is mandatory to add toArray() at the end of find() function
    const findParticularDocument = await collection.find({firstname: "Katrina"}).toArray();
    console.log("Record is :", findParticularDocument);
    
    return('done');
}

connecttoDB()
.then(console.log)
.catch(console.error)
.finally(() => client.close());
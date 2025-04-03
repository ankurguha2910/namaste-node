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

    const data = {
        firstname: "Shah Rukh",
        lastname: "Khan",
        city: "Mumbai",
        phoneNumber: "884631120"
    }
    try{
        // Adding a document to a collection
        const insertDocument = await collection.insertMany([data]);
        console.log("Document inserted =>", insertDocument);

        const insrtOneDocument = await collection.insertOne(data);
        console.log("Document inserted =>", insrtOneDocument);

        //Finding all the documents in a collection. It is mandatory to add toArray() at the end of find() function
        const findResult = await collection.find({}).toArray();
        console.log("Found documents are :", findResult);

        //Finding count of all documents in a collection.
        const count = await collection.countDocuments({});
        console.log("Total number of documents :", count);

        //Finding a specific document from a collection. It is mandatory to add toArray() at the end of find() function
        const findParticularDocument = await collection.find({firstname: "Katrina"}).toArray();
        const countOfDocument = await collection.countDocuments({firstname: "Shah Rukh"});
        console.log("Record is :", findParticularDocument);
        console.log("Number of document found is :", countOfDocument);

        //Update a document with condition in a collection.
        const updateDocument = await collection.updateOne({firstname : "Shah Rukh", city : "Mumbai"}, 
            {$set : {city: "Delhi"}});
        console.log("Updated result :", updateDocument);
        
        //Delete a document with condition from a collection.
        const deleteDocument = await collection.deleteOne({firstname : 'Shah Rukh', city : 'Mumbai'});
        console.log("Document deleted successfully", deleteDocument);
    }
    catch(error)
    {
        console.log(error);
    }
   
    return('done');
}

connecttoDB()
.then(console.log)
.catch(console.error)
.finally(() => client.close());
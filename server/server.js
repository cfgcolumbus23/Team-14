

// Import Libraries
const { MongoClient } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

// Create a New Express Application
const app = express();

// Parse application/json
app.use(bodyParser.json());

async function main() {
    const uri = "mongodb+srv://demo:demopassword@cluster0.niuy4mb.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
    try {
        await client.connect();
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    }

    // Post Request for signing up a new user
    app.post('/api/send-password', (req, res) => {
        const dataToInsert = req.body;
        const usersCollection = client.db().collection('Users');

        

        usersCollection.insertOne(dataToInsert, (err, result) => {
            if (err) {
                console.error('Error Signing User Up', err);
                res.status(500).send('Error inserting data into User Database');
            } else {
                res.status(200).send('User Entered Successfully');
            }
        });
    });

    app.get('/api/is-valid-student/', (req, res) => {
            req.params.email,
            req.params.password

            
    }) 

    app.get('/api/is-valid-admin/', (req, res) => {

    }) 


    // Define your route to redirect to the student page
    app.get('/api/go-to-student-page', (req, res) => {
        if (req.isValidStudentSignIn) {
        // Redirect to the student page in your React application
        res.redirect('/student-page');
        } else {
        res.status(403).json({ error: 'Invalid student sign-in' });
        }
    });
    
    // Define your route to redirect to the admin page
    app.get('/api/go-to-admin-page', (req, res) => {
        if (req.isValidAdminSignIn) {
        // Redirect to the admin page in your React application
        res.redirect('/admin-page');
        } else {
        res.status(403).json({ error: 'Invalid admin sign-in' });
        }
    });

    app.get("/api", (req, res) => {
        res.json({"users": ["userOne", "userTwo", "userThree"] })
    })

    app.listen(3000, () => {
        console.log("Server is listening");
    });
    client.close();
}

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}

main().catch(console.error);



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
    let conn;
    try {
        conn = await client.connect();
        await listDatabases(client);
    

        let db = await conn.db("CTRLR");
        let usersCollection = await db.collection("Users");


        // try {
        //   //get the collection from the database
        //   let db = conn.db("CTRLR");
        //   let collection = await db.collection("Users");
        //   const studentName = "stevejobs@gmail.com";
          
        //   //get the user from the database
        //   const student = await collection.findOne({email: { $eq: studentName}});

        //   if (student && student.Name == "Steve") {
        //   //const studentName = student.Name;

        //   console.log(student);
        //   } else {
        //     console.log("uhoh");
        //   }

        // } catch (error) {
        //   console.error(error);
        //   res.status(500).send(false); // Internal server error
        // }

        // Post Request for signing up a new user
        app.post('/api/send-password', async (req, res) => {
            const dataToInsert = req.body;
            let db = conn.db("CTRLR");
            let usersCollection = await db.collection("Users");


            usersCollection.insertOne(dataToInsert, (err, result) => {
                if (err) {
                    console.error('Error Signing User Up', err);
                    res.status(500).send('Error inserting data into User Database');
                } else {
                    res.status(200).send('User Entered Successfully');
                }
            });
        });

        //validate a student login
        app.get('/api/is-valid-student', async (req, res) => {
            try {
              const userE = req.params.userEmail; // Assuming the email is sent as a query parameter
              
              // Find a user with the provided email
              const user = usersCollection.findOne({email: { $eq: userE }});
          
              if (user && user.Admin === false) {
                //Ensure the correct password was entered for the user
                if (req.query.password === user.Password) {
                  res.send(true); // Passwords match
                } else {
                  res.send(false); // Passwords don't match
                }
              } else {
                res.send(false); // User not found or is an admin
              }
            } catch (error) {
              console.error(error);
              res.status(500).send(false); // Internal server error
            }
          });

          //validates an admin user login
        app.get('/api/is-valid-admin', async (req, res) => {
            try {
                let db = conn.db("CTRLR");
                let usersCollection = await db.collection("Users");
                const email = req.params.email; // Assuming the email is sent as a query parameter
            
                // Find a user with the provided email
                const user = await usersCollection.findOne({ email: {$eq: email} });
            
                if (user && user.Admin === true) {
                  //Ensure the correct password was entered for the user
                  if (req.query.password === user.Password) {
                    res.send(true); // Passwords match
                  } else {
                    res.send(false); // Passwords don't match
                  }
                } else {
                  res.send(false); // User not found or is an admin
                }
              } catch (error) {
                console.error(error);
                res.status(500).send(false); // Internal server error
              }
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

        //get the students class info from the database for the admin page
        app.get('/api/find-student-by-email', async (req, res)=>{
            try {
              //get the collection from the database
              let db = conn.db("CTRLR");
              let usersCollection = await db.collection("Users");
              const email = req.params.email;
              
              //get the user from the database
              const student = await userCollection.findOne({ email: {$eq: email} });

              const classArray = student.Courses;

              res.send(classArray);

            } catch (error) {
              console.error(error);
              res.status(500).send(false); // Internal server error
            }
        })

        app.get("/api", (req, res) => {
            res.json({"users": ["userOne", "userTwo", "userThree"] })
        })

        app.listen(5000, () => {
            console.log("Server is listening");
        });
      } catch (e) {
        console.error(e);
    } finally {
        client.close();
    }
}

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}

main().catch(console.error);

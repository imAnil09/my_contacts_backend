# MyContacts-Backend

road map of the backend course

--> Express Setup
--> Create Express Server
--> Thunder Client Setup [Extension-VSCode]
to tesing apis in VS Code
--> Express Router Setup
--> Error Handling, Async Handler
--> MongoDB Setup
--> Mongoose Schema
it is object modle designed schema, which is usefull to communicate with the database
to communicate with Data Base
--> CRUD API
--> User Authentication
--> Registration & Login API
--> Controllers & DB Operations
--> Passdword Hashing & Comparing
--> Sign / verify JWT Token
--> Handle Relationships
--> Protected Routes
the only authorized user can able to access the routes
--> User Autherization
the only authorized user can able to access the API EndPoints
--> API Testing

Rest API Convention

<!-- Screenshot taken -->

make sure that you have installed the node in the machine, or try to use the LTS version

generate the project's package.json by using "<b>npm init</b> and getup the project information"

create the file called .gitignore in the root file directory
then make sure that you added the files that you want to exclude when deploy the project

<b>file to exclude:</b>

/node_modules
.env

create the file called server.js to create the server in the root file directory

then install the express and nodemon packages into the project follow the command:

npm install express nodemon

the nodemon package is used to automatically restart the server when we made any mainute changes in our project

and setup the nodemon in the package.json file as developement project starter because we don't use this in the <b>PROD</b>

example :

"scripts": {
"start": "node server.js",
"dev": "nodemon server.js"
}

enter the command in terminal like

npm run dev

after write and started the server

create the .env file and add the

PORT=5001

and to use the env variables in the project, we have to install the <b>dotenv package</b> follow the command:

npm i dotenv

then in server.js import the dotenv and access the variables

example:

const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 5000;

<b>Install the thunder client to test APIs</b>

you can install it from extension in VS code

create the routes to fetch the response value in thunder clinet

make one directory called routes and maintain all the routes in this folder only to maintain cleaner code

routes > contactRoutes.js

make one directory called controller > contactController.js

in this controller we maintain the logic to get responses from the database / used to create the methods of api requests and responses

and in this file we should place three comments about the API methods like:

//@desc Get all contacts
//@route GET /api/contacts
//@access public

example:

//@desc Create New contacts
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
console.log('The request body is :', req.body);
res.status(201).json({message: "Create contact"});
}

when we try to console the req.body it will throw us undefined, so have to use <b>express middleWare</b> to parse the data and show in console

in server.js before the routes add the <b>"app.use(express.json())"</b>, then it will parse the req.body[data] in console without throwing undefined

when you are try to send the empty fields, the request shouldn't be successful so have a put the check for it like:

example:

const createContact = (req, res) => {
console.log('The request body is :', req.body);
const {name, email, phone} = req.body;
if(!name || !email || !phone){
res.status(400)
throw new Error("All fields are mandatory.")
}
res.status(201).json({message: "Create contact"});
}

err.stack the word it contain :

"Error: All fields are mandatory.\n at createContact (/home/bosi/Anil Works/backend/backend_contacts/contollers/contactController.js:15:15)\n at Layer.handle [as handle_request] (/home/bosi/Anil Works/backend/backend_contacts/node_modules/express/lib/router/layer.js:95:5)\n at next (/home/bosi/Anil Works/backend/backend_contacts/node_modules/express/lib/router/route.js:144:13)\n at next (/home/bosi/Anil Works/backend/backend_contacts/node_modules/express/lib/router/route.js:140:7)\n at Route.dispatch (/home/bosi/Anil Works/backend/backend_contacts/node_modules/express/lib/router/route.js:114:3)\n at Layer.handle [as handle_request] (/home/bosi/Anil Works/backend/backend_contacts/node_modules/express/lib/router/layer.js:95:5)\n at /home/bosi/Anil Works/backend/backend_contacts/node_modules/express/lib/router/index.js:284:15\n at Function.process_params (/home/bosi/Anil Works/backend/backend_contacts/node_modules/express/lib/router/index.js:346:12)\n at next (/home/bosi/Anil Works/backend/backend_contacts/node_modules/express/lib/router/index.js:280:10)\n at Function.handle (/home/bosi/Anil Works/backend/backend_contacts/node_modules/express/lib/router/index.js:175:3)"

so, we can separate it with the <b>"res.json({title: "Validation Error", message: err.message, stackTrace: err.stack})"</b>
then the title is our wish, message will be like <b>"All fields are mandatory"</b> and the stackTrace will contain that big error message

Now, it time to add the async to all functions we are created, so we are now going to install one package called <b>express-async-handler</b>, its an middleWare to handle the try catch operations without mentioning in all places just we need to wrap the

<b>MONGO_DB</b>

now create the mongo db account and create the cluster and DB and connect it with local IP address in mongodb extension

and copy the mongodb drivers and add that to the .env file with the variable name <b>"CONNECTION_STRING="mongodb driver string"</b>

created the userController to handle CRUD operations
created userModel to handle register and login etc

<!-- Register User Checks -->

** check the user entered all required fields else throw error
** check if user already exists in database else throw an error
\*\* hash password before saving into database so, we need the <b>bcrypt library</b> and store in db
later we create the user in db and then in response we'll send the \_id and email after successfully registered the user

<!-- Login User Checks -->

install the jsonwebtoken to send the accessToken to the user after login successfully

\*\* check the user entered all required fields else throw error
\*\* compare the client given password with the user's db password using bcrypt.compare(clientPassword, dbPasswored)
then use the jwt to get the accessToken to access the private routes using the method called jsonwebtoken.sing({

<!-- payload like -->

user: {
id, name, email
}  
},
signature_secret_key,
expiresIn = '30d' //expiry time for token
)
send this token back to client side using response.send() method
Now create a middleware function which will verify the token everytime any request comes from the client side

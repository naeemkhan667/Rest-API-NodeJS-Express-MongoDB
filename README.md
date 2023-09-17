# REST API
A REST API, or Representational State Transfer Application Programming Interface, is a set of rules and conventions for building and interacting with web services. It is a widely used architectural style for designing networked applications and systems that communicate over the HTTP protocol. REST is known for its simplicity, scalability, and statelessness, making it a popular choice for building web services, especially in the context of the World Wide Web.

# REST API With Node.js, Express & MongoDB
Creating a RESTful API with Node.js, Express.js and MongoDB involves several steps. Before you begin, make sure you have NodeJS and MongoDB installed on your system.

# Download
- NodeJS: https://nodejs.org/en/download
- MongoDB: https://www.mongodb.com/

# Initialize a NodeJS Project
- mkdir Rest-API-NodeJS-Express-MongoDB
- cd Rest-API-NodeJS-Express-MongoDB
- npm init -y

# Install Dependencies
npm install express mongoose dotenv cors

# Install devDependencies
npm install nodemon --save-dev

## express
Express is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. 

## mongoose
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB

## dotenv
dotenv is a popular Node.js module that helps manage environment variables in your application. Environment variables are key-value pairs that hold configuration settings, secrets, or other information that your application needs to function properly. 

## cors
The cors package in Node.js is a middleware that simplifies Cross-Origin Resource Sharing (CORS) configuration for your Express.js web applications. It is commonly used when you want to allow or restrict cross-origin requests to your server. Cross-origin requests occur when a web page hosted on one domain makes requests to a different domain, which is subject to the Same-Origin Policy enforced by web browsers.

## nodemon
Nodemon is a utility for Node.js that helps with the development workflow by automatically restarting your Node.js application whenever changes are detected in your source code.

# Running and Testing

- npm start

<pre>

##
GET http://localhost:3000/products


##
GET http://localhost:3000/products/65061c0004fcd6a2c933bae2

##
POST http://localhost:3000/products
Content-Type: application/json

{
    "name": "Awsome Product",
    "price": 200
}

##
PATCH http://localhost:3000/products/65061c0004fcd6a2c933bae2
Content-Type: application/json

{
    "name": "Update Product"
}

##
DELETE http://localhost:3000/products/65061c0004fcd6a2c933bae2
</pre>
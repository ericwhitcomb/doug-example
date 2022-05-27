# doug-example

## Installation

If you don't have it already, install node on your system  
[Install Node](https://nodejs.org/en/)

Clone the repo to your system and open up a terminal in the doug-example directory  
Run the following command

`npm install`

Create .env file in the root directory  
Add PORT environment variable (note: this must be set for postman tests to work)

`PORT=7777`

## Run Server

From the root of the doug-example directory, run the following command

`npm run server`

## Postman Tests

If you don't have it already, install the Postman REST Client on your system  
You will also need to create an account on the Postman website  
[Postman REST Client](https://www.postman.com/product/rest-client/)

Import json file into Postman  
To test out the API make sure the application is listening on port 7777  
Run each test individually and in order  
To run a test click on the test, verify the url, and click send

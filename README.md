# doug-example

## Installation

If you don't have it already, install node on your system.  
[Install Node](https://nodejs.org/en/)

Clone the repo to your system and open up a terminal in the doug-example directory.  
Run the following command to install application dependencies found in package.json.

`npm install`

Create .env file in the root directory. To read more about environment variables-  
[Wiki - Environment Variable](https://en.wikipedia.org/wiki/Environment_variable)  
Add PORT environment variable (note: this must be set for postman tests to work).

`PORT=7777`

## Run Server

From the root of the doug-example directory, run the following command.

`npm run server`

## Postman Tests

If you don't have it already, install the Postman REST Client on your system.  
You will also need to create an account on the Postman website.  
[Postman REST Client](https://www.postman.com/product/rest-client/)

Import 'doug-example.postman-collection.json' file into Postman.  
To test out the API make sure the application is listening on port 7777.  
Run each test individually and in order.  
To run a test click on the test, verify the url, and click send.

## Useful Links

### Requests

How HTTP request verbs map to CRUD (Create, Read, Update, Delete).  
[Verbs to CRUD](https://www.restapitutorial.com/lessons/httpmethods.html)

A nice Stackoverflow that gives more details about HTTP request verbs.  
[Stackoverflow - HTTP Request Verbs](https://stackoverflow.com/questions/41411152/how-many-http-verbs-are-there)

### Responses

Wiki gives more details about HTTP response status codes.  
[Wiki - HTTP Response Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

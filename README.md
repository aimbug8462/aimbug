# aimbug


connecting to your current database,go to the server.js file locate the following line of code and replace the it with your database  "database name"

mongoose.connect('mongodb://localhost/(database_name)', { useNewUrlParser: true});



The `api` uri preceed all API endpoints and the following endpoints are currently available
* GET `/api/contacts`
* POST `/api/contacts`
* GET `/api/contacts/:id`
* PUT `/api/contacts/:id`
* PATCH `/api/contacts/:id`
* DELETE `/api/contacts/:id`

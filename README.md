# aimbug


To connect your current database, replace the it with "database name"

mongoose.connect('mongodb://localhost/(database_name)', { useNewUrlParser: true});

The `api` uri preceed all API endpoints and the following endpoints are currently available
* GET `/api/contacts`
* POST `/api/contacts`
* GET `/api/contacts/:id`
* PUT `/api/contacts/:id`
* PATCH `/api/contacts/:id`
* DELETE `/api/contacts/:id`

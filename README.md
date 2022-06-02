# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| Method  | Path | Purpose |
| ------- | ---- | ------- |
|  GET  | /  | Home page |
|  GET  | /places | Places index page |
| POST | /places | Create new place |
| GET | /places/new | Form page for creating a new page |
| GET | /places/:id | Deatils about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing place |
| DELETE | /places/:id | Delete a particular page |
| POST | /places/:id/rant | Create a rant (comment) about a particlular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular page |
| GET | * | 404 page (matches any route not define above) |  

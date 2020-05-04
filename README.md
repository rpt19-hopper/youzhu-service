# Project Name

> We are building the backend for Etsy mock

## Related Projects

  - https://github.com/rpt19-hopper/rebekah-service
  - https://github.com/rpt19-hopper/iris-service
  - https://github.com/rpt19-hopper/youzhu-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [Endpoints](#endpoints)

## Usage

> port number: 1234

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- mysql 8.0.18

## Development

To seed the database, run the following
```
mysql -u user -p password < schema.sql
```
Next, update db.config.js with your mysql user and password.

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
npm run start
```

## Endpoints
API for creating, reading, updating, and deleting etsy store reviews 

1. Create (POST)
- Route: '/store/review'
- Request body: 
```
{
    "storeId": "1",
    "userId": "1",
    "text": "very very good",
    "starRating": "4.9"
}

```
2.  Read (GET)
- Route: '/store/review/:id'
- Request body: none

3.  Update (PUT)
- Route: '/store/review'
- Request body: 
```
{
    "id": "1006",
    "storeId": "1",
    "userId": "1",
    "text": "very very good",
    "starRating": "4.9"
}

```

4.  Delete (DELETE)
- Route: '/store/review/:id'
- Request body: none


// database login
// scripts
// install or run webpack if its not working
// endpoints

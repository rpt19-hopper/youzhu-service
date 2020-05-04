# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```


// database login
// scripts
// install or run webpack if its not working
// port numbers
// endpoints

## Etsy Store Reviews API
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
3.  Update (PUT)
- Route: '/store/review'

4.  Delete (DELETE)
- Route: '/store/review/:id'
- Request body: none


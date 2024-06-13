## Project Setup
- Clone the project on your local

- Execute `npm install` on the same path as of your root directory of the
downloaded project

- Create a `.env` file in the root directory and add the following environment
variable
  -> `PORT=3000`

- Inside the `src/config` folder create a new file `config.json` and then add
the following piece of json

```
{
 "development": {
    "username": <Apka_database_k_naam>,
    "password": <aapka_mysql_k_password>,
    "database": "FLights_Search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
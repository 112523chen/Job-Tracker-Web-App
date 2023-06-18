# Job Tracker Web Application

## Project Description

A full-stack web application created with PERN (Postgres, Express, React, Node) in TypeScript that allow users to create, view, update, and delete items from their job tracker through a RESTful API and Postgres database

## Technologies

[<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"></code>](https://www.typescriptlang.org/)
[<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"></code>](https://www.postgresql.org/)
[<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"></code>](https://expressjs.com/)
[<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"></code>](https://reactjs.org/)
[<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code>](https://nodejs.org/en/)

## Demo
![alt text](./demo.png)

## Run locally

1. Start up a postgres server and login into server and keep the username, password, and the port the server is run at

2. Run the following command in postgres server

```sql
CREATE DATABASE jobapp;
CREATE TABLE applications (
    id SERIAL primary key,
    title varchar,
    company varchar,
    created timestamptz,
    modified timestamptz,
    status varchar,
    url varchar,
    description varchar
);
```

3. Clone this repository to your local machine

```bash
git clone https://github.com/112523chen/Job-Application-Tracker-Web-App.git
```

4. Open up the created director in a terminal and go into the `server` directory, add a `.env` file with the following code, add update the code with your information

```bash
PORT=<Port where api will reference>
USER=<Your username for server>
HOST="localhost"
DB="jobapp"
DBPORT=<Port where your server is at>
```

5. Run the following command to set up backend and run it

```bash
npm install && npm run start
```

6. Open up the `client` director in a different terminal and run the following command

```bash
npm install && npm run start
```

7. Click the link that pops up to access the web application

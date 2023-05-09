const { Client } = require("pg");

const pgclient = new Client({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: "postgres",
  password: "postgres",
  database: "jobapp",
});

pgclient.connect();

const table =
  "CREATE TABLE applications ( id SERIAL primary key, title varchar, company varchar, created timestamptz, modified timestamptz, status varchar,url varchar, description varchar);";
const data =
  "INSERT INTO applications (title, company, created, modified, status, url, description) VALUES ('Software Engineer Intern', 'CUNY', NOW(), NOW(), 'created', 'https://112523chen.github.io', 'Some text'); INSERT INTO applications (title, company, created, modified, status, url, description) VALUES ('Software Engineer Intern', 'CUNY', NOW(), NOW(), 'applied', 'https://112523chen.github.io', 'Some text');";

pgclient.query(table, (error, response) => {
  if (error) throw error;
});

pgclient.query(data, (error, response) => {
  if (error) throw error;
});

pgclient.query("SELECT * FROM applications", (error, response) => {
  if (error) throw error;
  console.log(response.rows);
  console.log(response.rowCount);
});

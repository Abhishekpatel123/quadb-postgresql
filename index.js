import env from "dotenv";
import express from "express";
import fetch from "node-fetch";
import pool from "./db.js";

env.config();
const app = express();
const PORT = process.env.PORT || 8000;

pool.on("connect", (err, client) => {
  if (err) console.log(err, "error ");
  console.log("succesfully db connected ");
});

pool.on("error", (err, client) => {
  console.log(err, "error in db connection");
});

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("client/build"));

if (process.env.NODE_ENV === "production") {
  // serve static content
  app.use(express.static("client/build"));
}

// reading data from db
app.get("/get-data", async (req, res) => {
  try {
    console.log("getting data");
    const data = await pool.query(`SELECT * from blockchain_tb`);
    console.log(data);
    res.status(200).send({ data: data.rows, db: process.env.DATABASE_URL });
  } catch (error) {
    console.log(error);
    res.send({ message: "server error", db: process.env.DATABASE_URL });
  }
});

// heroku addons:create heroku-postgresql:hobby-dev -a postgresql-internship
// inserting data in database
const insert = async () => {
  const jsonResult = await fetch("https://api.wazirx.com/api/v2/tickers");
  const result = await jsonResult.json();
  const values = Object.values(result).slice(0, 10);
  let data = null;
  await values.forEach(async (item, index) => {
    if (index === 10) return;
    data = await pool.query(
      `INSERT INTO blockchain_tb( name, last, buy, sell, volume, base_unit )
         VALUES($1, $2 , $3 , $4 , $5 , $6) RETURNING *`,
      [item.name, item.last, item.buy, item.sell, item.volume, item.base_unit]
    );
  });
  return data;
};

app.get("/hello", (req, res) => {
  res.send("hello world ");
});

app.get("/insert-data", async (req, res) => {
  try {
    await insert();
  } catch (error) {
    res.status(500).send(error);
  }
});

// listening
app.listen(PORT, () => console.log(`listening at prot ${PORT}`));

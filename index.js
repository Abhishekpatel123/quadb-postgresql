import env from "dotenv";
import express from "express";
import fetch from "node-fetch";
import pool from "./db.js";

env.config();
const app = express();
const PORT = process.env.PORT || 8000;

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
    res.status(200).send({ data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "server error" });
  }
});

// inserting data in database
const insert = async () => {
  const jsonResult = await fetch("https://api.wazirx.com/api/v2/tickers");
  const result = await jsonResult.json();
  const values = Object.values(result);
  console.log(values);
  const data = null;
  await values.forEach(async (item, index) => {
    // console.log(item.values());
    console.log("item ", item);
    if (index === 10) return;
    // console.log(item)
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

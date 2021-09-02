import env from "dotenv";
import express from "express";
import fetch from "node-fetch";

// import pool from "./db";

env.config();
const app = express();
const PORT = process.env.PORT || 8000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
  // serve static content
  app.use(express.static("client/build"));
}

app.get("/get-data", async (req, res) => {
  try {
    const data = await pool.query(`SELECT * from `);
    res.status(200).send({ data });
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
});

// inserting data in database
const insert = async () => {
  const data = {
    btcinr: {
      base_unit: "btc",
      quote_unit: "inr",
      low: 3622189,
      high: "3740000.0",
      last: "3686740.0",
      type: "SPOT",
      open: 3656989,
      volume: "431.90578",
      sell: "3698502.0",
      buy: "3686750.0",
      at: 1630531804,
      name: "BTC/INR",
    },
  };
  let value = Object.values(data);
  console.log(value);
  const jsonResult = await fetch("https://api.wazirx.com/api/v2/tickers");
  const result = await jsonResult.json();
  const values = Object.values(result);

  values.forEach((item, index) => {
    // console.log(item.values());
    if (index === 10) return;
    // console.log(item)
    await pool.query(
      `INSERT INTO users( name, last, buy, sell, volume, base_unit )
         VALUES($1, $2 , $3 , $4 , $5 , $6) RETURNING *`,
      [item.name, item.last, item.buy, item.sell, item.volume, item.base_unit]
    );
  });
};
insert();

// listening
app.listen(PORT, () => console.log(`listening at prot ${PORT}`));

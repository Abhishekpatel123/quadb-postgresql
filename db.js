import { Pool } from "pg";

// using locally
// const pool = new Pool({
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   host: process.env.PG_HOST,
//   port: process.env.PG_PORT,
//   database: process.env.PG_DATABASE,
// });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;

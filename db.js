import pool from "pg";

// console.log(process.env);
export default new pool.Pool({
  connectionString: process.env.DATABASE_URL,
});

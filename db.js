import pool from "pg";

export default new pool.Pool({
  connectionString: process.env.DATABASE_URL,
});

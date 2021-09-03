import pool from "pg";

console.log(process.env.DATABASE_URL);
export default new pool.Pool({
  connectionString: process.env.DATABASE_URL,
  // because of not adding rejectuauthorixed false it not connect
  ssl: {
    rejectUnauthorized: false, // important
  },
});

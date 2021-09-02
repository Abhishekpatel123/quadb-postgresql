import pool from "pg";

console.log(process.env.DATABASE_URL);
export default new pool.Pool({
  connectionString: process.env.DATABASE_URL,
  // connectionString:
  // "postgres://postgres:*Abhishekpatel09042000@localhost:5432/blockchain_db",
});

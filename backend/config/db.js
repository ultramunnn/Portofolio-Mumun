import mysql from "mysql2";
import * as dotenv from "dotenv";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const process = require("process");

dotenv.config();

const pool = mysql.createPool({
  host: process.env?.DB_HOST || "localhost",
  user: process.env?.DB_USER || "root",
  password: process.env?.DB_PASSWORD || "",
  database: process.env?.DB_NAME || "portfolio_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const promisePool = pool.promise();

export default promisePool;

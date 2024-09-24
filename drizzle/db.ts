import { drizzle } from "drizzle-orm/mysql2"
import mysql from "mysql2/promise"
import * as schema from './migrations/schema'

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
})

const db = drizzle(connection, { 
  schema,
  mode: "default",
  logger: false 
})

export  { db }
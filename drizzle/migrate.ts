import { migrate } from "drizzle-orm/mysql2/migrator";
import { db } from "./db";

const main = async () => {
  try {
    await migrate(db, {
      migrationsFolder: './drizzle/migrations'
    })
    console.log("Migration completed")
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
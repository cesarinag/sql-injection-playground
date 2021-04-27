import { Pool } from 'pg'

const config = {
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
}

const pool = new Pool(config)

export default pool

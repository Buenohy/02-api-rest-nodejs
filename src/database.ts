import 'dotenv/config'
import setupKnex, { type Knex } from 'knex'

if (!process.env.DATABASE_UL) {
  throw new Error('DATABASE_UL env not found.')
}

export const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: process.env.DATABASE_UL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)

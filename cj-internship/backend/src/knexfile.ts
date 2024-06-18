import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'database',
      user: 'root',
      password: 'root',
      database: 'benefit'
    },
    migrations: {
      directory: './migrations'
    }
  }
};

export default config;

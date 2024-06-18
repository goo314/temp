# Express application
```bash
# create migrations
npx knex migrate:make create_users_table --knexfile=src/knexfile.ts --cwd=./

# run migrate
npx knex migrate:latest
```
export const config = {
  port: 3000,
  postgres: {
    user: "root",
    password: "root",
    port: 5432,
    host: "postgres-15",
    database: "tech_test",
    schema: "public",
  },
};

export const getDatabaseUrl = (): string => {
  const { user, password, host, port, database, schema } = config.postgres;
  const connectionString = `postgresql://${user}:${password}@${host}:${port}/${database}?search_path=${schema}`;
  process.env.DATABASE_URL = connectionString;
  return connectionString;
};

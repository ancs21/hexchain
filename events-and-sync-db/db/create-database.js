const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'securepassword',
  port: 5432
})

const createTableMetrics = `
  CREATE TABLE metrics (
    time TIMESTAMPTZ,
    user_id TEXT NOT NULL,
    device_id TEXT NOT NULL,
    data JSONB,
    PRIMARY KEY(time, device_id)
  );
  SELECT create_hypertable('metrics', 'time');
  CREATE INDEX idxgin ON metrics USING GIN (data);
`

pool.query(createTableMetrics, (err, res) => {
  console.log(err, res)
  pool.end()
})

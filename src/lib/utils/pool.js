import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  "host": "132.145.56.181",
  "port": 5432,
  "user":"clinlims",
  "password" : "bnjWYLBdTMrx",
  "database" : "clinlims",
  "max": 20,
  "connectionTimeoutMillis" : 0,
  "idleTimeoutMillis": 30000
});

export default pool;
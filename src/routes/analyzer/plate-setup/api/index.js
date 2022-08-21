import pool from '$lib/utils/pool'


export async function get(){
  let query = await pool.query(`select nextval('registry.batch_seq'::regclass) id`)
  return{
    body: await query.rows[0]
  }
}



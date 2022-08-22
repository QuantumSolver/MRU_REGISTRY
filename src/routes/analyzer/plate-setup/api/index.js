import pool from '$lib/utils/pool'


export async function get(){
  let query = await pool.query(`select nextval('registry.batch_seq'::regclass) id`)
  return{
    body: await query.rows[0]
  }
}



export async function post({request}){
    
    let batch = await  request.json();
    let batchString = JSON.stringify(batch)
    let addBatch = await pool.query(`insert into registry.batch (id,epi_week,batch_date, plate , a1,a7 ,plate_type  ) values 
    ('${batch.batch}','${batch.epiwk}','${batch.date}','${batchString}','${batch.a1}','${batch.a7}','${batch.plateType}') `)
    console.log(addBatch.rowCount)
    console.log(addBatch.rows)
    return{
   status:200
    }
  }
  
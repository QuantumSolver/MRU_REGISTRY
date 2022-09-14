import pool from '$lib/utils/pool'

export async function get({url}){

     let sample = url.searchParams.get('samp')
     let test = url.searchParams.get('test')
    let query = pool.query(`select 
labno,
patient_id,
names,
surname,
sex,
to_char(request_time,'YYYY-MM-DD') request_time,
p_age,
test_id,
sample,
card,
site,
ward
from registry.epi_v ev 

where sample::int = '${sample}'::int
and
test_id::int = '${test}'::int

`)
return{
    body:  (await query).rows
}

}
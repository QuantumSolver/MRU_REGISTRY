import pool from "$lib/utils/pool";
export const get = async ({url})=>{
    let id = url.searchParams.get('id')
    let nic = url.searchParams.get('nic')
        
        let patient = await pool.query(`select * from registry.patient where nic = '${nic}' `)
    

    return{
        body: patient.rows[0]
    }

        
}

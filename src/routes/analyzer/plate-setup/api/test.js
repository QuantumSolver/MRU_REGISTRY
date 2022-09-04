import pool from '$lib/utils/pool'


export async function get({url}){

    // let labnumber = url.searchParams.get('labno')
    let query = pool.query(

        `select id "value", name || ' (' ||split_part(description , '(', 2) "name"  from clinlims.test where test_section_id  = 190`
        )
    return{
        body:  (await query).rows
    }

}




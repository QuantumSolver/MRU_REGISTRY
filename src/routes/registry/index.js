import pool from "$lib/utils/pool";

export const get = async ({request})=>{
 
    let getOrders = await pool.query('SELECT * FROM registry.order')

    return{
        body: {order: getOrders.rows}
    }
    
}


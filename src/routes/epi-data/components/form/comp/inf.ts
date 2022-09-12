import { writable } from "svelte/store";
import moment from "moment";

export let form = writable({ id: 0,
     epiWk: 0, 
     dateReq: moment().format('yyyy-MM-DD'), 
     sex: '', 
     age: 0, 
     name: '', 
     other_names:'',
     hospital:'',
     ward:'',
     card:'', 
     blood:'',
     dbs:'',
     travel:'',
     results: {
        den:false ,
        den1:false,
        chik:false,
        ns1_ag:false,
        ns1_IgM:false,
        ns1_IgG:false, 
        eia_ns1:false
     },
     result_pcr:'',
     comments:[{user:'',message:''}]
    })
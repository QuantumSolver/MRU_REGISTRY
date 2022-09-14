import { writable } from "svelte/store";
import moment from "moment";

export let form = writable({ id: 0,
     epiWk: 0, 
     dateReq: moment().format('yyyy-MM-DD'), 
     sex: '', 
     age: '30 years 5 mons 27 days', 
     surname: '', 
     name:'',
     hospital:'',
     ward:'',
     card:'', 
     rapid_test:'',
     symptoms:'',
     vaccinated:false,
     dose:0,
     vaccine_type:'',
     pcr:'',
     case:'',
     n_gene:'',
     e_gene:'',
     results: {
        date_tested:'' ,
        delY144_al_1:'',
        q498r:'',
        s_gene:'',
        variant:'',
        p681r:'', 
        d215g:'', 
        d614g:'', 
        k417n:'', 
        ngs:'', 
        crick:'', 
        nicd:''
     },
     result_pcr:'',
     comments:[{user:'',message:''}]
    })
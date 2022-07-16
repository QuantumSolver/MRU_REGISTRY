import {  writable } from "svelte/store";
import moment from "moment";

export let user = writable({name:'marc'});
export let sampModal = writable(false);
export let sampTypeModal = writable(false);

export let step = writable(1);

export let refr = writable(1);


export let orderModal = writable(false);

export let sample = writable({sample_type:"",labno:"",condition:"",collection_date:moment(Date.now()).format('YYYY-MM-DDTHH:mm')  ,collector:"", tests:"" });


export let samples = writable([]);

export let sampleType = writable({"id":"32","description":"Fluid"});

export let labnumber = writable("");


export let sampleTypes = writable([]);
export let conditions = writable([]);

export let orders = writable([]);

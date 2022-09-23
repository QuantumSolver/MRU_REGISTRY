import { writable } from "svelte/store";


export let msg  = writable('Saved!')


export let visible = writable(false)


export function showToast(){
        visible.set(true)

        setTimeout(()=>{visible.set(false)} , 3000 )   

}
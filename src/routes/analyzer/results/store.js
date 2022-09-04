import { writable } from "svelte/store";
export const orderMap = writable({})
export function resetOrderMap(){
    orderMap.update(n=> n = {} )
}
export const selectedField = writable({id:'' , location:'' ,barcode:'' , iterator:0 , column:7})
export const colorTemplate = writable([
    'amber-700',
    'slate-700',
    'rose-700',
    'emerald-700',
    'violet-700',
    'sky-700',
    'red-700'
])
export const selectedResult = ('')

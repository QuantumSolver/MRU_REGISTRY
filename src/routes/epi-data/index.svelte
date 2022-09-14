<script lang="ts">
	import { Alert } from "flowbite-svelte";
import Dashboard from "./components/dashboard.svelte";
import Form from "./components/form/index.svelte";
import {uiForm} from './components/store'

let loading:boolean = false


</script>

<div class="container mx-auto">
    

    <h1 class="font-medium text-3xl mt-5">Epi-Data</h1>
    <div class="m-2"></div>
    <Alert color="red">
        <span class="font-medium">Note!</span> Forms pending data mapping. 
    </Alert>
    {#if $uiForm == 0}
    <Dashboard/>
    {:else}
    <Form/>
    {/if}
</div>

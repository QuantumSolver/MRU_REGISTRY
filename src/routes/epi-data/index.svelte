<script lang="ts">
import Dashboard from "./components/dashboard.svelte";
import Form from "./components/form/index.svelte";
import {uiForm} from './components/store'

let loading:boolean = false


</script>



<div class="container mx-auto">
    <h1 class="font-medium text-3xl mt-5">Epi-Data</h1>
    {#if $uiForm == 0}
    <Dashboard/>
    {:else}
    <Form/>
    {/if}
</div>

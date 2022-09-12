<script lang="ts">
import Dashboard from "./components/dashboard.svelte";
import Form from "./components/form/index.svelte";


let loading:boolean = false


let edit:boolean = true

</script>


<div class="container mx-auto">
    <h1 class="font-medium text-3xl mt-5">Epi-Data</h1>
    {#if edit}
    <Form/>
    {:else}
    <Dashboard/>
    {/if}
</div>


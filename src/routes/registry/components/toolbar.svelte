<script>
import { orderModal ,step} from "$lib/stores/orders";
import { Button } from 'flowbite-svelte';
</script>

<div class=" gap-12 flex  flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
    <div>
        <Button outline on:click={()=>{ $step = 1; $orderModal = false ;} } >Cancel</Button>
    </div>

    <div>

        {#if $step ==  1  }
            <Button on:click="{()=>{$step++} }">Next</Button>
        {:else if $step ==  2 }               
            <Button  on:click="{()=>$step--  }">Previous</Button>
            <Button on:click="{()=>{$step++} }">Next</Button>
        {:else if $step  == 3}
            <Button  on:click="{()=>$step--  }">Previous</Button>
            <Button on:click="{()=>{$step = 1 ;$orderModal = false ; } }">Save</Button>
        {:else}
        <!--  -->
        {/if}
    </div>



</div>
<script lang="ts">

    import { fly } from 'svelte/transition';
    import { Listgroup , ListgroupItem  } from 'flowbite-svelte'
export  let active = false
    let buttons = [
        { name: "20220000000000246", mycustomfield: "data1" },
        { name: "20220000000000247", mycustomfield: "data2" },
        { name: "20220000000000248", mycustomfield: "data3" },
        { name: "20220000000000322", mycustomfield: "data4" },
    ];

</script>

{#if active}
    <div class="fixed  right-0 top-1/4 shadow-xl  rounded-lg " transition:fly="{{ x: 200 }}">

        <Listgroup {active}   class="w-44 ">
            {#each buttons as item , idx} 
            <ListgroupItem bind:current={item.current} bind:disabled={item.disabled} class="font-black {item.disabled == true ? 'hidden':'' }">{item.name}</ListgroupItem>
            {/each}
        </Listgroup>
    </div>
{/if}

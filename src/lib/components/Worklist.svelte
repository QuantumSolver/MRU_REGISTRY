<script lang="ts">

    import { fly } from 'svelte/transition';
    import { List , ListItem } from 'flowbite-svelte'
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

        <List {active}   class="w-44 ">
            {#each buttons as item , idx} 
            <ListItem bind:current={item.current} bind:disabled={item.disabled} class="{item.disabled == true ? 'hidden':'' }">{item.name}</ListItem>
            {/each}
        </List>
    </div>
{/if}

<script>
    import { Toast ,Button } from "flowbite-svelte";
	import { CheckCircle  } from 'svelte-heros';
    let show = false;
    let counter = 5;
  
    function trigger() {
      show = true 
      counter = 5;
      timeout();
    }
  
    function timeout() {
      if (--counter > 0)
        return setTimeout(timeout, 1000);
      show = false;
    }
  </script>
  {#if !show}
  <Button on:click={trigger} class="my-3">Restart</Button>
  {/if}
{#if show}
    <Toast  position="tr" simple transition='blur'  >
        <CheckCircle slot="icon"/> Autohide in {counter}s.
    </Toast>
{/if}
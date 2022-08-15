<script>
    import { Toast  } from "flowbite-svelte";
	import { CheckCircle  } from 'svelte-heros';
    let show = false;
    let counter = 5;
  
    function trigger() {
      show = true 
      timeout();
    }
  
    function timeout() {
      if (--counter > 0) {
        return setTimeout(()=>{timeout()}, 1000);
}       show = false;
        counter = 5;
    }
  import { Modal ,Button} from 'flowbite-svelte'
    let defaultModal =false;
  </script>
<div class="m-10">

  <Button on:click={() => (defaultModal = true)}>Default modal</Button>
	<Modal title="Terms of Service" bind:open={defaultModal}>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400"> With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
    <svelte:fragment slot='footer'>
      <Button>I accept</Button>
      <Button color="alternative">Decline</Button>
    </svelte:fragment>
  </Modal> 
  {#if !show}
  <Button on:click={trigger} >Test Notification</Button>
  {/if}
{#if show}
    <Toast  position="tr" simple transition='blur'  >
        <CheckCircle slot="icon"/> Autohide in {counter}s.
    </Toast>
{/if}

</div>
 
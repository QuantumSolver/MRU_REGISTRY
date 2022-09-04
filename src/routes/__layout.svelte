<script>
    import { page ,navigating } from "$app/stores";

	import '../app.css';
	import Nav from '$lib/components/nav.svelte';
    


</script>
<svelte:head>
    <title>Patient Registry</title>
</svelte:head>
    <Nav />

    <slot />

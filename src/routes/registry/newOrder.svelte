<script>
	import Title from './components/title.svelte';
	import Toolbar from './components/toolbar.svelte';
    import FormPatient from './components/form-patient.svelte';
	import { fly } from 'svelte/transition';
</script>

<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" >
	<div class="fixed inset-0 bg-gray-800 bg-opacity-60 " />
	<div class="fixed z-10 inset-0 overflow-y-auto" transition:fly={{ y: 50 }} on:introstart on:outroend>
		<div class="flex items-center justify-center max-h-screen text-center min-w-fit " >
			<!-- This element is to trick the browser into centering the modal contents. -->
			<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
				>&#8203;</span>

			<div
				class="relative  inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-screen-lg  sm:w-full "
			>
				<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
					<div class="sm:flex sm:items-start" >
						<Title />
					</div>
                    <FormPatient/>
                    <Toolbar />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
</style>

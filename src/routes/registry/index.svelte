<script>
import { orders } from '$lib/stores/orders';

export let order
import moment from 'moment';
$orders = order
</script>

	<div class="container">
          
          <h1 class="font-medium text-4xl ml-14 mt-4 ">Registry</h1>
		
          <div class="flex flex-row-reverse w-screen">
            <!-- <button on:click={()=>$orderModal = true} type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2  text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-56">New</button> -->
            <!-- <button on:click={refreshOrders} type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2  text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Refresh</button> -->
            <!-- <button on:click={()=>$refr++} type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2  text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Refresh++ {$refr}</button> -->
            <!-- <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button> -->
          </div>
    </div>
{#if $orders.length > 0}

<div class="container mx-auto px-4 sm:px-8">
    
    <div class="py-8">
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
                
              <tr>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Lab Number</th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Requested on</th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Requested By</th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Created By</th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Site</th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-800 uppercase tracking-wider" width="110px">Actions</th>
              </tr>
            </thead>
            <tbody>        
              {#each $orders as order }
              <tr class=" hover:bg-gray-200">
                <td class="px-5 py-5 border-b border-gray-200 bg-white font-semibold  text-sm"><a href="https://oe.npes.ml/OpenELIS-Global/SampleEdit?type=readwrite&accessionNumber={order.labno}" target="_blank">{order.labno}</a></td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white font-semibold   text-sm">{moment(order.request_time,'YYYY-MM-DDTHH:mm').format('DD/MM/YYYY HH:mm')}</td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white font-semibold  text-sm">{order.requester}</td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white font-semibold text-sm">{order.created_by}</td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white font-semibold  text-sm">{order.site}</td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white font-semibold  text-sm">Edit</td>
              </tr>
              {/each} 
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  {:else}

  <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
    <thead class="text-white">
      <tr class="bg-indigo-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Lab Number</th>
        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Requested on</th>
        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Requested By</th>
        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Created By</th>
        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Site</th>
        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-bold text-gray-800 uppercase tracking-wider" width="110px">Actions</th>
</tr>
    </thead>
    <tbody class="flex-1 sm:flex-none">
      <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
        <td colspan="6" class="border-grey-light border hover:bg-gray-100 p-3 px-20"><span class="font-medium leading-tight ">No orders yet...</span></td>
      </tr>
    </tbody>
  </table>
  {/if}        

<!-- 
{#if $orderModal }
    
<Modal/>

{/if}
{#if $sampTypeModal }
<SampleType />
{/if}
{#if $sampModal }
<Sample />
{/if} -->

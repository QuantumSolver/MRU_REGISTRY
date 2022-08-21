<script>
    import epi from 'epi-week'; 
    import moment from 'moment';
    import HalfRenRight from './components/half_ren_right.svelte';
    import HalfSplit from './components/46_sample.svelte';
    import E_92 from "./components/e_92.svelte";
    import Rpn_92 from "./components/rpn_92.svelte";
    import { Input, Label , ButtonGroup , Button ,ButtonGroupItem } from 'flowbite-svelte'
    import {Plus , Save} from 'svelte-heros'
    

    let firstNum = '' 
    let secondNum = ''
    let batchID
    let batchDate = moment().format('YYYY-MM-DD')
    let plateType = '1'


    
    async function fetchBatchID (){
      let req = await fetch('/analyzer/plate-setup/api')
       batchID = (await req.json()).id
    }


    $: epiWk = epi(new Date(moment(batchDate).format('YYYY-MM-DD') )).week
    
</script>

                
  

  <div class="container mx-auto  sm:px-8">
    
    <div class="py-8">
      
    <h1 class="inline font-medium text-3xl ">Plate Setup</h1>
    
    <div class="inline-block mt-2 md:ml-10">
        <ButtonGroup>
                <ButtonGroupItem on:click={()=>{plateType = '1'}} class='{plateType == '1' ? 'border-b-4  border-b-blue-500' : '4 border-b-gray-100'} focus:ring-0 hover:border-b-4 hover:border-b-slate-300' >Half Ren Right</ButtonGroupItem>
                <ButtonGroupItem on:click={()=>{plateType = '2'}} class='{plateType == '2' ? 'border-b-4  border-b-blue-500' : '4 border-b-gray-100'} focus:ring-0 hover:border-b-4 hover:border-b-slate-300' >46 Sample</ButtonGroupItem>
                <ButtonGroupItem on:click={()=>{plateType = '3'}} class='{plateType == '3' ? 'border-b-4  border-b-blue-500' : '4 border-b-gray-100'} focus:ring-0 hover:border-b-4 hover:border-b-slate-300'>E 92 Sample</ButtonGroupItem>
                <ButtonGroupItem on:click={()=>{plateType = '4'}} class='{plateType == '4' ? 'border-b-4  border-b-blue-500' : '4 border-b-gray-100'} focus:ring-0 hover:border-b-4 hover:border-b-slate-300'>RPN 92 Sample</ButtonGroupItem>
        </ButtonGroup>
       
        </div>        
	<div class="">
</div>
      
       <div >

        
        
        <div class="inline-block align-top my-10 mr-10   p-10 border-2 border-gray-100 rounded-lg shadow-xl  ">
            <!-- 
               
               FORM STARTS
               
             -->  

             
                <fieldset class="inline-block border-2 border-slate-400  rounded-lg p-2 shadow-md"><legend class="text-sm font-black">Starting Well</legend>
                   
                  
                 {#if plateType == '1'}
                 
                 <div class="inline-block">
                   <label for="second-starting-well" class="text-xs font-semibold">A-7</label>                               
                   <Input id="second-starting-well" type="text" min="0" max="9999" maxlength='4' size="sm" bind:value={secondNum} inputClass="w-16  mx-2 focus:border-blue-500 text-right  rounded-none  rounded-r-md rounded-l-md sm:text-sm border-gray-300" />
                 </div> 
                 {:else if  plateType == '2'}    
                  <div  class="inline-block">
                    <label for="starting-well" class="text-xs font-semibold">A-1</label>                               
                    <Input id="starting-well" type="text" min="0" max="9999" maxlength='4' size="sm" bind:value={firstNum} inputClass="w-16  mx-2 focus:border-blue-500 text-right  rounded-none  rounded-r-md rounded-l-md sm:text-sm border-gray-300" />
                  </div>  
                  
                  <div class="inline-block">
                    <label for="second-starting-well" class="text-xs font-semibold">A-7</label>                               
                    <Input id="second-starting-well" type="text" min="0" max="9999" maxlength='4' size="sm" bind:value={secondNum} inputClass="w-16  mx-2 focus:border-blue-500 text-right  rounded-none  rounded-r-md rounded-l-md sm:text-sm border-gray-300" />
                  </div> 
                 {:else}
                 <div  class="inline-block">
                  <label for="starting-well" class="text-xs font-semibold">A-1</label>                               
                  <Input id="starting-well" type="text" min="0" max="9999" maxlength='4' size="sm" bind:value={firstNum} inputClass="w-16  mx-2 focus:border-blue-500 text-right  rounded-none  rounded-r-md rounded-l-md sm:text-sm border-gray-300" />
                 </div>  
                 {/if} 
                    <!-- <div  class="inline-block">
                      <label for="starting-well" class="text-xs font-semibold">A-1</label>                               
                      <Input id="starting-well" type="text" min="0" max="9999" maxlength='4' size="sm" bind:value={firstNum} inputClass="w-16  mx-2 focus:border-blue-500 text-right  rounded-none  rounded-r-md rounded-l-md sm:text-sm border-gray-300" />
                    </div>  
                      
                    <div class="inline-block">
                      <label for="second-starting-well" class="text-xs font-semibold">A-7</label>                               
                      <Input id="second-starting-well" type="text" min="0" max="9999" maxlength='4' size="sm" bind:value={secondNum} inputClass="w-16  mx-2 focus:border-blue-500 text-right  rounded-none  rounded-r-md rounded-l-md sm:text-sm border-gray-300" />
                    </div> 
                 -->
                
                </fieldset>

            <div class='my-6'>
              <div class="block">
                <Label for='large-input' class='block mb-2'>Batch Number</Label>
                <Input size="sm" bind:value={batchID} inputClass="w-22  rounded-lg mb-2" />
                <div class="inline-block align-middle md:float-right "> 
                  <Button size='xs' on:click={fetchBatchID} ><Plus size='15' /></Button>
                </div>
              </div>
                
              <div class="inline-block">
                <Label for='bd' class='block mb-2'>Batch Date</Label>
                <Input id='bd' type='date' size="sm" inputClass="w-40 rounded-lg" bind:value={batchDate} />
            </div>
                <div class="inline-block">
                  <Label for='large-input' class='block mb-2'>Epi-Week</Label>
                  <Input value={epiWk} size="sm" inputClass="w-20 rounded-lg" />
                </div>
            </div>
            <Button ><Save size='15'/> <span class="pl-1">Save</span> </Button>
             <!-- 
   
               FORM ENDS
   
              -->
        </div>


        <div class="inline-block my-5 ">
            

            {#if plateType == '1'}
            <HalfRenRight firstNum={secondNum}  />
            {:else if  plateType == '2'}
            <HalfSplit {firstNum} {secondNum} />
            {:else if  plateType == '3'}
            <E_92 {firstNum} />
            {:else if  plateType == '4'}
            <Rpn_92 {firstNum} />
            {/if}
     
        </div>






      </div>
    </div>
  </div>
  

  
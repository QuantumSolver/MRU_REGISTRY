<script>
    import epi from 'epi-week'; 
    import moment from 'moment';
    import HalfRenRight from './components/half_ren_right.svelte';
    import HalfSplit from './components/46_sample.svelte';
    import E_92 from "./components/e_92.svelte";
    import Rpn_92 from "./components/rpn_92.svelte";
    import { Input, Label , ButtonGroup , Button ,ButtonGroupItem , Iconinput ,Spinner} from 'flowbite-svelte'
	  import {  fly } from 'svelte/transition';
    import {Plus , Save , ArrowLeft, Search} from 'svelte-heros'
    import { plate as hr } from './components/half_rr'
    import { plate as s46 } from './components/store-46_samp'
    import { plate as e92 } from './components/store-e92'
    import { plate as rpn } from './components/store-rpn92'
    import {selectedField} from './store'
    

    let firstNum = '' 
    let secondNum = ''
    let batchID
    let batchDate = moment().format('YYYY-MM-DD')
    let plateType = '1'


    
    async function fetchBatchID (){
      let req = await fetch('/analyzer/plate-setup/api')
       batchID = (await req.json()).id
    }

    async function postBatch (){

      
  //     let options = {
  //   body: JSON.stringify(batchData) ,headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   method: 'POST'
  // };

  //     let req = await fetch('/analyzer/plate-setup/api' , options)

saved = true
    }

    $: epiWk = epi(new Date(moment(batchDate).format('YYYY-MM-DD') )).week
    $: plate = plateType=='1'? $hr : plateType=='2'? $s46 : plateType=='3' ? $e92 : $rpn
    $: batchData = {
      batch: batchID ,
      epiwk: epiWk,
      date: batchDate,
       plateType, 
      a1: firstNum ,
      a7: secondNum,
      plate
    }
    let saved = false 
    $: if(saved){

      if(plateType == '1' && $selectedField.id == ''){
        $selectedField.id = $hr[0].c7
      }
      
      if(plateType == '2' && $selectedField.id == ''){
        $selectedField.id = $s46[0].c1
      }

      if(plateType == '3' && $selectedField.id == ''){
        $selectedField.id = $e92[0].c1
      }
      if(plateType == '4' && $selectedField.id == ''){
        $selectedField.id = $rpn[0].c1
      }


    }

    
  const onKeyPress = e => {
    if (e.charCode === 13){
      alert($selectedField.barcode) 
    }
  };



function nextWell(){
 if($selectedField.column == 12 && $selectedField.iterator == 5){}
 else {
  $selectedField.column = $selectedField.iterator == 7 ? $selectedField.column+1 : $selectedField.column
  $selectedField.iterator = $selectedField.iterator == 7 ? 0 : $selectedField.iterator+1
  $selectedField.id = batchData.plate[$selectedField.iterator]['c'+ String($selectedField.column)]    
  $selectedField.location= batchData.plate[$selectedField.iterator].row +  String($selectedField.column)}
}
 

function prevWell(){
 if($selectedField.column == 7 && $selectedField.iterator == 0){}
 else {
  $selectedField.column = $selectedField.iterator == 0 ? $selectedField.column-1 : $selectedField.column
  $selectedField.iterator = $selectedField.iterator == 0 ? 7 : $selectedField.iterator-1
  $selectedField.id = batchData.plate[$selectedField.iterator]['c'+ String($selectedField.column)]    
  $selectedField.location= batchData.plate[$selectedField.iterator].row +  String($selectedField.column)}
}
 

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
             {#if saved}
               <!-- Plate Mapping -->
               <div in:fly={{ x: -20, duration: 1000 }} >
                <ArrowLeft on:click={()=>{saved = false}}  size='20' class=' cursor-pointer mb-2'/>
              


                  
                <div class="block">
                  <Label for='selected-well' class='block my-2'>Well - {$selectedField.location}</Label>
                  <Input id='selected-well' readonly type='text' size="sm" inputClass="w-full rounded-lg" bind:value={$selectedField.id} />
                </div>


                <div class="block">
                  <Label for='barcode' class='block my-2'>Barcode</Label>
                  <Input id='barcode' on:keypress={onKeyPress} type='text' size="sm" inputClass="w-36 rounded-lg" bind:value={$selectedField.barcode} />
                  <Button size='sm' class='inline-block ml-2 align-middle' ><Search size='15'/></Button>
                </div>
                <div class="gap-3 mt-5">
                  
                <Button  on:click={prevWell} class='inline-block w-1/3'>Prev</Button>
                <Button  on:click={nextWell} class='inline-block w-1/3'>Next</Button>
                </div>
                <!-- <div class="inline-block">
                <Spinner size="5"/>
                </div>
                 -->


               </div>
             
                {:else}
                <!-- Batch Info -->
                          <div in:fly={{ x: 20, duration: 1000 }}>
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
                      
                      </fieldset>

                  <div class='my-6 relative'>
                    <div class="block">
                      <Label for='large-input' class='block mb-2'>Batch Number</Label>
                      <Input size="sm" bind:value={batchID} inputClass="w-22  rounded-lg mb-2" />
                      <div class="inline-block align-middle "> 
                        <Button size='xs' on:click={fetchBatchID} class='sm:ml-2' ><Plus size='15' /></Button>
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
                    <Button class=' w-1/2' on:click={postBatch}><Save size='15'/> <span class="pl-1 ">Save</span> </Button>
                  

                          </div>
                   
             {/if}
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
  

  
<script>
    let hover =''
    import { plate  } from "./store";
    import { setNull } from "./store";
    let plateType = '1'
import { Input, Label , ButtonGroup , Button ,ButtonGroupItem } from 'flowbite-svelte'
import HalfRenRight from './components/half_ren_right.svelte';
    function zer0(num) {
        return String(num).padStart(4, '0');
    }
    let firstNum = '' 
    $: $plate[0].c1 = zer0(firstNum)

    $: if($plate[0].c1 == '0000'){ setNull()}
    
    $: if($plate[0].c1 != '0000'){
        for(let i = 0; i < $plate.length; i++){
              
            $plate[0].c2 = zer0(parseInt($plate[0].c1)+8)  
            $plate[0].c3 = zer0(parseInt($plate[0].c2)+8)  
            $plate[0].c4 = zer0(parseInt($plate[0].c3)+8)  
            $plate[0].c5 = zer0(parseInt($plate[0].c4)+8)  
            $plate[0].c6 = zer0(parseInt($plate[0].c5)+8)  
            $plate[0].c7 = zer0(parseInt($plate[0].c6)+8)  
            $plate[0].c8 = zer0(parseInt($plate[0].c7)+8)  
            $plate[0].c9 = zer0(parseInt($plate[0].c8)+8)  
            $plate[0].c10 = zer0(parseInt($plate[0].c9)+8)  
            $plate[0].c11 = zer0(parseInt($plate[0].c10)+8)  
            $plate[0].c12 = zer0(parseInt($plate[0].c11)+8)
            
             if(i > 0){  
                $plate[i].c1 = zer0(parseInt($plate[i-1].c1)+1)
                $plate[i].c2 = zer0(parseInt($plate[i-1].c2)+1)
                $plate[i].c3 = zer0(parseInt($plate[i-1].c3)+1)
                $plate[i].c4 = zer0(parseInt($plate[i-1].c4)+1)
                $plate[i].c5 = zer0(parseInt($plate[i-1].c5)+1)
                $plate[i].c6 = zer0(parseInt($plate[i-1].c6)+1)
                $plate[i].c7 = zer0(parseInt($plate[i-1].c7)+1)
                $plate[i].c8 = zer0(parseInt($plate[i-1].c8)+1)
                $plate[i].c9 = zer0(parseInt($plate[i-1].c9)+1)
                $plate[i].c10 = zer0(parseInt($plate[i-1].c10)+1)
                $plate[i].c11 =  zer0(parseInt($plate[i-1].c11)+1)
                $plate[i].c12 = i >=6 ? '': zer0(parseInt($plate[i-1].c12)+1)
            }
        }
    }
    
    
    // text input as number only 

$: firstNum = firstNum.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1')
</script>

                
  

  <div class="container mx-auto px-4 sm:px-8">
    
    <div class="py-8">
      
    <h1 class="inline font-medium text-3xl ">Plate Setup</h1>
    
    <div class="inline-block mt-2 md:ml-10">
        <ButtonGroup>
                <ButtonGroupItem on:click={()=>{plateType = '1'}} class='border-b-{plateType == '1' ? '4  border-b-blue-500' : '0'} focus:ring-0 hover:border-b-4 hover:border-b-slate-300' >Half Ren Right</ButtonGroupItem>
                <ButtonGroupItem on:click={()=>{plateType = '2'}} class='border-b-{plateType == '2' ? '4  border-b-blue-500' : '0'} focus:ring-0 hover:border-b-4 hover:border-b-slate-300' >46 Sample</ButtonGroupItem>
                <ButtonGroupItem on:click={()=>{plateType = '3'}} class='border-b-{plateType == '3' ? '4  border-b-blue-500' : '0'} focus:ring-0 hover:border-b-4 hover:border-b-slate-300'>E 92 Sample</ButtonGroupItem>
                <ButtonGroupItem on:click={()=>{plateType = '4'}} class='border-b-{plateType == '4' ? '4  border-b-blue-500' : '0'} focus:ring-0 hover:border-b-4 hover:border-b-slate-300'>RPN 92 Sample</ButtonGroupItem>
        </ButtonGroup>
        </div>        
	<div class="container">
</div>
      
       <div >

        
        
        <div class="inline-block align-top my-5 mr-10   p-10 border-2 border-gray-100 rounded-lg shadow-xl  ">
            <!-- 
               
               FORM STARTS
               
             -->
                
            <label for="starting-well" class="block mt-3  ml-2 text-sm font-medium text-gray-700">Starting Well</label>                               
            <input id="starting-well" type="text" min="0" max="9999" maxlength='4' bind:value="{firstNum}" class="focus:ring-indigo-500  mb-5 ml-2 focus:border-blue-500 text-left  w-1/10 rounded-none  rounded-r-md rounded-l-md sm:text-sm border-gray-300">

            <div class='mb-6'>
                <Label for='large-input' class='block mb-2'>Large input</Label>
                <Input id="large-input" size="lg" placeholder="Large input" />
            </div>
            <div class='mb-6'>
                <Label for='default-input' class='block mb-2'>Default input</Label>
                <Input id='default-input' placeholder="Default input" />
            </div>
            <div class='mb-6'>
                <Label for='large-input' class='block mb-2'>Small input</Label>
                <Input size="sm" placeholder="Small input" label="Small input"/>
            </div>
            
             <!-- 
   
               FORM ENDS
   
              -->
           </div>


        <div class="inline-block my-5 ">
            
            <HalfRenRight {firstNum} />
         <!-- 
            
            PLATE STARTS
            
          -->
             <!-- <table class="shadow-xl bg-white inset-20 ">
                            <tr class="bg-gray-100">
                                <th class="px-6 py-2 text-base text-gray-700  border-b border-r border-gray-200 ">
                                     
                                </th>
                                <th class="px-6 py-2 text-base text-gray-700 border-b  border-gray-200">
                                    1
                                </th>
                                <th class="px-6 py-2 text-base text-gray-700 border-b  border-gray-200">
                                    2
                                </th>
                                <th class="px-6 py-2 text-base text-gray-700 border-b border-gray-200">
                                    3
                                </th>
                                <th class="px-6 py-2 text-base text-gray-700 border-b border-gray-200">
                                    4
                                </th>
                                <th class="px-6 py-2 text-base text-gray-700 border-b border-gray-200">
                                    5
                                </th>
                                <th class="px-6 py-2 text-base text-gray-700 border-b border-gray-200">
                                    6
                                </th>
                                <th class="px-6 py-2 text-base text-gray-700 border-b border-gray-200">
                                    7
                                </th>
                                <th class="px-6 py-2 text-base text-gray-700 border-b border-gray-200">
                                    8
                                </th>
                                <th class="px-6 py-2 text-base text-gray-700 border-b border-gray-200">
                                    9
                                </th>
                                <th class="px-6 py-2 text-base text-gray-700 border-b border-gray-200">
                                    10
                                </th>
                                <th class="px-6 py-2 text-base text-gray-700 border-b border-gray-200">
                                    11
                                </th>
                                <th class="px-6 py-2 text-base text-gray-700 border-b border-gray-200">
                                    12
                                </th>
                                
                                <th class="px-6 py-2 text-base text-gray-700  border-b border-l border-gray-200 ">
                                     
                                </th>
                            </tr>
                    <tbody class="bg-white">
      
      {#each $plate as p , i }
      <tr class="whitespace-nowrap hover:bg-gray-100">
        <td class="px-6 py-4 text-base text-gray-700 bg-gray-100 border-r border-gray-200 ">
            {p.row}
        </td>
        <td class="px-6 py-4 cursor-pointer  w-max text-base text-gray-700 text-right border-r border-b border-gray-200 {hover=='c1'?'bg-gray-100':''} "
         on:mouseenter="{()=>hover = 'c1'}" on:mouseleave="{()=>hover = ''}">
            {p.c1}
        </td>
        <td class="px-6 py-4  cursor-pointer w-max text-base text-gray-700 text-right border-r border-b  border-gray-200 {hover=='c2'?'bg-gray-100':''} "
        on:mouseenter="{()=>hover = 'c2'}" on:mouseleave="{()=>hover = ''}">
            {p.c2}
        </td>
        <td class="px-6 py-4 cursor-pointer  w-max text-base text-gray-700 text-right border-r border-b border-gray-200 {hover=='c3'?'bg-gray-100':''} "
        on:mouseenter="{()=>hover = 'c3'}" on:mouseleave="{()=>hover = ''}">
            {p.c3}
        </td>
        <td class="px-6 py-4  cursor-pointer w-max text-base text-gray-700 text-right border-r border-b border-gray-200 {hover=='c4'?'bg-gray-100':''} "
        on:mouseenter="{()=>hover = 'c4'}" on:mouseleave="{()=>hover = ''}">
            {p.c4}
        </td>
        <td class="px-6 py-4  cursor-pointer w-max text-base text-gray-700 text-right border-r border-b border-gray-200 {hover=='c5'?'bg-gray-100':''} "
        on:mouseenter="{()=>hover = 'c5'}" on:mouseleave="{()=>hover = ''}">
            {p.c5}
        </td>
        <td class="px-6 py-4  cursor-pointer w-max text-base text-gray-700 text-right border-r border-b border-gray-200 {hover=='c6'?'bg-gray-100':''} "
        on:mouseenter="{()=>hover = 'c6'}" on:mouseleave="{()=>hover = ''}">
            {p.c6}
        </td>
        <td class="px-6 py-4  cursor-pointer w-max text-base text-gray-700 text-right border-r border-b border-l-4 border-gray-200 {hover=='c7'?'bg-gray-100':''} "
        on:mouseenter="{()=>hover = 'c7'}" on:mouseleave="{()=>hover = ''}">
            {p.c7}
        </td>
        <td class="px-6 py-4 cursor-pointer  w-max text-base text-gray-700 text-right border-r border-b border-gray-200 {hover=='c8'?'bg-gray-100':''} "
        on:mouseenter="{()=>hover = 'c8'}" on:mouseleave="{()=>hover = ''}">
            {p.c8}
        </td>
        <td class="px-6 py-4  cursor-pointer w-max text-base text-gray-700 text-right border-r border-b border-gray-200 {hover=='c9'?'bg-gray-100':''} "
        on:mouseenter="{()=>hover = 'c9'}" on:mouseleave="{()=>hover = ''}">
            {p.c9}
        </td>
        <td class="px-6 py-4 cursor-pointer  w-max text-base text-gray-700 text-right border-r border-b border-gray-200 {hover=='c10'?'bg-gray-100':''} "
        on:mouseenter="{()=>hover = 'c10'}" on:mouseleave="{()=>hover = ''}">
            {p.c10}
        </td>
        <td class="px-6 py-4 cursor-pointer  w-max text-base text-gray-700 text-right border-r border-b border-gray-200 {hover=='c11'?'bg-gray-100':''} "
        on:mouseenter="{()=>hover = 'c11'}" on:mouseleave="{()=>hover = ''}">
            {p.c11}
        </td>
        <td class="px-6 py-4 cursor-pointer  w-max text-base text-gray-700 text-right border-b border-r  border-gray-200 {hover=='c12'?'bg-gray-100':''} "
        on:mouseenter="{()=>hover = 'c12'}" on:mouseleave="{()=>hover = ''}">
            {p.c12}
        </td>
        <td class="px-6 py-4 text-base text-gray-700 bg-gray-100 border-r border-gray-200">
            {p.row}
        </td>
    </tr>

      {/each}       </tbody>
      <tr class="bg-gray-100">
            <th class="px-6 py-2 text-base text-gray-700  border-t border-r border-gray-200 " >
                 
            </th>
            <th class="px-6 py-2 text-base text-gray-700 boborder-t border-gray-200">
                1
            </th>
            <th class="px-6 py-2 text-base text-gray-700 border-t border-gray-200">
                2
            </th>
            <th class="px-6 py-2 text-base text-gray-700 border-t border-gray-200">
                3
            </th>
            <th class="px-6 py-2 text-base text-gray-700 border-t border-gray-200">
                4
            </th>
            <th class="px-6 py-2 text-base text-gray-700 border-t border-gray-200">
                5
            </th>
            <th class="px-6 py-2 text-base text-gray-700 border-t border-gray-200">
                6
            </th>
            <th class="px-6 py-2 text-base text-gray-700 border-t border-gray-200">
                7
            </th>
            <th class="px-6 py-2 text-base text-gray-700 border-t border-gray-200">
                8
            </th>
            <th class="px-6 py-2 text-base text-gray-700 border-t border-gray-200">
                9
            </th>
            <th class="px-6 py-2 text-base text-gray-700 border-t border-gray-200">
                10
            </th>
            <th class="px-6 py-2 text-base text-gray-700 border-t border-gray-200">
                11
            </th>
            <th class="px-6 py-2 text-base text-gray-700 border-t border-gray-200">
                12
            </th>
            
            <th class="px-6 py-2 text-base text-gray-700  border-t border-l border-gray-200 ">
                 
            </th>
        </tr>
                </table> -->

          <!-- 

            PLATE ENDS

           -->
        </div>






      </div>
    </div>
  </div>
  

  
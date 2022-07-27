<script>
    let hover =''
    import { plate  } from "./store";
    import { setNull } from "./store";
    function zer0(num) {
        return String(num).padStart(4, '0');
    }
    let firstNum = '' 
    $: $plate[0].c1 = zer0(firstNum)
    
    // $: if($plate[0].c1 != '0000'){
    //     for(let i = 0; i < $plate.length; i++){
    //       if(i ==0){  
    //     $plate[i].c2 = zer0(parseInt($plate[i].c1)+1)
    //     $plate[i].c3 = zer0(parseInt($plate[i].c2)+1)
    //     $plate[i].c4 = zer0(parseInt($plate[i].c3)+1)
    //     $plate[i].c5 = zer0(parseInt($plate[i].c4)+1)
    //     $plate[i].c6 = zer0(parseInt($plate[i].c5)+1)
    //     $plate[i].c7 = zer0(parseInt($plate[i].c6)+1)
    //     $plate[i].c8 = zer0(parseInt($plate[i].c7)+1)
    //     $plate[i].c9 = zer0(parseInt($plate[i].c8)+1)
    //     $plate[i].c10 = zer0(parseInt($plate[i].c9)+1)
    //     $plate[i].c11 = zer0(parseInt($plate[i].c10)+1)
    //     $plate[i].c12 = zer0(parseInt($plate[i].c11)+1)}
    //     else if  (i > 0 && i < 6){  
    //     $plate[i].c1 = zer0(parseInt($plate[i-1].c12)+1)
    //     $plate[i].c2 = zer0(parseInt($plate[i].c1)+1)
    //     $plate[i].c3 = zer0(parseInt($plate[i].c2)+1)
    //     $plate[i].c4 = zer0(parseInt($plate[i].c3)+1)
    //     $plate[i].c5 = zer0(parseInt($plate[i].c4)+1)
    //     $plate[i].c6 = zer0(parseInt($plate[i].c5)+1)
    //     $plate[i].c7 = zer0(parseInt($plate[i].c6)+1)
    //     $plate[i].c8 = zer0(parseInt($plate[i].c7)+1)
    //     $plate[i].c9 = zer0(parseInt($plate[i].c8)+1)
    //     $plate[i].c10 = zer0(parseInt($plate[i].c9)+1)
    //     $plate[i].c11 = zer0(parseInt($plate[i].c10)+1)
    //     $plate[i].c12 = zer0(parseInt($plate[i].c11)+1)}
    //     else{
    //     $plate[i].c1 = zer0(parseInt($plate[i-1].c10)+1)
    //     $plate[i].c2 = zer0(parseInt($plate[i].c1)+1)
    //     $plate[i].c3 = zer0(parseInt($plate[i].c2)+1)
    //     $plate[i].c4 = zer0(parseInt($plate[i].c3)+1)
    //     $plate[i].c5 = zer0(parseInt($plate[i].c4)+1)
    //     $plate[i].c6 = zer0(parseInt($plate[i].c5)+1)
    //     $plate[i].c7 = zer0(parseInt($plate[i].c6)+1)
    //     $plate[i].c8 = zer0(parseInt($plate[i].c7)+1)
    //     $plate[i].c9 = zer0(parseInt($plate[i].c8)+1)
    //     $plate[i].c10 = zer0(parseInt($plate[i].c9)+1)
    //     $plate[i].c11 = ''
    //     $plate[i].c12 = ''}
        

    //     }}


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
    // $: if($plate[7].c1 != '0000'){
    //     for(let i = 0; i < $plate.length; i++){
    //         if(i == 0){  
    //             $plate[i].c2 = zer0(parseInt($plate[7].c1)+1)
    //         }
    //     }
    // }
    // $: if($plate[0].c2 != '0000'){
    //     for(let i = 0; i < $plate.length; i++){
    //         {
                
    //             $plate[i].c3 = zer0(parseInt($plate[i-1].c3)+1)
    //         }
    //     }
    // }

</script>

<h1 class="font-medium leading-tight text-4xl py-2 mt-9 ">Plate Setup</h1>

<label for="starting-well" class="block mt-10  ml-2 text-sm font-medium text-gray-700">Starting Well</label>                               
<input id="starting-well" type="text" min="0" max="9999" maxlength='4' bind:value="{firstNum}" class="focus:ring-indigo-500  mb-5 ml-2 focus:border-indigo-500 text-right  w-1/10 rounded-none  rounded-r-md rounded-l-md sm:text-sm border-gray-300">

                <table class="shadow-lg bg-white inset-20 m-t-10">
                            <tr class="bg-gray-50">
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
        <td class="px-6 py-4 text-base text-gray-700 bg-gray-50 border-r border-gray-200 ">
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
        <td class="px-6 py-4 text-base text-gray-700 bg-gray-50 border-r border-gray-200">
            {p.row}
        </td>
    </tr>

      {/each}       </tbody>
      <tr class="bg-gray-50">
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
                </table>

             

<script>
import {  Input,Textarea, Label , Button ,Iconinput , Search  ,Select ,Spinner } from 'flowbite-svelte';

import { Qrcode  } from "svelte-heros";

let textareaprops = {
  id: 'address',
  name: 'address',
  label: 'Address',
  rows: 2,
  placeholder: 'Patient address...',
};
let selected = 'Male'
</script>
<div class="relative px-8 pt-6 pb-8 flex flex-col mt-12 right-0 left-0  " >
  
              
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <Label for='lab' class='block mb-2'>Lab Number</Label>     
            <div class="relative">       
              <Iconinput noBorder iconClass="h-5 w-5"  icon={Qrcode}  id='lab' placeholder="20220000000000000002"   /> 
              <Button  color="dark" textSize="text-sm" class=" rounded-l-none absolute  top-0 bottom-0 right-0" type="button"><Spinner size="5" class="mr-2"/>Generate</Button>
            </div>
            <!-- <p class="text-red text-xs italic">Please fill out this field.</p> -->
          </div>
          <div class="md:w-1/2 px-3">
            <Label for='rd' class='block mb-2'>Received Date</Label>            
            <Input id='rd'  type="datetime-local"    />
          </div>
        </div>

        <!--  -->


        
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                <Label for='hi' class='block mb-2'>Health Institute</Label>            
                  <Input   id='hi'     />
                <!-- <p class="text-red text-xs italic">Please fill out this field.</p> -->
              </div>
              <div class="md:w-1/2 px-3">
                <Label for='wd' class='block mb-2'>Ward</Label>            
                <Input id='wd'  type="text"    />
              </div>

              <div class="md:w-1/2 px-3">
                <Label for='rb' class='block mb-2'>Requested By</Label>            
                <Input id='rb'  type="text"    />
              </div>


            </div>

</div>
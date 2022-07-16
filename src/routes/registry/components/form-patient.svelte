
<script>
  import {  Input,Textarea, Label , Button ,Iconinput , Search  ,Select } from 'flowbite-svelte';
import { Qrcode , Search as srch} from "svelte-heros";
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
          <div class="md:w-1/2 px-3">
              <Label for='default-input' class='block mb-2'>National ID</Label>            
              <div class="relative">       
                <Iconinput noBorder   icon={srch}  id='nic' placeholder="N123456878D"   /> 
                <Button textSize="text-sm" class="absolute rounded-l-none  top-0 bottom-0 right-0" type="button">Search</Button>
              </div>
                <p class="text-grey-dark text-xs italic">Please enter patient national identification number</p>
          </div>
  
      </div>
    
        
      <div class="-mx-3 md:flex mb-6">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <Label for='fn' class='block mb-2'>First Name</Label>            
          <Input   id='fn'    />
        <!-- <p class="text-red text-xs italic">Please fill out this field.</p> -->
      </div>
      <div class="md:w-1/2 px-3">
        <Label for='lm' class='block mb-2'>Last Name</Label>            
        <Input id='lm'     />
      </div>
      
      <div class="md:w-1/2 px-3">
       
          <Label for='gn' class='block mb-2'>Gender</Label>            
        
          <div class="relative">
              <Select id='gn' bind:value="{selected}" >
                  <option>Male</option>
                  <option>Female</option>
              </Select>
          </div>
        </div>
  


    </div>
    
    <div class="-mx-3 md:flex mb-2">
     
    
      <div class="md:w-1/2 px-3">
  
        <Label for='dob' class='block mb-2'>Date of birth</Label>         
         <div class="relative">
            <Input id='dob'  type='date'/>
        </div>
      </div>
    </div>
  
  
  
    <div class="-mx-3 md:flex mb-6">
      <div class="md:w-full px-3">
        <Textarea  {...textareaprops}  />
       </div>
    </div>
  
  
  </div>

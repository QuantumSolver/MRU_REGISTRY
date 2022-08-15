<script>
    import { Dropdown ,DropdownItem,Datepicker ,Button} from "flowbite-svelte";
    import { Logout  } from "svelte-heros";
    import { goto } from '$app/navigation';


    
</script>

<ul class="bg-white-100  text-sm border-b-2 shadow-lg w-full-screen px-2">
    <li class="inline-block py-2 ">
        <Button  on:click={()=>goto("/")} >Home</Button>
    </li>
    <li class="inline-block py-2  ">
        <Button  on:click={()=>goto("/registry")} >Registry</Button>
    </li>
    <li class="inline-block py-2   ">
        <Dropdown label="Epidemiology" arrowIcon={false} >  
            <DropdownItem>Epi-Data</DropdownItem>
            <DropdownItem on:click={()=>goto("/analyzer")} >Analyzer plate setup</DropdownItem>
            <DropdownItem>Analyzer Results</DropdownItem>
            <DropdownItem>Reports</DropdownItem>
        </Dropdown>

    </li>

    <li class="p-2 m-auto md:float-right self-end">
         <Logout  size="30" class="text-indigo-500 cursor-pointer inline-block " />
    </li>
</ul>
<script>
    import { Dropdown ,DropdownItem, Navbar, NavLi, NavUl, NavHamburger ,Avatar, DropdownDivider,DropdownHeader} from "flowbite-svelte";
    import { Logout ,Home, Clipboard } from "svelte-heros";
    import { goto } from '$app/navigation';


    
let avatar = {
    src:'',
    alt: 'My avatar',
    size: 12,
    border: true,
    round: true
};

</script>

<Navbar let:hidden let:toggle rounded={true} navClass='border-b-2 shadow-lg py-2'>

<div class="flex md:order-2">
    <Dropdown arrowIcon={false} inline={true}>
        <Avatar  slot="label" />
        <DropdownHeader>
            <span class="block text-sm"> Marcques Mouton </span>
            <span class="block truncate text-sm font-medium"> king@npesnam.com </span>
        </DropdownHeader>
        <DropdownItem >Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownDivider />
        <DropdownItem liClass='block align-middle font-medium cursor-pointer py-3 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600'  > <Logout size='20'  class="inline-flex"/> Sign out</DropdownItem>
    </Dropdown>
    <NavHamburger on:click={toggle} />
</div>
<NavUl {hidden}>
    <NavLi sveltekit:prefetch href="/" active={true}>Home</NavLi>
    <NavLi sveltekit:prefetch href="/registry">Registry</NavLi> 
      
      <Dropdown label="Epidemiology" placement="bottom-start" inline={true}>  
        <DropdownItem>Epi-Data</DropdownItem>
        <DropdownItem on:click={()=>goto("/analyzer")} >Analyzer plate setup</DropdownItem>
        <DropdownItem>Analyzer Results</DropdownItem>
        <DropdownItem>Reports</DropdownItem>
    </Dropdown>

</NavUl>
</Navbar>
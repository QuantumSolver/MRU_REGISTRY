
<script>
import {  Table , TableBody , TableHeadCell ,TableHead ,TableBodyCell , TableBodyRow ,Button } from 'flowbite-svelte';



</script>



<div class="relative px-8 pt-6 pb-8 flex flex-col mt-5 right-0 left-0  " >

<Button>Add Sample</Button>

<Table hoverable={true}>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    <TableHeadCell>
      <span class="sr-only"> Edit </span>
    </TableHeadCell>
  </TableHead>
  <TableBody class="divide-y max-h-px">
  <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>
        Microsoft Surface Pro
      </TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>
        Magic Mouse 2
      </TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500"> Edit </a>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>


</div>
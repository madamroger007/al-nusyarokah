import Image from 'next/image';

import { TableRow, TableCell } from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import DeleteProductButton from './delete-program-button';
import EditProductButton from './edit-product-button';

export default function ProductRow({ id, imageUrl, name, price, createdAt }) {
  const date = createdAt.toLocaleString();

  return (
    <TableRow>
      <TableCell className='hidden sm:table-cell'>
        <Image
          alt='Product image'
          className='aspect-square rounded-md object-cover'
          height='64'
          src={imageUrl}
          width='64'
        />
      </TableCell>
      <TableCell className='font-medium'>{name}</TableCell>
      
      <TableCell className='hidden md:table-cell'>{date}</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup='true' size='icon' variant='ghost'>
              <MoreHorizontal className='h-4 w-4' />
              <span className='sr-only'>Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Aksi</DropdownMenuLabel>
            <EditProductButton id={id} />
            <DeleteProductButton id={id} />
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}

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
import DeleteProgramButton from './delete-program-button';
import EditProgramButton from './edit-program-button';
import { ConvertTime } from '@/lib/time';

export default function ProgramRow({ id, imageUrl, name, price, createdAt }) {
  const { timeAgo } = ConvertTime(createdAt);

  return (
    <TableRow>
      <TableCell className='hidden sm:table-cell'>
        <Image
          alt='Program image'
          className='aspect-square rounded-md object-cover'
          height='64'
          src={imageUrl}
          width='64'
        />
      </TableCell>
      <TableCell className='font-medium'>{name}</TableCell>

      <TableCell className='hidden md:table-cell'>{timeAgo}</TableCell>
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
            <EditProgramButton id={id} />
            <DeleteProgramButton id={id} />
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}

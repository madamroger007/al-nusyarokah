import Link from 'next/link';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

export default function EditProgramButton({ id }) {
  return (
    <DropdownMenuItem>
      <Link className='w-full h-full' href={`/dashboard/program/${id}`}>Edit</Link>
    </DropdownMenuItem>
  );
}

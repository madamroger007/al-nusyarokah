import Link from 'next/link';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

export default function EditBeritaButton({ id }) {
  return (
    <DropdownMenuItem>
      <Link className='w-full h-full' href={`/dashboard/berita/${id}`}>Edit</Link>
    </DropdownMenuItem>
  );
}

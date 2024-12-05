import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { deleteProgram } from '@/lib/actions';

export default function DeleteProductButton({ id }) {
  const deleteProductById = deleteProgram.bind(null, id);

  return (
    <form action={deleteProductById}>
      <DropdownMenuItem>
        <button type='submit' className='w-full h-full'>Hapus</button>
      </DropdownMenuItem>
    </form>
  );
}

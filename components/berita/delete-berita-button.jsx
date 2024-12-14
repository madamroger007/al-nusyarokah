import { Trash } from 'lucide-react';

import { Button, buttonVariants } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';

import { deleteBerita } from '@/lib/actions';

export default async function DeleteBeritaButton({ id }) {
  const deleteBeritaById = await deleteBerita.bind(null, id);

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className={buttonVariants({ variant: 'destructive', size: 'icon' })}
      >
        <Trash className='h-4 w-4' />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Apakah kamu yakin?</AlertDialogTitle>
          <AlertDialogDescription>
            Item ini akan dihapus secara permanen. Tindakan ini tidak dapat
            dibatalkan.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Tidak</AlertDialogCancel>
          <AlertDialogAction>
            <form action={deleteBeritaById}>
              <Button type='submit'>Ya, hapus</Button>
            </form>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

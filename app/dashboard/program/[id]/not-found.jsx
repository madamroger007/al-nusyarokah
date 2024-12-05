import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div
      className='flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm'
      x-chunk='dashboard-02-chunk-1'
    >
      <div className='flex flex-col items-center gap-1 text-center'>
        <h3 className='text-2xl font-bold tracking-tight'>
          Produk tidak ditemukan
        </h3>
        <p className='text-sm text-muted-foreground'>
          Produk yang Anda cari tidak ditemukan.
        </p>
        <Link
          href='/dashboard/products'
          className={cn(buttonVariants({ variant: 'default' }), 'mt-4')}
        >
          Kembali
        </Link>
      </div>
    </div>
  );
}

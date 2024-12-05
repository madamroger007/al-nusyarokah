'use client';

import Link from 'next/link';
import { Home, Package, Package2, ImageIcon, NewspaperIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function NavLinks() {
  const pathname = usePathname();

  return (
    <div>
      <Link
        href='/dashboard'
        className={cn(
          pathname === '/dashboard'
            ? 'text-primary bg-muted'
            : 'text-muted-foreground',
          'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary'
        )}
      >
        <Home className='h-4 w-4' />
        Beranda
      </Link>
      <Link
        href='/dashboard/program'
        className={cn(
          pathname.startsWith('/dashboard/program')
            ? 'text-primary bg-muted'
            : 'text-muted-foreground',
          'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary'
        )}
      >
        <Package className='h-4 w-4' />
        Program kegiatan
      </Link>
      <Link
        href='/dashboard/posts'
        className={cn(
          pathname.startsWith('/dashboard/posts')
            ? 'text-primary bg-muted'
            : 'text-muted-foreground',
          'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary'
        )}
      >
        <NewspaperIcon className='h-4 w-4' />
        Postingan Berita
      </Link>

      <Link
        href='/dashboard/galeri'
        className={cn(
          pathname.startsWith('/dashboard/galeri')
            ? 'text-primary bg-muted'
            : 'text-muted-foreground',
          'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary'
        )}
      >
        <ImageIcon className='h-4 w-4' />
        Galeri
      </Link>
    </div>
  );
}

export function NavLinksMobile() {
  const pathname = usePathname();

  return (
    <>
      <Link href='#' className='flex items-center gap-2 text-lg font-semibold'>
        <Package2 className='h-6 w-6' />
        <span className='sr-only'>Tumbuh Lestari</span>
      </Link>
      <Link
        href='/dashboard'
        className={cn(
          pathname === '/dashboard'
            ? 'text-primary bg-muted'
            : 'text-muted-foreground',
          'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground'
        )}
      >
        <Home className='h-5 w-5' />
        Home
      </Link>
      <Link
        href='/dashboard/products'
        className={cn(
          pathname.startsWith('/dashboard/products')
            ? 'text-primary bg-muted'
            : 'text-muted-foreground',
          'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground'
        )}
      >
        <Package className='h-5 w-5' />
        Produk
      </Link>
      <Link
        href='/dashboard/posts'
        className={cn(
          pathname.startsWith('/dashboard/posts')
            ? 'text-primary bg-muted'
            : 'text-muted-foreground',
          'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground'
        )}
      >
        <LineChart className='h-5 w-5' />
        Blog
      </Link>
    </>
  );
}

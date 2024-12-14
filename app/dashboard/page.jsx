import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Package, BookText, ImageIcon } from 'lucide-react';

import { getTotalProgram, getTotalBerita, getTotalGallery } from '@/lib/prismaFunctions';

export default async function Page() {
  const totalProgram = await getTotalProgram();
  const totalBerita = await getTotalBerita();
  const totalGalery = await getTotalGallery();

  return (
    <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
      <Card x-chunk='dashboard-01-chunk-0'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Program</CardTitle>
          <Package className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>{totalProgram}</div>
          <p className='text-xs text-muted-foreground'>
            Total program yang telah ditambahkan
          </p>
        </CardContent>
      </Card>
      <Card x-chunk='dashboard-01-chunk-1'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Berita</CardTitle>
          <BookText className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>{totalBerita}</div>
          <p className='text-xs text-muted-foreground'>
            Total postingan berita yang telah dibuat
          </p>
        </CardContent>
      </Card>
      <Card x-chunk='dashboard-01-chunk-1'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Galeri</CardTitle>
          <ImageIcon className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>{totalGalery}</div>
          <p className='text-xs text-muted-foreground'>
            Total galeri yang telah dibuat
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

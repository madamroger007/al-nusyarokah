'use client';

import Link from 'next/link';
import { useFormState } from 'react-dom';

import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SubmitButton from '@/components/submit-button';

import { ChevronLeft } from 'lucide-react';

import { cn } from '@/lib/utils';
import React from 'react';

export default function ProgramForm({ formAction, initialData }) {
  const [state, action] = useFormState(formAction, initialData);
  const [image, setImage] = React.useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Ambil file pertama (single file)
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setImage(newImageUrl);

      // Membersihkan URL object lama untuk menghindari memory leak
      if (image) {
        URL.revokeObjectURL(image);
      }
    }
  };

  return (
    <form
      action={action}
      className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'
    >
      <div className='grid max-w-full flex-1 auto-rows-max gap-4'>
        <div className='flex items-center gap-4'>
          <Link
            href={'/dashboard/program'}
            className={cn(
              buttonVariants({ variant: 'outline', size: 'icon' }),
              'c-7 h-7'
            )}
          >
            <ChevronLeft className='h-4 w-4' />
            <span className='sr-only'>Kembali</span>
          </Link>
          <h1 className='flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0'>
            {initialData ? 'Edit Program' : 'Tambah Program'}
          </h1>
          <div className='hidden items-center gap-2 md:ml-auto md:flex'>
            <Link
              href='/dashboard/program'
              className={buttonVariants({ variant: 'outline', size: 'sm' })}
            >
              Batal
            </Link>
            <SubmitButton text='Simpan' />
          </div>
        </div>
        <div className='grid gap-4'>
          <div className='grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8'>
            <Card x-chunk='dashboard-07-chunk-0'>
              <CardHeader>
                <CardTitle>Detail Program</CardTitle>
                
              </CardHeader>
              <CardContent>
                <div className='grid gap-6'>
                  <div className='grid gap-3'>
                    <Label htmlFor='name'>Nama</Label>
                    <Input
                      id='name'
                      name='name'
                      type='text'
                      className='w-full'
                      placeholder='Program Name'
                      defaultValue={initialData?.name}
                    />
                    <div
                      aria-live='polite'
                      aria-atomic='true'
                      className='text-red-500 text-sm'
                    >
                      <p>{state?.error?.name}</p>
                    </div>
                  </div>
                  <div className='grid gap-3'>
                    <Label htmlFor='description'>Deskripsi</Label>
                    <Textarea
                      id='description'
                      name='description'
                      placeholder='Program Description'
                      className='min-h-32'
                      defaultValue={initialData?.description}
                    />
                    <div
                      aria-live='polite'
                      aria-atomic='true'
                      className='text-red-500 text-sm'
                    >
                      <p>{state?.error?.description}</p>
                    </div>
                  </div>
                  {!initialData?.imageUrl && (
                    <div className='grid gap-3'>
                      <Label htmlFor='picture'>Gambar</Label>
                      <Input
                        id="picture"
                        name="picture"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      <div
                        aria-live='polite'
                        aria-atomic='true'
                        className='text-red-500 text-sm'
                      >
                        <p>{state?.error?.picture}</p>
                      </div>
                    </div>
                  )}

                  <div style={{ marginTop: "16px" }}>
                    {image && (
                      <img
                        src={image}
                        alt="Uploaded Preview"
                        style={{ width: "200px", height: "200px", objectFit: "cover" }}
                      />
                    )}
                  </div>

                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className='flex items-center justify-center gap-2 md:hidden'>
          <Link
            href='/dashboard/program'
            className={buttonVariants({ variant: 'outline', size: 'sm' })}
          >
            Batal
          </Link>
          <SubmitButton text='Simpan' />
        </div>
      </div>
    </form>
  );
}

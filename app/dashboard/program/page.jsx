import Link from 'next/link';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { buttonVariants } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from '@/components/ui/table';

import { PlusCircle } from 'lucide-react';
import ProgramRow from '@/components/program-row';
import { getAllProgram } from '@/lib/prismaFunctions';

export default async function Page() {
  const programs = await getAllProgram();
  return (
    <div className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
      <Tabs defaultValue='all'>
        <div className='flex items-center'>
          <div className='ml-auto flex items-center gap-2'>
            <Link
              href='/dashboard/program/add'
              className={buttonVariants({ variant: 'default', size: 'sm' })}
            >
              <PlusCircle className='h-3.5 w-3.5' />
              <span className='not-sr-only sm:whitespace-nowrap'>
                Tambah Program
              </span>
            </Link>
          </div>
        </div>
        <TabsContent value='all'>
          <Card x-chunk='dashboard-06-chunk-0'>
            <CardHeader>
              <CardTitle>Program</CardTitle>
              <CardDescription>Kelola Program anda</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='hidden w-[100px] sm:table-cell'>
                      <span className='sr-only'>Gambar</span>
                    </TableHead>
                    <TableHead>Nama</TableHead>

                    <TableHead className='hidden md:table-cell'>
                      Dibuat pada
                    </TableHead>
                    <TableHead>
                      <span className='sr-only'>Aksi</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {programs.map((program) => (
                    <ProgramRow
                      key={program.id}
                      id={program.id}
                      name={program.name}
                      imageUrl={program.imageUrl}
                      createdAt={program.createdAt}
                    />
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

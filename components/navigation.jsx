import Link from 'next/link';
import { CircleUser, Menu, LogOutIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { NavLinks, NavLinksMobile } from '@/components/nav-links';
import LogoutButton from '@/components/logout-button';
import { auth } from '@/auth';

export default async function Navigation({ children }) {
  const session = await auth();

  return (
    <div className='grid min-h-screen  w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
      <div className='hidden border-r bg-[#1e1e20]  md:block'>
        <div className='flex h-full max-h-screen flex-col gap-2'>
          <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
            <Link
              href='/dashboard'
              className='flex items-center gap-2 font-semibold'
            >
              <span className='text-white font-bold'>Dashboard Madrasah</span>
            </Link>
          </div>
          <div className='flex-1'>
            <nav className='grid items-start px-2 text-sm font-medium lg:px-4 gap-12'>
              <NavLinks />

              <div className='flex items-center text-white gap-3'>
                <LogOutIcon className='h-5 w-5' />
                <LogoutButton />
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <header className='flex h-14 items-center justify-end gap-4 border-b  max-md:bg-[#1e1e20] px-4 lg:h-[60px] lg:px-6'>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size='icon'
                className='shrink-0 md:hidden bg-[#1e1e20]'
              >
                <Menu className='h-5 w-5' />
                <span className='sr-only'>Menu Navigasi</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='flex flex-col max-md:bg-[#1e1e20] ' >
              <nav className='grid gap-3 text-lg font-medium  '>
                <NavLinksMobile />
                <div className='flex items-center gap-3 text-white'>
                  <LogOutIcon className='h-5 w-5' />
                  <LogoutButton />
                </div>
              </nav>

            </SheetContent>
          </Sheet>
          <DropdownMenu className='self-end'>
            <DropdownMenuTrigger asChild>
              <Button variant='secondary' size='icon' className='rounded-full'>
                <CircleUser className='h-5 w-5' />
                <span className='sr-only'>Menu user</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogoutButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
          {children}
        </main>
      </div>
    </div>
  );
}

'use client';

import { useFormState } from 'react-dom';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';

export function LoginForm({ formAction, initialData }) {
  const [state, action] = useFormState(formAction, initialData);

  return (
    <form
      action={action}
      className='w-full h-screen container flex items-center justify-center bg-[]'
    >
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle className='text-2xl text-center'>Login Admin</CardTitle>
          <CardDescription>
            Masukkan username dan password untuk login
          </CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='username'>Username</Label>
            <Input
              id='username'
              name='username'
              type='username'
              placeholder='username'
            />
            <div
              aria-live='polite'
              aria-atomic='true'
              className='text-red-500 text-sm'
            >
              <p>{state?.error?.username}</p>
            </div>
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              name='password'
              type='password'
              placeholder='********'
            />
            <div
              aria-live='polite'
              aria-atomic='true'
              className='text-red-500 text-sm'
            >
              <p>{state?.error?.password}</p>
            </div>
          </div>
          <div className='grid gap-2'>
            {state?.error && (
              <Alert variant='destructive'>
                <AlertDescription>{state?.error}</AlertDescription>
              </Alert>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type='submit' className='w-full'>
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

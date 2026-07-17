'use client';

'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signUpDefaultValues } from '@/lib/constants';
import Link from 'next/link';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { signUp } from '@/lib/actions/user.actions';
import { useSearchParams } from 'next/navigation';

const SignUpForm = () => {
  const [data, action] = useActionState(signUp, {
    success: false,
    message: '',
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const SignUpButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className='w-full' variant='default'>
        {pending ? 'Submitting...' : 'Sign Up'}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type='hidden' name='callbackUrl' value={callbackUrl} />
      <div className='space-y-6'>
        <div>
          <Label htmlFor='name'>Name</Label>
          <Input
            id='name'
            name='name'
            type='text'
            autoComplete='name'
            defaultValue={signUpDefaultValues.name}
          />
        </div>
        <div>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            defaultValue={signUpDefaultValues.email}
          />
        </div>
        <div>
          <Label htmlFor='email'>Password</Label>
          <Input
            id='password'
            name='password'
            type='password'
            autoComplete='password'
            required
            defaultValue={signUpDefaultValues.password}
          />
        </div>
        <div>
          <Label htmlFor='email'>Confirm password</Label>
          <Input
            id=''
            name='confirmPassword'
            type='password'
            autoComplete='confirmPassword'
            required
            defaultValue={signUpDefaultValues.confirmPassword}
          />
        </div>
        <div>
          <SignUpButton />
        </div>
      </div>

      {data && !data.success && (
        <div className='text-center text-destructive mt-2'>{data.message}</div>
      )}

      <div className='text-sm text-center text-muted-foreground mt-2'>
        Already have an account?{' '}
        <Link href='sign-in' target='_self' className='link'>
          Sign In
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;

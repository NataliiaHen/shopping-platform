import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ModeToggle from './mode-toggle';
import UserButton from './user-button';

const Menu = () => {
  return (
    <div className='space-x-2'>
      <div className='flex justify-end gap-3'>
        <nav className='hidden md:flex w-full max-w-xs gap-1'>
          <ModeToggle />
          <Button asChild variant='ghost'>
            <Link href='/cart'>
              <ShoppingCart />
              Cart
            </Link>
          </Button>
          <UserButton />
        </nav>
        <nav className='md:hidden'>
          <Sheet>
            <SheetTrigger className='align-middle'>
              <EllipsisVertical />
            </SheetTrigger>
            <SheetContent className='flex flex-col items-start bg-white'>
              <SheetTitle>Menu</SheetTitle>
              <ModeToggle />
              <Button asChild variant='ghost'>
                <Link href='/cart'>
                  <ShoppingCart />
                  Cart
                </Link>
              </Button>
              <UserButton />
              <SheetDescription></SheetDescription>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </div>
  );
};

export default Menu;

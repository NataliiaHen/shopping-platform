'use server';

import { CartItem } from '@/app/types';

export async function addItemToCart(data: CartItem) {
  return {
    success: true,
    message: 'Added to cart',
  };
}

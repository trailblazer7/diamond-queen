'use client';
import React from 'react';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cart';

const CartButton: React.FC = () => {
  const { total, count } = useCartStore();
  return (
    <Button className="gap-2">
      <b className="text-nowrap min-w-14">{total} $</b>
      <div className="h-full w-[1px] mx-1 bg-gray-300"></div>
      <ShoppingCart />
      <span className="min-w-5">{count}</span>
    </Button>
  );
};

export default CartButton;

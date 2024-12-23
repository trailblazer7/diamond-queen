'use client';
import { Container, Title } from '@/components';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart';

export default function Home() {
  const { total, inc } = useCartStore();

  return (
    <>
      <Container className="mt-6">
        <Title size="lg" text="All Diamonds" className="font-extrabold" />
      </Container>
      {/* Top Bar */}
      <Container className="mt-4 flex gap-6">
        <div className="mt-4">
          <Button className="text-nowrap" onClick={() => inc()}>
            Purchase Diamonds
          </Button>
          <p className="mt-2">Total: {total}</p>
        </div>
        <div className="w-[250px]">{/* Filters */}</div>
        <div className="flex-1 flex flex-col gap-10">{/* Products */}</div>
      </Container>
    </>
  );
}

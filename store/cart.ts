import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartState {
  count: number;
  total: number;
  inc: () => void;
  set: (total: number) => void;
}

export const useCartStore = create<CartState, [['zustand/persist', CartState]]>(
  persist(
    (set): CartState => ({
      count: 0,
      total: 0,
      inc: () =>
        set((state: CartState) => ({
          total: state.total + 50,
          count: state.count + 1,
        })),
      set: (total) => set({ total }),
    }),
    {
      name: 'cart-storage',
    }
  )
);

import { defineStore } from 'pinia';
import { store } from '../index';

interface State {
  count: number;
}

export const useHelloWorldStore = defineStore({
  id: 'hello-world',
  state: (): State => ({
    count: 0,
  }),
  getters: {
    getCount(): number {
      return this.count;
    },
  },
  actions: {
    increment(): void {
      this.count++;
    },
  },
});

// Need to be used outside the setup
export function useHelloWorldStoreOut() {
  return useHelloWorldStore(store);
}

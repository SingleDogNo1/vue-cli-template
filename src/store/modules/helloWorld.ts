import { defineStore, storeToRefs } from 'pinia';
import { store } from '../index';

interface State {
  count: number;
}

export const helloWorldStore = defineStore({
  id: 'helloWorld',
  state: (): State => ({
    count: 0,
  }),
  getters: {
    getCount(): number {
      return this.count * 2;
    },
  },
  actions: {
    increment(): void {
      this.count++;
    },
  },
});

export function useHelloWorldStore() {
  return {
    store: helloWorldStore(store),
    state: storeToRefs(helloWorldStore(store)),
  };
}

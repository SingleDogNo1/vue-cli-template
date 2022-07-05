/* 测试 pinia 模块在脱离 vue 环境下是否仍然可以正常使用 */
import { useHelloWorldStore } from '../store/modules/helloWorld';
import { unref } from 'vue';

const { store, state } = useHelloWorldStore();
const { count, getCount } = state;
console.log('store :>> ', store);

export const helloWorldStoreOut = () => {
  return {
    count: unref(count),
    getCount: unref(getCount),
  };
};

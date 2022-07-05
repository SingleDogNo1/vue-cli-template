<template>
  <div class="home">
    {{ msg }}
    <button @click="increment">{{ count }}</button>
    <span>{{ getCount }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HomeView',
};
</script>

<script lang="ts" setup>
import { ref } from 'vue';
import { useHelloWorldStore } from '@store/modules/helloWorld';

const { store, state } = useHelloWorldStore();
const { increment } = store;
const { count, getCount } = state;

const msg = ref('hello, home');
</script>

<style lang="scss" scoped>
.home {
  color: red;
}
</style>

<template>
  <div class="home">
    {{ msg }}
    <button @click="store.increment">{{ count }}</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HomeView',
};
</script>

<script lang="ts" setup>
import { ref } from 'vue';
import { useHelloWorldStore } from '../store/modules/helloWorld';
import { storeToRefs } from 'pinia';

const store = useHelloWorldStore();
const { count } = storeToRefs(store);

const msg = ref('hello, home');
</script>

<style lang="scss" scoped>
.home {
  color: red;
}
</style>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts" setup>
import { helloWorldStoreOut } from './storeOutTest';
const { count, getCount } = helloWorldStoreOut();
console.log('count, getCount :>> ', count, getCount);
</script>

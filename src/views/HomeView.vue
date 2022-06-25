<template>
  <div class="home">
    {{ msg }}
  </div>
</template>

<script lang="ts">
export default {
  name: 'HomeView',
};
</script>

<script lang="ts" setup>
import { ref } from 'vue';

const msg = ref('hello, home');
</script>

<style lang="scss" scoped>
.home {
  color: red;
}
</style>

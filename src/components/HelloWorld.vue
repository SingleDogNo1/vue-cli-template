<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
export default {
  name: 'HelloWorld',
};
</script>

<script lang="ts" setup>
defineProps({
  msg: String,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>

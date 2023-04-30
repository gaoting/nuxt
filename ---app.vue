<script setup lang="ts">
const nick = ref("0.0");
</script>

<template>
  <div>
    <input v-model="nick" />
    <h1>hello, {{ nick }}</h1>
    <test>6666</test>
  </div>
</template>

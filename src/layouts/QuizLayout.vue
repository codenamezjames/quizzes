<template>
  <q-layout view="hHh lpR fFf" class="quiz-layout">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
//
</script>

<style lang="scss" scoped>
.quiz-layout {
  background: linear-gradient(135deg, #9b59b6 0%, #ff69b4 50%, #ffd700 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>

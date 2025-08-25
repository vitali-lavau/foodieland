<script setup lang="ts">

</script>

<template>
  <NuxtLink to="/" class="logo">
    <NuxtImg src="/images/logo.svg" alt="logo" class="logo__img"/>
  </NuxtLink>
</template>

<style scoped lang="scss">
.logo {
  width: to-rem(110px);
  height: to-rem(30px);
  @include flex-center;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
}
</style>
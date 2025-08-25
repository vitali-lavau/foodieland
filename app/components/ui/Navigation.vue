<script setup lang="ts">
interface NavigationLink {
  name: string;
  path: string;
}

const props = defineProps<{
  links: NavigationLink[];
  column?: boolean;
}>()
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__list" :class="{ 'navigation__list--column': props.column }">
      <li
          v-for="link in props.links"
          :key="link.path"
          class="navigation__item"
      >
        <NuxtLink :to="link.path" class="navigation__link">
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.navigation {

  &__list {
    @include flex-row(center, flex-start, to-rem(60px));

    &--column {
      flex-direction: column;
      gap: to-rem(32px);
    }
  }

  &__link {
    font-weight: 500;
    letter-spacing: -0.32px;
    text-decoration: none;

    &:hover {
      color: $color-primary;
    }
  }
}
</style>
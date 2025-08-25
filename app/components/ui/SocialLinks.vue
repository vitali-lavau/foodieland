<script setup lang="ts">
interface SocialLink {
  name: string;
  path: string;
  icon: Component;
}

const props = defineProps<{
  links: SocialLink[];
}>()
</script>

<template>
  <ul class="social-links">
    <li
        v-for="link in props.links"
        :key="link.name"
        class="social-links__item"
    >
      <a
          :href="link.path"
          class="social-links__link"
          target="_blank"
          rel="noopener noreferrer"
      >
        <component :is="link.icon" class="social-links__icon" />
      </a>
    </li>
  </ul>
</template>

<style lang="scss">
.social-links {
  @include flex-row(center, flex-start, to-rem(24px));

  &__link {
    width: to-rem(24px);
    height: to-rem(24px);
    @include flex-center;
  }

  &__icon {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;

    path {
      transition: fill .4s;
    }

    &:hover {

      path {
        fill: $color-primary;
      }
    }
  }
}
</style>
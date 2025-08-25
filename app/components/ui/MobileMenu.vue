<script setup lang="ts">
import Navigation from "~/components/ui/Navigation.vue";
import SocialLinks from "~/components/ui/SocialLinks.vue";

const props = defineProps<{
  links: { name: string; path: string }[];
  socialLinks: { name: string; path: string; icon: any }[];
  open?: boolean;
}>()

const emit = defineEmits(['close']);
</script>

<template>
  <div class="mobile-menu">
    <div v-if="open" class="mobile-menu__inner">
      <div class="mobile-menu__head">
        <LucideX
            :size="32"
            @click="emit('close')"
        />
      </div>

      <div class="mobile-menu__body">
        <Navigation
            :links="props.links"
            column
            class="mobile-menu__navigation"
        />
      </div>

      <div class="mobile-menu__footer">
        <SocialLinks :links="props.socialLinks" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $color-white;
  z-index: 100;

  &__inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__head {
    padding: to-rem(16px);
    border-bottom: 1px solid $color-gray;
    @include flex-row(center, flex-end);
  }

  &__body {
    flex: 1;
    @include flex-col(center, center);
    padding: to-rem(32px) to-rem(16px);
    overflow-y: auto;

    @media (orientation: landscape) {
      justify-content: flex-start;
    }
  }

  &__footer {
    padding: to-rem(16px);
    border-top: 1px solid $color-gray;
    @include flex-row(center, flex-end);
  }

  &__navigation {
    flex-direction: column;
  }
}
</style>
<script setup lang="ts">
import Logo from "@/components/ui/Logo.vue";
import Navigation from "~/components/ui/Navigation.vue";
import SocialLinks from "~/components/ui/SocialLinks.vue";
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconTwitter from '@/components/icons/IconTwitter.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
import MobileMenu from "~/components/ui/MobileMenu.vue";

const headerLinks = [
  { name: 'Home', path: '/' },
  { name: 'Recipes', path: '/recipes' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
  { name: 'About us', path: '/about' },
]

const socialLinks = [
  {name: 'Facebook', path: 'https://www.facebook.com/?locale=pl_PL', icon: IconFacebook},
  {name: 'Twitter', path: 'https://x.com/',  icon: IconTwitter},
  {name: 'Instagram', path: 'https://www.instagram.com/', icon: IconInstagram},
]

const isMenuOpen = ref(false);
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <Logo class="header__logo" />
        <Navigation :links="headerLinks" class="header__navigation" />
        <SocialLinks :links="socialLinks" class="header__social-links" />

        <div @click="isMenuOpen = true" class="header__menu-btn">
          <LucideAlignJustify :size="32" />
        </div>

        <Transition name="slide-x">
          <MobileMenu
              v-if="isMenuOpen"
              :links="headerLinks"
              :socialLinks="socialLinks"
              :open="isMenuOpen"
              @close="isMenuOpen = false"
          />
        </Transition>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: to-rem(16px) 0;
  border-bottom: 1px solid $color-gray;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: block;
  }

  &__navigation {
    display: none;
  }

  &__social-links {
    display: none;
  }

  &__menu-btn {
    width: to-rem(32px);
    height: to-rem(32px);
    @include flex-center;
  }
  
  @media (min-width: to-rem(1024px)) {
    padding-top: to-rem(24px);
    padding-bottom: to-rem(24px);

    &__navigation {
      display: block;
    }

    &__social-links {
      display: flex;
    }

    &__menu-btn {
      display: none;
    }
  }

  @media (min-width: to-rem(1280px)) {
    padding-top: to-rem(32px);
    padding-bottom: to-rem(32px);
  }
}
</style>
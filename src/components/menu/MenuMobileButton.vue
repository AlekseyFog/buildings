<template>
  <button
    class="header__menu_button"
    @click="SetMenuIsVisible"
  >
    <MobileButton />
  </button>
</template>

<script>
import MobileButton from '@/assets/svg/menu_mob.svg';

export default {
  name: 'MenuMobileButton',
  components: {
    MobileButton,
  },
  methods: {
    SetMenuIsVisible() {
      this.$emit('show-menu');
    },
  },
};
</script>

<style scoped>
.header__menu_button{
  border: none;
  background: none;
}

</style>

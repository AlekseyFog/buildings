<template>
  <button
    class="header__menu_button"
    @click="SetMenuIsVisible"
  >
    <MobileButton class="mob_button" />
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
  z-index: 999;
  border: none;
  background: none;
}

.mob_button{
  fill: #ffffff;
  stroke: #722311;
}

</style>

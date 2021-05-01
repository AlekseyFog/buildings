<template>
  <div class="menu">
    <div class="menu__wrapper">
      .
      <CloseButton
        class="close-button"
        @click="close"
      />
      <div
        class="menu__item"
        @click="close"
      >
        <router-link to="/">
          Главная
        </router-link>
      </div>
      <div class="menu__item" />
      <div class="menu__item" />
      <div class="menu__item" />
      <div class="menu__item" />
      <div class="menu__item" />
      <div class="menu__item" />
    </div>
  </div>
</template>

<script>
import CloseButton from '@/assets/svg/close.svg';

export default {
  name: 'MenuMobile',
  components: {
    CloseButton,
  },

  methods: {
    close() {
      this.$emit('close');
    },
  },

};

</script>

<style scoped>
.menu {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
}

.menu__wrapper {
  display: flex;
  flex-direction: column;
  width: 250px;
  min-height: 100vh;
  background: #465162;
  padding: 10px;
  margin-left: auto;
}

.menu__item {
  font-size: 15px;
}

.close-button {
  position: absolute;
  right: 15px;
  z-index: 100;
  font-size: 20px;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
}

a {
  color: white;
}

a.router-link-exact-active {
  color: #F09236 !important;
}

a:visited {
  color: #ffffff;
}

.order_button {
  display: block;
  background: #F09236;
  font-size: 12px;
  color: #1E3053;
  width: 100px;
  height: 30px;
  border-radius: 2px;
  border: none;
  padding: 3px;
  align-self: flex-end;
}

.projects__submenu {
  display: none;
  height: 0;
  transition: all 0.5s ease-in-out;
}

.projects:hover .projects__submenu {
  display: block;
  height: auto;
  transition: all 0.5s ease-in-out;
}
</style>

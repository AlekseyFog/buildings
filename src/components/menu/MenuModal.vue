<template>
  <div class="menu">
    <div
      class="menu__wrapper"
    >
      <div class="menu__header">
        <CloseButton
          class="close-button"
          @click="close"
        />
      </div>
      <div
        class="menu__item"
        @click="close"
      >
        <router-link to="/">
          Главная
        </router-link>
      </div>
      <div
        class="menu__item"
        @click="close"
      >
        <router-link to="/houses-br">
          <div class="sub__menu_item">
            Кирпичные дома
          </div>
        </router-link>
      </div>
      <div
        class="menu__item"
        @click="close"
      >
        <router-link to="/houses-gb">
          <div class="sub__menu_item">
            Дома из газобетона
          </div>
        </router-link>
      </div>
      <div
        class="menu__item"
        @click="close"
      >
        <router-link to="/houses-gl">
          <div class="sub__menu_item">
            Дома из клееного бруса
          </div>
        </router-link>
      </div>
      <div
        class="menu__item"
        @click="close"
      >
        <router-link to="/houses-pr">
          <div class="sub__menu_item">
            Дома из профилированного бруса
          </div>
        </router-link>
      </div>
      <div
        class="menu__item"
        @click="close"
      >
        <router-link to="/baths">
          Бани
        </router-link>
      </div>
      <div
        class="menu__item"
        @click="close"
      >
        <router-link to="/foundation">
          Фундаменты
        </router-link>
      </div>
      <div
        class="menu__item"
        @click="close"
      >
        <router-link to="/services">
          Услуги
        </router-link>
      </div>
      <div
        class="menu__item"
        @click="close"
      >
        <router-link to="/about">
          О нас
        </router-link>
      </div>
      <div
        class="menu__item"
        @click="close"
      >
        <router-link to="/reviews">
          Отзывы
        </router-link>
      </div>
      <div
        class="menu__item"
        @click="close"
      >
        <router-link to="/contacts">
          Контакты
        </router-link>
      </div>
      <button class="order_button">
        Заказать звонок
      </button>
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
  align-items: flex-start;
  justify-content: space-between;
  width: 300px;
  min-height: 100vh;
  background: #465162;
  padding: 10px;
}

.menu__header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
}
.menu__item{
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
  text-decoration-color: white;
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

</style>

<template>
  <div class="menu">
    <div class="menu__wrapper">
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
      <div
        class="menu__item"
        @click="showProjectDropdown"
      >
        <div>
          Проекты
        </div>
        <div v-if="isShowProjectDropdown">
          <div @click="close">
            <router-link
              to="/houses"
            >
              Каталог домов
            </router-link>
          </div>
          <div @click="close">
            <router-link
              to="/baths"
            >
              Каталог бань
            </router-link>
          </div>
        </div>
      </div>
      <div
        class="menu__item"
        @click="showBuildDropdown"
      >
        <div>
          Строительство
        </div>
        <div v-if="isShowBuildDropdown">
          <div @click="close">
            <router-link to="/designing">
              Строительстов домов под ключ
            </router-link>
          </div>
          <div @click="close">
            <router-link to="/services">
              Строительство бань
            </router-link>
          </div>
          <div @click="close">
            <router-link to="/services">
              Строительство фундаментов
            </router-link>
          </div>
        </div>
      </div>
      <div
        class="menu__item"
        @click="showServiceDropdown"
      >
        <div>
          Услуги
        </div>
        <div v-if="isShowServiceDropdown">
          <div @click="close">
            <router-link to="/designing">
              Индивидуальное проектирование
            </router-link>
          </div>
          <div @click="close">
            <router-link to="/services">
              Строительство ограждений
            </router-link>
          </div>
          <div @click="close">
            <router-link to="/services">
              Канализация и водоснабжение
            </router-link>
          </div>
          <div @click="close">
            <router-link to="/services">
              Ландшафтное проектирование
            </router-link>
          </div>
          <div @click="close">
            <router-link to="/services">
              Умный дом
            </router-link>
          </div>
        </div>
      </div>
      <div
        class="menu__item"
        @click="close"
      >
        <router-link to="/portfolio">
          Наши работы
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
        <router-link to="/contacts">
          Контакты
        </router-link>
      </div>
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
  data: () => ({
    isShowServiceDropdown: false,
    isShowBuildDropdown: false,
    isShowProjectDropdown: false,
  }),

  methods: {
    close() {
      this.$emit('close');
    },

    showServiceDropdown() {
      this.isShowServiceDropdown = !this.isShowServiceDropdown;
    },
    showBuildDropdown() {
      this.isShowBuildDropdown = !this.isShowBuildDropdown;
    },
    showProjectDropdown() {
      this.isShowProjectDropdown = !this.isShowProjectDropdown;
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

</style>

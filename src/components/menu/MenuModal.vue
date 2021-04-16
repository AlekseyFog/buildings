<template>
  <div class="menu">
    <div
      class="menu__wrapper"
    >
      <div class="menu__header">
        <div class="menu__item">
          Главная
        </div>
        <CloseButton
          class="close-button"
          @click="close"
        />
      </div>
      <div class="menu__item">
        Дома
      </div>
      <div class="menu__item">
        Бани
      </div>
      <div class="menu__item">
        Фундаменты
      </div>
      <div class="menu__item">
        Услуги
      </div>
      <div class="menu__item">
        О нас
      </div>
      <div class="menu__item">
        Отзывы
      </div>
      <div class="menu__item">
        Контакты
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
  align-items: center;
  justify-content: space-around;
  width: 300px;
  min-height: 100vh;
  background: #465162;
}

.menu__header{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
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
</style>

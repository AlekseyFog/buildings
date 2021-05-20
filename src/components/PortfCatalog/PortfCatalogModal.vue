<template>
  <div class="callmodal">
    <CloseButton
      class="close-button"
      @click="close_form"
    />
    <div class="callmodal__header">
      <h3 class="callmodal__header">
        {{ options.title }}
      </h3>
    </div>
    <div class="callmodal__main">
      <div class="slide__wrap">
        <agile>
          <div class="slide">
            <img :src="options.imageMain" />
          </div>
          <div class="slide">
            <img :src="options.image1" />
          </div>
          <div class="slide">
            <img :src="options.image2" />
          </div>
          <div class="slide">
            <img :src="options.image3" />
          </div>
        </agile>
      </div>
      <div class="callmodal__about_wrapper">
        <div class="callmodal__about_options">
          <ul>
            <li>Общая площадь: {{ options.meters }}</li>
            <li>Жилая площадь: {{ options.metersLive }}</li>
            <li>Размеры дома: {{ options.size }}</li>
            <li>Количество комнат: {{ options.rooms }}</li>
            <li>Количество спален: {{ options.liveRooms }}</li>
            <li>Отделка: {{ options.otdelka }}</li>
          </ul>
        </div>
        <div class="callmodal__about_text">
          {{ options.description }}
        </div>
      </div>
    </div>
    <div class="callmodal__form">
      формочка
    </div>
  </div>
</template>

<script>
import CloseButton from '@/assets/svg/close.svg';
import { VueAgile } from 'vue-agile';

export default {

  name: 'PortfCatalogModal',
  components: {
    CloseButton,
    agile: VueAgile,
  },
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
    revert: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close_form() {
      this.$emit('close-modal');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";

.close-button {
  position: absolute;
  right: 30px;
  top: 30px;
  z-index: 100;
  font-size: 20px;
  width: 50px;
  height: 50px;
  background: none;
  border: none;
}

.callmodal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  height: 530px;
  background: #f9f9f9;
  padding: 30px;
  box-shadow: 0 0 2px #f9f9f9;
  z-index: 999;
  overflow: scroll;
}

.body {
  position:fixed;
  overflow-y: scroll;
}

.callmodal__header {
  width: 100%;
  font-family: 'Raleway', sans-serif;
  font-size: 30px;
  margin-bottom: 20px;
}

.callmodal__main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img {
  width: 100%;
  height: 100%;
}
.callmodal__about_wrapper {
  width: 100%;
  padding: 30px 30px 30px 50px;
}
.slide__wrap {
  width: 100%;
}
@media (min-width: 768px) {
  .callmodal__header{
   margin-bottom: 40px;
  }

  .callmodal__main{
    flex-direction: row;
  }

  .callmodal__about_wrapper {
    width: 50%;
  }
  .slide__wrap {
    width: 50%;
  }
}
</style>

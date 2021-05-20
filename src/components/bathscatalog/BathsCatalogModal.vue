<template>
  <div class="callmodal__wrapper">
    <div class="callmodal">
      <h3 class="callmodal__header">
        {{ options.title }}
      </h3>
      <CloseButton
        class="close-button"
        @click="close_form"
      />
      <div class="callmodal__images">
        <img :src="options.image1"/>
        <img :src="options.image2"/>
        <img :src="options.image3"/>
        <img :src="options.image4"/>
      </div>
    </div>
  </div>
</template>

<script>
import CloseButton from '@/assets/svg/close.svg';

export default {
  name: 'BathsCatalogModal',
  components: {
    CloseButton,
  },
  metaInfo: () => ({
    title: this.options.title,
  }),
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

<style scoped>
.callmodal__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
}

.callmodal {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 600px;
  background: #465162;
  padding: 30px;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0 0 2px #f9f9f9;
}

.callmodal__header {
  color: #f9f9f9;
  font-family: 'Raleway', sans-serif;
  font-size: 30px;
  align-self: center;
  justify-self: center;
}

label {
  font-family: 'Raleway', sans-serif;
}

.callmodal__form {
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.callmodal__form_item {
  height: 30px;
  width: 200px;
  border-radius: 5px;
  padding: 5px;
  border: none;
  margin-bottom: 30px;
  margin-top: 5px;
  font-family: 'Raleway', sans-serif;
}

.callmodal__form_button {
  width: 200px;
  height: 50px;
  display: flex;
  background: #f09236;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 3px #f9f9f9;
  margin-top: 20px;
  font-family: 'Raleway', sans-serif;
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

.callmodal__images {
  padding: 20px;
  height: 400px;
  overflow-y: auto;
  margin-top: 20px;
}
.callmodal__images img {
  display: block;
  width: 100%;
  border-radius: 20px;
}
.callmodal__images img:not(:last-child) {
  margin-bottom: 10px;
}

@media (min-width: 576px) {
  .callmodal {
    width: 500px;
    height: 400px;
  }
}
</style>

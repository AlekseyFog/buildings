<template>
  <div class="callmodal__wrapper">
    <div class="callmodal">
      <h3 class="callmodal__header">Оставить заявку</h3>
      <CloseButton
        class="close-button"
        @click="close_form"
      />
      <form class="callmodal__form">
        <label for="form__name">Ваше имя</label>
        <input
          id="form__name"
          class="callmodal__form_item"
          type="text"
          placeholder="Имя"
        />
        <label for="form__phone">Телефон</label>
        <input
          id="form__phone"
          class="callmodal__form_item"
          type="tel"
          placeholder="Телефон"
        />
        <!--        <label for="form__text">Комментарий</label>-->
        <!--        <textarea class="form-control" id="form__text" type="text" placeholder="Комментарий">-->
        <input
          class="callmodal__form_button"
          type="submit"
          value="Отправить!"
        />
      </form>
    </div>
  </div>
</template>

<script>
import CloseButton from '@/assets/svg/close.svg';

export default {
  name: 'CallModal',
  components: {
    CloseButton,
  },

  methods: {
    close_form() {
      this.$emit('close_form');
    },
  },
};
</script>

<style scoped>
.callmodal__wrapper {
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

.callmodal {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 400px;
  background: #465162;
  padding: 15px;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0 0 2px #f9f9f9;
}

.callmodal__header{
  color: #f9f9f9;
  font-family: 'Raleway', sans-serif;
  font-size: 30px;
  align-self: center;
  justify-self: center;
}

label{
  font-family: 'Raleway', sans-serif;
}

.callmodal__form{
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.callmodal__form_item{
  height: 30px;
  width: 200px;
  border-radius: 5px;
  padding: 5px;
  border: none;
  margin-bottom: 30px;
  margin-top: 5px;
  font-family: 'Raleway', sans-serif;
}

.callmodal__form_button{
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
@media (min-width: 576px) {
  .callmodal{
    width: 500px;
    height: 400px;
  }
}
</style>

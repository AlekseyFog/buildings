<template>
  <div class="form__wrapper">
    <form class="about__main__form">
      <div class="form__header">
        Заказать обратный звонок
      </div>
      <input
        class="form__input"
        type="text"
        placeholder="Ваше имя"
      />
      <input
        class="form__input"
        type="tel"
        placeholder="Телефон"
      />
      <input
        class="form__input"
        type="email"
        placeholder="Email"
      />
      <textarea
        class="input__wide"
        type="text"
        placeholder="Сообщение"
      />
      <input
        type="submit"
        class="form__submit"
        value="Отправить"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: 'CallModal',
};
</script>

<style scoped>
.about__main__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  background: #f9f9f9;
  height: 100%;
  z-index: 2;
  border-radius: 5px;
}
.form__header {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
}
.form__input {
  width: 100%;
  height: 30px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
}
.input__wide {
  width: 100%;
  height: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
}
.form__submit {
  display: block;
  background: #F09236;
  font-size: 13px;
  color: #1E3053;
  width: 130px;
  height: 40px;
  border-radius: 5px;
  border: none;
  padding: 3px;
  margin-top: 15px;
  transition: all 0.5s ease;
}
@media (min-width: 768px) {
  .about__main__form {
    width: 35%;
    margin-left: auto;
    margin-right: 10px;
    margin-top: -70px;
    padding: 20px 30px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
  }
  .form__header {
    color: #E1704B;
    font-size: 25px;
  }
  .form__submit:hover {
    color: #F09236;
    background: #000000;
    transition: all 0.5s ease;
  }
}
</style>

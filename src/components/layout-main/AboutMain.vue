<template>
  <div class="about__main">
    <div class="about__main_content">
      <div class="about__main__header">
        <h3>
          СтройЭлит
        </h3>
        <span>О компании</span>
      </div>
      <p class="about__main__text">
        Наша компания – это штат специалистов с более чем 15 летним стажем работы в сфере строительства загородных
        домов. Мы гарантируем качественное воплощение Ваших идей и предпочтений.
      </p>
      <button class="about__main__button">
        Читать далее
      </button>
    </div>
    <form class="about__main__form">
      <div class="form__header">
        Оставить заявку
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
  name: 'AboutMain',
};
</script>

<style scoped>
.about__main {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .about__main {
    flex-direction: row;
    justify-content: space-between;
  }
  .about__main_content {
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 100px;
  }
  .about__main__header {
    font-size: 40px;
    margin-bottom: 30px;
  }
  span {
    color: #1E3053;
    font-size: 30px;
  }
  .about__main__text {
    color: #868686;
    font-size: 15px;
  }
  .about__main__button{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1E3053;
    color: #ffffff;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    padding: 5px;
    border: none;
    transition: all 0.5s ease;
    margin: 30px auto;
  }
  .about__main__button:hover{
    width: 203px;
    height: 53px;
    color: #F09236;
    transition: all 0.5s ease;
  }

  .about__main__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35%;
    margin-left: auto;
    margin-right: 10px;
    margin-top: -70px;
    padding: 20px 30px;
    background: #f9f9f9;
    height: 100%;
    z-index: 2;
    border-radius: 5px;
  }
  .form__header{
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .form__input{
    width: 100%;
    height: 30px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
  }
  .input__wide{
    width: 100%;
    height: 100px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
  }
  .form__submit{
    display: block;
    background: #F09236;
    font-size: 13px;
    color:  #1E3053;
    width: 130px;
    height: 40px;
    border-radius: 5px;
    border: none;
    padding: 3px;
    margin-top: 15px;
    transition: all 0.5s ease;
  }
  .form__submit:hover{
    color: #F09236;
    background: #000000;
    transition: all 0.5s ease;
  }
}
</style>

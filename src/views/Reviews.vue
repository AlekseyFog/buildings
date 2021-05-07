<template>
  <div class="container">
    <div class="row mb-5 mt-3">
      <div class="reviews__header col-12">
        Отзывы клиентов
      </div>
    </div>
    <div class="row mb-5 mt-3">
      <div class="reviews__item col-12">
        <h3 class="reviews__item_name mb-3">
          Алексей Туманов
        </h3>
        <p class="reviews__item_text">
          Очень хорошая строительная фирма! Сам открывал, знаю, о чем говорю! Sample text Sample text Sample text Sample
          text Sample text Sample text Sample text Sample textSample text Sample text Sample text Sample textSample text
          Sample text Sample text Sample textSample text Sample text Sample text Sample textSample text Sample text
          Sample text Sample textSample text Sample text Sample text Sample textSample text Sample text Sample text
          Sample textSample text Sample text Sample text Sample textSample text Sample text Sample text Sample
          textSample text Sample text Sample text Sample textSample text Sample text Sample text Sample text
        </p>
      </div>
    </div>
    <div class="row mb-5 mt-3">
      <div class="reviews__item col-12">
        <h3 class="reviews__item_name mb-3">
          Алексей Туманов
        </h3>
        <p class="reviews__item_text">
          Очень хорошая строительная фирма! Сам открывал, знаю, о чем говорю!
        </p>
      </div>
    </div>
    <div class="row mb-5 mt-3">
      <div class="reviews__item col-12">
        <h3 class="reviews__item_name mb-3">
          Алексей Туманов
        </h3>
        <p class="reviews__item_text">
          Очень хорошая строительная фирма! Сам открывал, знаю, о чем говорю!
        </p>
      </div>
    </div>
    <div class="row mb-5 mt-3">
      <div class="col-12">
        <button class="reviews__button_submit">
          Оставить отзыв
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Baths',
};
</script>

<style lang="scss" scoped>
.reviews__header {
  font-size: 30px;
  padding: 10px;
}

.reviews__item {
  width: 100%;
  background: #f9f9f9;
  padding: 20px;
  box-shadow: 0 0 2px #465162;
  border-radius: 5px;
  &:hover{
    box-shadow: 0 0 5px #465162;
  }
}

.reviews__item_text{
  color: #465162;
  font-family: 'Raleway', sans-serif;
}

.reviews__button_submit {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: 0 0 5px #465162;
  border-radius: 10px;
  color: #000000;
  bottom: 10px;
  right: 25%;
  padding: 15px;
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
  width: 250px;
  height: 60px;
  transition: .6s;
  margin: auto;

  &:focus {
    outline: 0;
  }

  &:before {
    content: '';
    display: flex;
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    width: 60px;
    height: 100%;
    left: 0;
    top: 0;
    opacity: .5;
    filter: blur(30px);
    transform: translateX(-100px) skewX(-15deg);
  }

  &:after {
    content: '';
    display: flex;
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    width: 30px;
    height: 100%;
    left: 30px;
    top: 0;
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100px) skewX(-15deg);
  }

  &:hover {
    background: #D24534;
    cursor: pointer;

    &:before {
      transform: translateX(300px) skewX(-15deg);
      opacity: 0.6;
      transition: .7s;
    }

    &:after {
      transform: translateX(300px) skewX(-15deg);
      opacity: 1;
      transition: .7s;
    }
  }
}

</style>

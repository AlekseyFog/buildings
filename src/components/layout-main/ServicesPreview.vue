<template>
  <div class="services">
    <div class="services__header">
      Услуги
    </div>
    <div class="services__text">
      <p>
        Мы предлагаем полный спектр услуг для Вашего дома, начиная от
        проектирования,
        и заканчивая отделкой внутренних помещений (ВПОЛНЕ ВЕРОЯТНО ЧТО СЮДА НАДО НАКИДАТЬ ФОТОК)
      </p>
    </div>
    <button class="services__button-more">
      Подробнее...
    </button>
  </div>
</template>

<script>
export default {
  name: 'ServicesPreview',
};
</script>

<style scoped>
.services {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #f9f9f9;
}

.services__header {
  color: #E1704B;
  font-size: 35px;
  font-weight: bold;
  margin: 10px auto 20px;
}

.services__text {
  padding: 20px;
}

.services__button-more {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  border-radius: 15px;
  padding: 15px;
  background: none;
  width: 200px;
  margin-left: auto;
  margin-right: 60px;
}

.services__text_p{
  margin-bottom: 40px;
}

@media (min-width: 768px) {
  .services__text {
    padding: 40px;
  }
}

</style>

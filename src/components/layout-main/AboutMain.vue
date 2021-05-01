<template>
  <div class="about__main">
    <div class="about__main__header">
      <h3>О компании</h3>
    </div>
    <div class="about__main_content">
      <p class="about__main__text">
        СтройЭлит – это штат специалистов с более чем 10 летним стажем работы в сфере строительства загородных
        домов. Наша компания строит дома из следующих материалов: кирпича,
        клееного и профилированного бруса, газобетона. Кроме того, имеем большой опыт в сфере сборки каркасных домов. В
        строительстве используем проверенные временем и климатом стройматериалы, а
        также
        постоянно изучаем и
        внедряем новые технологии возведения жилья.
      </p>
      <button class="about__main__button">
        Узнать больше
      </button>
    </div>
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
  padding: 20px;
  border-bottom: 1px solid #f9f9f9;
  box-shadow: 0 15px 15px #f9f9f9;
}

.about__main__header {
  color: #E1704B;
  font-size: 25px;
  margin: 10px auto 30px;
}

.about__main_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.about__main__text {
  width: 100%;
  font-size: 10px;
}

.about__main__button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #E1704B;
  border: 0.2px solid #f9f9f9;
  border-radius: 10px;
  color: #f9f9f9;
  transition: all 0.5s ease;
  margin: 30px auto;
  padding: 10px 20px;
  font-size: 15px;
  box-shadow: -1px 1px 5px gray;
}

@media (min-width: 768px) {
  .about__main {
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 100px;
  }

  .about__main__header {
    font-size: 30px;
  }

  .about__main_content {
    flex-direction: column;
  }

  .about__main__text {
    font-size: 18px;
    width: 50%;
    align-self: flex-start;
  }

  .about__main__button {
    font-size: 25px;
    transition: all 0.5s ease;
  }

  .about__main__button:hover {
    font-size: 26px;
    transition: all 0.5s ease;
  }
}
</style>

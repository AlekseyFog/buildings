<template>
  <div class="about">
    <div class="container">
      <div class="about__main row">
        <div class="col-12">
          <p class="about__main__text">
            ДомЛэнд – это штат специалистов с 15 летним стажем работы в сфере строительства загородных
            домов
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <router-link
            to="/about"
            class="about__main__button"
          >
            Узнать больше...
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMain',
};
</script>

<style lang="scss" scoped>
.about {
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-bottom: 0.1px solid #722311;
  box-shadow: 0 0 5px #722311;
  background: #f9f9f9;
}

.about__main {
  display: flex;
  align-items: center;
  justify-content: center;
}

.about__main__text {
  width: 100%;
  font-size: 10px;
  font-family: 'Raleway', sans-serif;
}

.about__main__button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #722311;
  border: none;
  height: 60px;
  border-radius: 15px;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Raleway', sans-serif;
  color: #f9f9f9;
  margin: 50px auto 0;
  transition: .5s;
  width: 220px;

  &:hover {
    cursor: pointer;
    font-size: 22px;
    transition: .5s;
  }
}

@media (min-width: 768px) {
  .about__main {
    padding: 35px;
  }

  .about__main__text {
    font-size: 30px;
    color: #722311;
    font-weight: bold;
  }
}
</style>

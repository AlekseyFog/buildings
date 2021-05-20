<template>
  <div class="container mt-5">
    <div class="row">
      <div class="services__header">
        Услуги
      </div>
    </div>
    <div class="row">
      <div class="col-12 services__text">
        <p>
          Мы предлагаем полный спектр услуг для Вашего дома, начиная от
          проектирования,
          и заканчивая отделкой внутренних помещений:
        </p>
      </div>
    </div>
    <div class="row mb-5">
      <router-link
        to="/borders"
        class="card col-12 col-md-4"
      >
        <div>
          <div class="icon">
            <Border class="svg" />
          </div>
          <h3>Строительство ограждений</h3>
        </div>
      </router-link>
      <router-link
        to="/water"
        class="card col-12 col-md-4"
      >
        <div>
          <div class="icon">
            <Water class="svg" />
          </div>
          <h3>Водоснабжение и канализация</h3>
        </div>
      </router-link>
      <router-link
        to="/landscape"
        class="card col-12 col-md-4"
      >
        <div>
          <div class="icon">
            <Tree class="svg" />
          </div>
          <h3>Ландшафтное проектирование</h3>
        </div>
      </router-link>
      <router-link
        to="/smarthouse"
        class="card col-12 col-md-4"
      >
        <div>
          <div class="icon">
            <Smart class="svg" />
          </div>
          <h3>Умный дом</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Water from '@/assets/svg/water.svg';
import Border from '@/assets/svg/border.svg';
import Tree from '@/assets/svg/tree.svg';
import Smart from '@/assets/svg/smart.svg';

export default {
  name: 'ServicesPreview',
  components: {
    Water,
    Border,
    Tree,
    Smart,
  },
};
</script>

<style scoped>
.card {
  background: #f9f9f9;
  box-shadow: 1px 1px 3px #722311;
  border-radius: 5px;
  max-width: 220px;
  min-width: 220px;
  max-height: 300px;
  min-height: 300px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  transition: 0.5s;
}

.card:hover {
  background: #F5B93D;
  transition: 0.5s;
}
.icon{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.icon svg {
  width: 150px;
  height: 150px;
  margin: auto;
}

.svg {
  margin: auto;
  width: 150px;
  height: 150px;
}

h3 {
  text-align: center;
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
}

.services__header {
  color: #722311;
  font-size: 35px;
  font-weight: bold;
  margin: 10px auto 20px;
}

.services__text {
  padding: 20px;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 20px;
}

@media (min-width: 768px) {
  .services__text {
    padding: 40px;
  }
}

</style>

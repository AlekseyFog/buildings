<template>
  <div class="splash">
    <div class="splash__wrap">
      <p class="splash__text">
        Строительство загородных домов под ключ в Санкт-Петербурге
      </p>
      <div class="splash__button">
        Посмотреть проекты
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Splash',
};
</script>

<style scoped>

.splash {
  display: block;
  width: 100%;
  height: 350px;
  background: url("~@/assets/svg/background.jpeg") no-repeat;
  background-size: cover;
}

.splash__wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255,255,255,1), rgba(255,255,255,0.6), rgba(255,255,255,0));
  padding: 20px;
}

.splash__text {
  font-size: 25px;
  color: #101010;
}
.splash__button{
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 110px;
  background: #F09236;
  color: #1E3053;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  padding: 5px;
  border: none;
  transition: all 0.5s ease;
}
.splash__button:hover{
  width: 210px;
  height: 60px;
  color: #101010;
  transition: all 0.5s ease;
}

@media (min-width: 576px) {
  .splash{
    height: 400px;
  }
  .splash__wrap{
    padding: 70px 40% 50px 70px;
  }
.splash__text{
  font-size: 35px;
  color: #1E3053;
}
.splash__button{
  bottom: 50px;
  left: 100px;
}
}

</style>

<template>
  <div class="splash">
    <div class="splash__wrap">
      <p class="splash__text">
        Строительство загородных домов под ключ в Санкт-Петербурге
      </p>
      <router-link to="/partners">
        <div class="splash__button">
          Выбрать проект
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Splash',
};
</script>

<style lang="scss" scoped>

.splash {
  display: block;
  width: 100%;
  height: 350px;
  background: url("~@/assets/svg/backgroundv1.jpeg") no-repeat;
  background-size: cover;
  z-index: 20;
}

.splash__wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
}

.splash__text {
  margin-top: 30px;
  font-family: 'Raleway', sans-serif;
  font-size: 30px;
  color: #f9f9f9;
}

.splash__button {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #722311;
  border-radius: 10px;
  color: #f9f9f9;
  background: rgba(114, 35, 17, 0.7);
  bottom: 10px;
  right: 25%;
  padding: 15px;
  font-size: 20px;
  width: 250px;
  height: 60px;
  transition: .6s;
  overflow: hidden;

  &:focus {
    outline: 0;
  }

  &:before {
    content: '';
    display: block;
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
    display: block;
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
    background: #722311;
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

@media (min-width: 576px) {
  .splash {
    height: 450px;
  }

  .splash__wrap {
    padding: 70px 40% 50px 70px;
  }

  .splash__button {
    right: 100px;
    bottom: 50px;
    font-size: 16px;
    transition: all 0.5s ease;
  }
  .splash__text {
    margin: 0;
    font-size: 38px;
  }
}

</style>

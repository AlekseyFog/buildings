<template>
  <div class="splash">
    <div class="splash__wrap">
      <p class="splash__text">
        Строительство загородных домов под ключ в Санкт-Петербурге
      </p>
      <div class="splash__button">
        Посмотреть проекты
      </div>
      <img
        class="ricardo"
        src="~@/assets/svg/ricardo.gif"
        width="10"
        height="10"
      />
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
  background: url("~@/assets/svg/backgroundv1.jpeg") no-repeat;
  background-size: cover;
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
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  color: #f9f9f9;
}

.splash__button {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.2px solid #f9f9f9;
  border-radius: 10px;
  color: #f9f9f9;
  background: rgba(240, 147, 54, 0.5);
  bottom: 10px;
  right: 25%;
  padding: 15px;
  font-size: 10px;
}

.ricardo {
  position: absolute;
  width: 10px;
  height: 10px;
  top: 45%;
  right: 20%;
}
@media (min-width: 375px) {
  .ricardo{
    right: 30%;
  }
}
@media (min-width: 400px) {
  .ricardo{
    right: 35%;
  }
}
@media (min-width: 427px) {
  .ricardo{
    right: 40%;
  }
}
@media (min-width: 471px) {
  .ricardo{
    right: 45%;
  }
}
@media (min-width: 507px) {
  .ricardo{
    right: 50%;
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
    bottom: 120px;
    font-size: 20px;
    transition: all 0.5s ease;
  }

  .splash__button:hover {
    font-size: 21px;
    background: rgba(240, 147, 54, 0.7);
    transition: all 0.5s ease;
  }

  .splash__text {
    margin: 0;
    font-size: 38px;
  }

  .splash__button {
    bottom: 50px;
    right: 100px;
  }

  .ricardo{
    right: 45%;
    top: 50%;
  }
  @media (min-width: 650px) {
    .ricardo{
      right: 50%;
    }
  }
  @media (min-width: 720px) {
    .ricardo{
      right: 55%;
    }
  }
  @media (min-width: 792px) {
    .ricardo{
      right: 60%;
    }
  }
  @media (min-width: 895px) {
    .ricardo{
      right: 63%;
    }
  }
  @media (min-width: 968px) {
    .ricardo{
      right: 66%;
    }
  }
  @media (min-width: 1065px) {
    .ricardo{
      right: 70%;
    }
  }
}

</style>

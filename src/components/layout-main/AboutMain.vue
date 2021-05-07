<template>
  <div class="about__main">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8">
          <p class="about__main__text">
            Мы – это штат специалистов с более чем 10 летним стажем работы в сфере строительства загородных
            домов.
          </p>
        </div>
        <div class="col-12 col-md-4">
          <button class="about__main__button">
            Читать еще
          </button>
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
.about__main {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-bottom: 1px solid #f9f9f9;
  box-shadow: 0 15px 15px #f9f9f9;
  background: #f9f9f9;
}

.about__main__text {
  width: 100%;
  font-size: 10px;
}

.about__main__button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f09236;
  border: 0.2px solid #f9f9f9;
  width: 200px;
  height: 60px;
  border-radius: 15px;
  padding: 15px;
  font-size: 12px;
  color: #f9f9f9;
  box-shadow: 0 0 1px #333;
  margin: 50px auto 0;
  transition: .7s;

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
    background: #D24534;
    cursor: pointer;
    transition: .7s;

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

@media (min-width: 768px) {
  .about__main {
    padding: 60px;
  }

  .about__main__text {
    font-size: 25px;
  }

  .about__main__button {
    font-size: 20px;
  }
}
</style>

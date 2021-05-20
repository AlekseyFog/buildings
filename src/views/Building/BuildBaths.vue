<template>
  <div class="baths">
    <div class="container-fluid">
      <div class="row mb-5 mt-3">
        <div class="house__splash">
          <div class="house__splash_wrap">
            <div class="about__header col-12">
              Строительство бань
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mb-5">
        <div class="col-12">
          <p class="paragraph">
            Наша компания осуществляет строительство бань под ключ, а также
            выполняет все виды работ связанных с банями и саунами, включая проектирование и устройство
            фундаментов, разработку дизайн-проектов, установку надёжных банных печей
          </p>
        </div>
      </div>
      <div class="row">
        <BathsCatalog />
      </div>
    </div>
    <div class="container">
      <div class="row mb-5">
        <div class="col-12">
          <div class="about__subtitle">
            Типы бань
          </div>
        </div>
        <div class="col-12">
          <p class="paragraph">
            Строим бани и сауны по русской, финской, турецкой технологии и по имеющимся в коллекции типовым
            проектам, отличающимся по размерам, уровню комплектации и ценам.
          </p>
          <p class="paragraph">
            Мы реализуем свои проекты только с использованием наиболее надежных и отлично зарекомендовавших себя
            решений:
          </p>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12 mb-1">
          <Brick class="icon" />
          <h3 class="icon__head">
            Древесины бруса, бревна
          </h3>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12 mb-1">
          <Brick class="icon" />
          <h3 class="icon__head">
            Камня обожжённого, кирпича, пеноблоков, газоблоков
          </h3>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12 mb-1">
          <Brick class="icon" />
          <h3 class="icon__head">
            Каркасно-щитовой комплектации
          </h3>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 bath-form">
          <Form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form';
import Brick from '@/assets/svg/brick.svg';
import BathsCatalog from '@/views/catalogs/BathsCatalog';

export default {
  name: 'Baths',
  components: {
    Form,
    Brick,
    BathsCatalog,
  },
};
</script>

<style scoped>

.house__splash {
  display: block;
  width: 100%;
  height: 400px;
  background: url("~@/assets/svg/background-bath.jpeg") no-repeat;
  background-size: cover;
  z-index: 2;
}

.house__splash_wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
}

.about__header {
  font-size: 40px;
  padding: 10px;
  color: #f9f9f9;
  font-family: 'Raleway', sans-serif;
}

.about__subtitle {
  font-size: 30px;
  padding: 10px;
  color: #E1704B;
}

.paragraph {
  font-family: 'Raleway', sans-serif;
  font-size: 17px;
}

.icon {
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.icon__head {
  margin-left: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.bath-form {
  background: #E8F4F2 url("~@/assets/svg/bath-form-background.jpeg") 0 0 repeat !important;
}

</style>

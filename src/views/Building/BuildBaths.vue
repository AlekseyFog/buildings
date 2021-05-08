<template>
  <div class="container">
    <div class="row mb-5 mt-3">
      <div class="about__header col-12">
        Строительство бань
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12">
        <p class="paragraph">
          Наша компания осуществляет строительство бань под ключ, а также
          выполняет все виды работ связанных с банями и саунами, включая проектирование и устройство
          фундаментов, разработку дизайн-проектов, установку надёжных банных печей
        </p>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12">
        <div class="about__header">
          Типы бань
        </div>
      </div>
      <div class="col-12">
        <p class="paragraph">
          Строим бани и сауны по русской, финской, турецкой технологии и по имеющимся в коллекции типовым
          проектам, отличающимся по размерам, уровню комплектации и ценам.
        </p>
        <p class="paragraph">
          Мы реализуем свои проекты только с использованием наиболее надежных и отлично зарекомендовавших себя решений:
        </p>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12 mb-1">
        <div class="icon">
          1
        </div>
        <h3 class="icon__head">
          Древесины бруса, бревна
        </h3>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12 mb-1">
        <div class="icon">
          1
        </div>
        <h3 class="icon__head">
          Камня обожжённого, кирпича, пеноблоков, газоблоков
        </h3>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12 mb-1">
        <div class="icon">
          1
        </div>
        <h3 class="icon__head">
          Каркасно-щитовой комплектации
        </h3>
      </div>
    </div>
    <Form/>
  </div>
</template>

<script>
import Form from '@/components/Form';

export default {
  name: 'Baths',
  components: { Form },
};
</script>

<style scoped>
.about__header {
  font-size: 30px;
  padding: 10px;
}

.about__subtitle {
  font-size: 23px;
  color: #E1704B;
}

.paragraph {
  font-family: 'Raleway', sans-serif;
  font-size: 17px;
}

.subparagraph {
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  color: #465162;
  padding: 20px 10px;
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #f09236;
  border-radius: 50%;
  width: 30px;
  height: 30px;
}

.icon__head {
  margin-left: 10px;
  display: inline-flex;
}

</style>

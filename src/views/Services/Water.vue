<template>
  <div class="borders">
    <div class="container">
      <div class="row mb-5 mt-3">
        <div class="about__header col-12">
          Строительство объектов водоснабжения, водоотведения, канализации и отопления
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12">
          <p class="paragraph">
            В перечень услуг компании ДомЛэнд входит строительство объектов водоснабжения и водоотведения. Работы
            начинаются со стадии проектирования, завершаются монтажом и, по желанию клиента, заключением договора на
            дальнейшее обслуживание.
          </p>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12 col-md-6 col-lg-4">
          <img :src="'/water/1.jpg'"/>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <img :src="'/water/2.jpg'"/>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <img :src="'/water/3.jpg'"/>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12 mb-1">
          <p class="paragraph">
            Цены на заборы и ворота определяются индивидуально. Если у вас возникли вопросы, оставьте заявку на звонок,
            наш специалист свяжется с Вами и даст подробную консультацию
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Water',
};
</script>

<style scoped>

.about__header {
  font-size: 40px;
  padding: 10px;
  font-family: 'Raleway', sans-serif;
}
img{
  width: 100%;
  height: 100%;
}

.paragraph {
  font-family: 'Raleway', sans-serif;
  font-size: 17px;
}

</style>

<template>
  <div class="borders">
    <div class="container-fluid">
      <div class="row mb-5 mt-3">
        <div class="house__splash">
          <div class="house__splash_wrap">
            <div class="about__header col-12">
              Строительство ограждений
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mb-5">
        <div class="col-12">
          <p class="paragraph">
            Для защиты собственности и огораживания определенного участка устанавливаются заборы, ограждения и ворота.
            Их
            широко применяют для изоляции промышленных учреждений, мест особого назначения, загородных участков, складов
            и
            так далее. Главные функции заборов и ограждений – защита от шума и пыли. Однако современный забор для дачи
            или
            коттеджа должен не только ограждать территорию, но и дополнять интерьер ландшафтного дизайна, быть частью
            оформления
          </p>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12 col-md-6 col-lg-4">
          <img :src="'/border/1.jpg'"/>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <img :src="'/border/2.jpeg'"/>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <img :src="'/border/3.jpeg'"/>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12">
          <p class="paragraph">
            При выборе забора необходимо учитывать материалы изготовления, а также тип ограждения и его назначение.
            Важно
            обратить внимание на прочность конструкции и наличие антикоррозийного покрытия. Вы должны помнить, что стиль
            забора должен сочетаться со стилем дома
          </p>
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
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <Form class="bath-form" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form';

export default {
  name: 'Borders',
  components: { Form },
};
</script>

<style scoped>
.house__splash {
  display: block;
  width: 100%;
  height: 400px;
  background: url("~@/assets/svg/border-background.jpeg") no-repeat;
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

.paragraph {
  font-family: 'Raleway', sans-serif;
  font-size: 17px;
}
img{
  width: 100%;
  height: 100%;
}
.bath-form{
  background: #E8F4F2 url("~@/assets/svg/border-form-background.jpeg") 0 0 repeat;
}

</style>

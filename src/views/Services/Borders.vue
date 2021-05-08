<template>
  <div class="container">
    <div class="row mb-5 mt-3">
      <div class="about__header col-12">
        Строительство ограждений
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12">
        <p class="paragraph">
          Для защиты собственности и огораживания определенного участка устанавливаются заборы, ограждения и ворота. Их
          широко применяют для изоляции промышленных учреждений, мест особого назначения, загородных участков, складов и
          так далее. Главные функции заборов и ограждений – защита от шума и пыли. Однако современный забор для дачи или
          коттеджа должен не только ограждать территорию, но и дополнять интерьер ландшафтного дизайна, быть частью
          оформления
        </p>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12">
        <div class="about__header">
          Типы заборов
        </div>
      </div>
      <div class="col-12">
        <p class="paragraph">
          При выборе забора необходимо учитывать материалы изготовления, а также тип ограждения и его назначение. Важно
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

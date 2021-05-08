<template>
  <div class="container">
    <div class="row mb-5 mt-3">
      <div class="about__header col-12">
        Ландшафтное проектирование
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12">
        <p class="paragraph">
          Просто ухоженным и чистым участком сегодня уже никого не удивишь. Чтобы территория, окружающая ваш дом, стала
          действительно такой, какой вы хотите ее видеть, и продолжала радовать ваш взгляд на протяжении долгих лет,
          доверьте эти работы нашим специалистам. Вы не только не разочаруетесь в результате – он гарантированно
          превзойдет ваши ожидания
        </p>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12 about__subtitle">
        Какие работы входят в услуги?
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12">
        <p class="paragraph">
          Наши специалисты готовы выполнить для вас работы по ландшафтному дизайну всей или части территории участка в
          комплексе «под ключ», или вы можете заказать только те из них, что сочтете необходимыми:
        </p>
      </div>
    </div>
    <div class="row mb-2">
      <div class="col-12 mb-1">
        <div class="icon">
          1
        </div>
        <h3 class="icon__head">
          Планирование и функциональная разбивка участка
        </h3>
      </div>
    </div>
    <div class="row mb-2">
      <div class="col-12 mb-1">
        <div class="icon">
          2
        </div>
        <h3 class="icon__head">
          Подготовка территории – дренаж, изменение рельефа, завод грунта и пр.
        </h3>
      </div>
    </div>
    <div class="row mb-2">
      <div class="col-12 mb-1">
        <div class="icon">
          3
        </div>
        <h3 class="icon__head">
          Высадка кустов и деревьев, разбивка цветников.
        </h3>
      </div>
    </div>
    <div class="row mb-2">
      <div class="col-12 mb-1">
        <div class="icon">
          4
        </div>
        <h3 class="icon__head">
          Ландшафтное освещение
        </h3>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12 mb-1">
        <div class="icon">
          5
        </div>
        <h3 class="icon__head">
          Обустройство дорожек, площадок, изгородей, установка малых архитектурных форм.
        </h3>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12">
        <p class="paragraph">
          При наличии у Вас на руках уже готового ландшафтного проекта, мы сразу произведем детальный расчет
          стоимости, дадим рекомендации по возможной оптимизации и внесем необходимые корректировки – в рамках
          сотрудничества с нами данные работы будут бесплатными.
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
  components: {
    Form,
  },
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

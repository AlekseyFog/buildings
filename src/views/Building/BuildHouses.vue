<template>
  <div class="house">
    <div class="container-fluid">
      <div class="row mb-5 mt-3">
        <div class="house__splash">
          <div class="house__splash_wrap">
            <div class="about__header col-12">
              Индивидуальное проектирование
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mb-3">
        <div class="col-12">
          <p class="paragraph">
            Индивидуальное проектирование деревянных домов и коттеджей – творческий и увлекательный этап работы над
            жильем. На этой стадии задумки архитектора и заказчика обретают форму в виде электронного
            документа, формируется стиль строения, его планировка. Нам нужно только получить от Вас пожелания к будущему
            дому, а дальше дело за нами
          </p>
        </div>
      </div>
      <div class="row mb-5">
        <router-link
          to="/portfolio"
          class="to__portfolio"
        >
          Ознакомиться с примерами наших работ
        </router-link>
      </div>
      <div class="row mb-5">
        <div class="col-12 about__subtitle">
          Этапы разработки индивидуального проекта:
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12 mb-1">
          <div class="icon">
            1
          </div>
          <h3 class="icon__head">
            Выбор и адаптация участка, получение разрешения на строительство
          </h3>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-12 mb-1">
          <div class="icon">
            2
          </div>
          <h3 class="icon__head">
            Проектирование
          </h3>
        </div>
        <div class="col-12 subparagraph mb-3">
          На этом этапе наши специалисты помогут Вам определиться с материалами, из которых будет построен дом,
          планировкой,
          внешней и внутренней отделкой. Наш архитектор даст полезные советы и консультации по вашим задумкам, поможет
          избежать возможных трудностей на стадии подготовки к проектированию. Исходя из Ваших пожеланий и
          требований, мы создаем уникальный и неповторимый проект Вашего дома. Чем более точно и детально вы
          представляете Ваш будущий дом, тем лучше его сможет реализовать на бумаге наш коллектив.
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-12 mb-1">
          <div class="icon">
            3
          </div>
          <h3 class="icon__head">
            Создание эскизного и рабочего проектов
          </h3>
        </div>
        <div class="col-12 subparagraph mb-3">
          На данном этапе создается поэтажная планировка, рисуются фасады, делаются разрезы и визуализация дома. Каждый
          шаг согласовывается с Вами для более детального переноса представлений о будущем доме в проект.
          После этого детально прорабатываются все конструктивные узлы дома, подготавливаются рабочие планы фундаментов,
          стен, полов,
          перекрытий, кровельных конструкций. Создается спецификация оконных и дверных проемов. В результате нашей
          работы
          Вы получаете рабочий проект дома, согласно которому и будет проводиться строительство.
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-12 mb-1">
          <div class="icon">
            4
          </div>
          <h3 class="icon__head">
            Разработка инженерных систем и водоснабжения
          </h3>
        </div>
        <div class="col-12 subparagraph mb-3">
          Грамотно продуманные и спроектированные инженерные коммуникации позволят избежать дополнительных трат на их
          монтаж в уже построенном доме, а также снизят расходы на эксплуатацию будущего дома.

          На данном этапе проводится проектирование систем отопления, водоснабжения, канализации, вентиляции и
          разрабатывается схема электроснабжения дома.
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12 mb-1">
          <div class="icon">
            5
          </div>
          <h3 class="icon__head">
            Дизайн интерьера
          </h3>
        </div>
        <div class="col-12 subparagraph mb-3">
          Мы поможем вам определиться со стилистикой, подобрать цвета, будущие материалы отделки и расставить акценты
          согласно новым модным тенденциям или в соответствии с проверенным классическим стилем.
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12 mb-1">
          <div class="icon">
            6
          </div>
          <h3 class="icon__head">
            Ландшафтный дизайн и благоустройство
          </h3>
        </div>
        <div class="col-12 subparagraph mb-3">
          Мы осуществим ваши задумки и сделаем проект по ландшафтному дизайну уличного пространства.
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12">
          <p class="paragraph">
            При наличии у Вас на руках уже готового проекта, мы сразу произведем детальный расчет
            стоимости, дадим рекомендации по возможной оптимизации и внесем необходимые корректировки – в рамках
            сотрудничества с нами данные работы будут бесплатными.
          </p>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 form-wrapper">
          <Form />
        </div>
      </div>
    </div>
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
.house__splash {
  display: block;
  width: 100%;
  height: 400px;
  background: url("~@/assets/svg/background2.jpeg") no-repeat;
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
  font-size: 30px;
  padding: 10px;
  color: #f9f9f9;
  font-family: 'Raleway', sans-serif;
}

.about__subtitle {
  font-size: 23px;
  color: #722311;
}

.paragraph {
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: bold;
}

.subparagraph {
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  color: #465162;
  padding: 20px 10px;
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #f09236;
  color: #722311;
  border-radius: 50%;
  width: 30px;
  height: 30px;
}

.icon__head {
  font-family: 'Raleway', sans-serif;
  color: #722311;
  margin-left: 10px;
  display: inline-flex;
}

.form-wrapper {
  background: #f9f9f9;
}

.to__portfolio{
  font-size: 20px;
  color: #722311;
  font-weight: bold;
  font-family: 'Raleway', sans-serif;
  margin-left: auto;
  border-bottom: 1px solid #722311;
}
</style>

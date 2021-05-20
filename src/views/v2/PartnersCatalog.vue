<template>
  <div class="build">
    <div class="container">
      <div class="row">
        <div class="col-12 build__header mb-5">
          Проекты домов от наших партнеров
        </div>
      </div>
    </div>
    <div class="container-fluid mt-5">
      <div class="row">
        <div
          id="dmm_results"
          class="col-12"
        />
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 build__text">
          <div class="partners row">
            <p class="col-12">
              Мы сотрудничаем с лучшими проектными бюро Санкт-Петербурга, которые могут предоставить Вам огромный выбор
              готовых
              домов на любой вкус, а мы возмем на себя строительство дома Вашей мечты
            </p>
          </div>
          <div class="brown row mt-5">
            <p class="col-12">
              Также мы занимаемся индивидуальным проектированием домов любого размера и сложности, поможем реализовать
              Вам
              любые Ваши идеи и сделать Ваш дом полностью уникальным
            </p>
          </div>
          <div class="brown row">
            <p class="col-12 col-md-6">
              А если у Вас уже есть готовый проект - мы сразу произведем детальный расчет
              стоимости, дадим рекомендации по возможной оптимизации и внесем необходимые корректировки – в рамках
              сотрудничества с нами данные работы будут бесплатными.
            </p>
            <router-link
              to="/houses"
              class="col-12 col-md-6 about__main__button"
            >
              Подробнее
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
function dmm_init_connect() {
  // eslint-disable-next-line no-undef,no-unused-expressions
  typeof dmm_connect !== 'undefined' ? dmm_connect({
    apikey: '2b675efa46684086dcea62bef2191821',
    get_param: '0',
  }) : setTimeout(() => {
    dmm_init_connect();
  }, 200);
}

if (typeof (dmm_initJQ) === 'undefined') {
  const url = `${document.location.protocol}//domamo.ru/new_api/domamo-api.js`;
  const script = document.createElement('script');
  // eslint-disable-next-line no-unused-expressions,no-sequences
  script.setAttribute('src', url), document.getElementsByTagName('head')[0].appendChild(script), dmm_init_connect();
}

export default {
  name: 'PartnersCatalog',
};
</script>

<style scoped>
.build {
  font-family: 'Raleway', sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
}

.build__header {
  font-size: 30px;
  color: #722311;
  font-weight: bold;
}

p {
  font-size: 18px;
  margin-bottom: 15px;
}

.about__main__button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #722311;
  border: none;
  height: 60px;
  max-width: 150px;
  border-radius: 15px;
  padding: 20px;
  font-size: 17px;
  font-weight: bold;
  font-family: 'Raleway', sans-serif;
  color: #f9f9f9;
  margin: auto;
  transition: .5s;
}

.partners {
  font-size: 22px;
  font-weight: bold;
}
</style>

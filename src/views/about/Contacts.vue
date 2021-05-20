<template>
  <div class="container">
    <div class="row mb-5 mt-3">
      <div class="col-12 contacts__header">
        Контакты
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 contacts__text">
        <div class="contacts__text-phone mb-5">
          <h4>Телефон</h4>
          <p>+7(953)354-56-99</p>
        </div>
        <div class="contacts__text-mail mb-5">
          <h4>Email</h4>
          <p>alekseyfog22@gmail.com</p>
        </div>
        <div class="contacts__text-schedule mb-5">
          <h4>Режим работы</h4>
          <p>Ежедневно с 09:00 до 20:00</p>
        </div>
      </div>
      <!--      <div class="col-12 col-md-6 flex-column contacts__map">-->
      <!--        <div class="contacts__info_text-adress">-->
      <!--          196247, Санкт-Петербург, Новоизмайловский проспект, 21-->
      <!--        </div>-->
      <!--        <div class="contacts__map-place">-->
      <!--          Место для подключения карты с конкретным адресом-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Baths',
};
</script>

<style scoped>
.contacts__header {
  font-size: 30px;
  padding: 10px;
}
</style>

<template>
  <div class="services">
    <div class="services__header">
      Наши услуги
    </div>
    <div class="services__main row">
      <div class="services__main_item col-12 col-md-6">
        <div class="services__main_item-header">
          Услуга
        </div>
        <div class="services__main_item-text">
          Описание услуги
        </div>
      </div>
      <div class="services__main_item col-12 col-md-6">
        <div class="services__main_item-header">
          Услуга
        </div>
        <div class="services__main_item-text">
          Описание услуги
        </div>
      </div>
      <div class="services__main_item col-12 col-md-6">
        <div class="services__main_item-header">
          Услуга
        </div>
        <div class="services__main_item-text">
          Описание услуги
        </div>
      </div>
      <div class="services__main_item col-12 col-md-6">
        <div class="services__main_item-header">
          Услуга
        </div>
        <div class="services__main_item-text">
          Описание услуги
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesPreview',
};
</script>

<style scoped>
.services {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #f9f9f9;
}

.services__header{
  color: #E1704B;
  font-size: 35px;
  margin: 10px auto 30px;
}

.services__main{
  display: flex;
  align-items: center;
  justify-content: center;
}

.services__main_item {
  border-radius: 10px;
  margin: 10px;
  max-width: 300px;
}
.services__main_item:hover {
  color: #E1704B;
}
</style>

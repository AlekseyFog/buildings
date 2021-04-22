<template>
  <div class="advantages">
    <div class="advantages__header">
      Условия и преимущества работы с нами
    </div>
    <div class="advantages__main row">
      <div class="advantages__main_card col-12 col-md-6 col-lg-3">
        <div class="advantages__main_card_img">
          .
        </div>
        <div class="advantages__main_card_head">
          Преимущество
        </div>
        <div class="advantages__main_card_text">
          Описание преимущества
        </div>
      </div>
      <div class="advantages__main_card col-12 col-md-6 col-lg-3">
        <div class="advantages__main_card_img">
          .
        </div>
        <div class="advantages__main_card_head">
          Преимущество
        </div>
        <div class="advantages__main_card_text">
          Описание преимущества
        </div>
      </div>
      <div class="advantages__main_card col-12 col-md-6 col-lg-3">
        <div class="advantages__main_card_img">
          .
        </div>
        <div class="advantages__main_card_head">
          Преимущество
        </div>
        <div class="advantages__main_card_text">
          Описание преимущества
        </div>
      </div>
      <div class="advantages__main_card col-12 col-md-6 col-lg-3">
        <div class="advantages__main_card_img">
          .
        </div>
        <div class="advantages__main_card_head">
          Преимущество
        </div>
        <div class="advantages__main_card_text">
          Описание преимущества
        </div>
      </div>
      <div class="advantages__main_card col-12 col-md-6 col-lg-3">
        <div class="advantages__main_card_img">
          .
        </div>
        <div class="advantages__main_card_head">
          Преимущество
        </div>
        <div class="advantages__main_card_text">
          Описание преимущества
        </div>
      </div>
      <div class="advantages__main_card col-12 col-md-6 col-lg-3">
        <div class="advantages__main_card_img">
          .
        </div>
        <div class="advantages__main_card_head">
          Преимущество
        </div>
        <div class="advantages__main_card_text">
          Описание преимущества
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Advantages',
};
</script>

<style scoped>
.advantages {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.advantages__header {
  font-size: 35px;
  margin: 10px auto 30px;
}
.advantages__main{
  display: flex;
  align-items: center;
  justify-content: center;
}
.advantages__main_card{
  border-radius: 10px;
  margin: 10px;
}
.advantages__main_card:hover{
  box-shadow: 0 0 5px #E1704B;
}
</style>

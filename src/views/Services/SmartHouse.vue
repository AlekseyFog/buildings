<template>
  <div class="container">
    <div class="row mb-5 mt-3">
      <div class="about__header col-12">
        Система "Умный дом"
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12">
        <p class="paragraph">
          «Умный дом» — это инженерная система, которая управляет средой вашего дома одним кликом или фразой, позволяет
          сохранить любимые сценарии и показывает состояние инженерных систем, увеличивая престиж, комфорт и
          безопасность вашего дома.
        </p>
      </div>
    </div>
    <Sorry />
  </div>
</template>

<script>
import Sorry from '@/views/Sorry';

export default {
  name: 'Baths',
  components: { Sorry },
};
</script>

<style scoped>
.about__header {
  font-size: 30px;
  padding: 10px;
}

.paragraph {
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  color: #465162;
}
</style>

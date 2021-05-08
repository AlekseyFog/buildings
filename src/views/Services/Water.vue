<template>
  <div class="container">
    <div class="row mb-5 mt-3">
      <div class="about__header col-12">
        Водоснабжение и канализация
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

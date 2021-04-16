<template>
  <div class="info">
    <h2 class="phone info__item">
      +7(953)354-56-99
    </h2>
    <h2 class="info__item">
      email@example.com
    </h2>
    <h2 class="info__item">
      Saint-Petersburg, Kosmonavtov ave, 55
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Info',
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 10px;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.phone{
  display: block!important;
  width: 100px;
  margin-top: 10px;
}

.info__item{
  display: none;
}

@media (min-width: 576px) {
  .info__item {
    display: block;
    width: 120px;
  }
  .phone {
    margin-top: 0;
  }
}
</style>

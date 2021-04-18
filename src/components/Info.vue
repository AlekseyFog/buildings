<template>
  <div class="info">
    <h2 class="info__item">
      +7(953)354-56-99
    </h2>
    <h2 class="info__item">
      email@example.com
    </h2>
    <h2 class="info__item">
      Saint-Petersburg, kosmonavtov ave, 55
    </h2>
    <a
      href="tel:+79533545699"
      class="mobile_icon"
    >
      <PhoneIcon />
    </a>
  </div>
</template>

<script>
import PhoneIcon from '@/assets/svg/phoneicon.svg';

export default {
  name: 'Info',
  components: {
    PhoneIcon,
  },
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

.mobile_icon{
  display: block;
  width: 30px;
  height: 30px;
  margin-left: 30px;
}

.info__item {
  display: none;
}

@media (min-width: 576px) {
  .mobile_icon{
    display: none;
  }
  .info__item {
    display: block;
    width: 120px;
  }
}
</style>

<template>
  <div class="logo">
    <LogoImage class="logo__image" />
    <h1 class="logo__name">
      СтройЭлит
    </h1>
  </div>
</template>

<script>
import LogoImage from '@/assets/svg/pre-logo.svg';

export default {
  name: 'Logo',
  components: {
    LogoImage,
  },
};
</script>

<style lang="scss" scoped>
.logo{
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.logo__image{
  width: 50px;
  height: 50px;
}
.logo__name{
  font-size: 20px;
  margin-left: 5px;
}

@media (min-width: 576px) {
  .logo {
    margin-top: 0;
  }
}

</style>

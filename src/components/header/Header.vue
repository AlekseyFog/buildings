<template>
  <div class="header">
    <Logo />
    <Info />
  </div>
</template>

<script>
import Logo from '@/components/header/Logo';
import Info from '@/components/Info';

export default {
  name: 'Header',
  components: {
    Info,
    Logo,
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  padding: 10px 10px 0;
}

@media (min-width: 576px) {
  .header {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>

<template>
  <div class="header">
    <router-link to="/">
      <Logo />
    </router-link>
    <Menu />
  </div>
</template>

<script>
import Logo from '@/components/header/Logo';
import Menu from '@/components/header/Menu';

export default {
  name: 'Header',
  components: {
    Logo,
    Menu,
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 10px;
  background: #f9f9f9;
}

@media (min-width: 576px) {
  .header {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>

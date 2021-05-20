<template>
  <div class="header">
    <div class="container-fluid">
      <div class="row">
        <Logo class="col-12 col-md-3" />
        <Menu class="d-none d-md-flex col-md-9" />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/header/Logo';
import Menu from '@/components/menu/Menu';

export default {
  name: 'Header',
  components: {
    Logo,
    Menu,
  },
};
</script>

<style lang="scss" scoped>
.header{
  position: relative;
  height: 75px;
}
@media (min-width: 576px) {
  .header {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    z-index: 5;
    height: 80px;
    background: #f9f9f9;
    min-width: 100%;
  }
}
</style>

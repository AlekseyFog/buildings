<template>
  <div id="app">
    <MenuModal
      v-if="menuIsVisible"
      @close="hideMenu"
    />
    <div
      class="default-layout"
      :class="[
        menuIsVisible && 'default-layout_locked'
      ]"
    >
      <Header />
      <MenuMobileButton
        class="header__menu_mobile"
        @show-menu="setMenuIsVisible"
      />
      <Nav />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header';
import Nav from '@/components/menu/Nav';
import Footer from '@/components/footer/Footer';
import MenuModal from '@/components/menu/MenuModal';
import MenuMobileButton from '@/components/menu/MenuMobileButton';

export default {
  components: {
    Footer,
    MenuMobileButton,
    Nav,
    Header,
    MenuModal,
  },
  data() {
    return {
      menuIsVisible: false,
    };
  },
  methods: {
    setMenuIsVisible() {
      this.menuIsVisible = true;
    },
    hideMenu() {
      this.menuIsVisible = false;
    },
  },
};

</script>
<style lang="scss" src="./assets/styles/base-style.scss"/>
<style lang="scss">
.default-layout_locked {
  position: fixed;
  top: 0;
  left: 0;
}
.header__menu_mobile {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 30px;
  height: 30px;
}
@media (min-width: 768px) {
  .header__menu_mobile{
    display: none;
  }
}
</style>

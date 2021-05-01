<template>
  <div id="app">
    <MenuModal
      v-if="menuIsVisible"
      @close="hideMenu"
    />
    <Header />
    <div
      class="default-layout"
      :class="[
        menuIsVisible && 'default-layout_locked'
      ]"
    >
      <MenuMobileButton
        class="header__menu_mobile"
        @show-menu="setMenuIsVisible"
      />
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import MenuModal from '@/components/menu/MenuModal';
import MenuMobileButton from '@/components/menu/MenuMobileButton';

export default {
  components: {
    Footer,
    MenuMobileButton,
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

.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.default-layout{
  min-height: calc(100vh - 200px);
}
.fade-enter, .fade-leave-active{
  transform: translateX(10px);
  opacity: 0;
}

.default-layout_locked {
  position: fixed;
  top: 0;
  left: 0;
}

.header__menu_mobile {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
}

a {
  text-decoration: none;
  color: #000000;
}

@media (min-width: 900px) {
  .header__menu_mobile {
    display: none;
  }
}
</style>

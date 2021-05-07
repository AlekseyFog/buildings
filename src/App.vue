<template>
  <div id="app">
    <transition
      name="fade"
      mode="out-in"
    >
      <MenuModal
        v-if="menuIsVisible"
        @close="hideMenu"
      />
    </transition>
    <transition
      name="fade"
      mode="out-in"
    >
      <CallModal
        v-if="modalIsVisible"
        @close_form="closeModal"
      />
    </transition>
    <Header/>
    <div
      class="default-layout"
      :class="[
        menuIsVisible && 'default-layout_locked',
        modalIsVisible && 'default-layout_locked'
      ]"
    >
      <MenuMobileButton
        class="header__menu_mobile"
        @show-menu="setMenuIsVisible"
      />
      <MenuCallButton
        class="header__menu_call"
        @open_form="setModalIsVisible"
      />
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view/>
      </transition>
      <Footer class="footer"/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import MenuModal from '@/components/modals/MenuModal';
import MenuMobileButton from '@/components/menu/MenuMobileButton';
import MenuCallButton from '@/components/menu/MenuCallButton';
import CallModal from '@/components/modals/CallModal';

export default {
  components: {
    CallModal,
    Footer,
    MenuMobileButton,
    Header,
    MenuModal,
    MenuCallButton,
  },
  data() {
    return {
      menuIsVisible: false,
      modalIsVisible: false,
    };
  },
  methods: {
    setMenuIsVisible() {
      this.menuIsVisible = true;
    },
    hideMenu() {
      this.menuIsVisible = false;
    },
    setModalIsVisible() {
      this.modalIsVisible = true;
    },
    closeModal() {
      this.modalIsVisible = false;
    },
  },
};

</script>
<style lang="scss" src="./assets/styles/base-style.scss"/>
<style lang="scss">

.fade-enter-active {
  transition: all .4s ease;
}

.fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.default-layout {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 100px);
}

.fade-enter, .fade-leave-active {
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

.footer {
  margin-top: auto;
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

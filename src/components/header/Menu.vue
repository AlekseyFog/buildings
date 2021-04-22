<template>
  <div class="menu">
    <div class="menu__items_wrapper">
      <div class="menu__item">
        <router-link to="/">
          Проекты
        </router-link>
      </div>
      <div class="menu__item">
        <router-link to="/">
          Услуги
        </router-link>
      </div>
      <div class="menu__item">
        <router-link to="/">
          Наши работы
        </router-link>
      </div>
      <div class="menu__item">
        <router-link to="/">
          О нас
        </router-link>
      </div>
      <div class="menu__item">
        <router-link to="/">
          Контакты
        </router-link>
      </div>
    </div>
    <div class="menu__call_wrapper">
      <div class="phone__mobile">
        <a href="tel:+79533545699">
          <Call class="menu__call_icon-mobile" />
        </a>
      </div>
      <div class="phone__desktop">
        <a
          href="tel:+79533545699"
          class="phone__desktop_call"
        >
          <Call class="menu__call_icon" />
          <p>+7(953)354-56-99</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Call from '@/assets/svg/call.svg';

export default {
  name: 'Menu',
  components: {
    Call,
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.menu__item {
  display: none;
}

.menu__items_wrapper {
  display: none;
}

.menu__call_wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
}

.phone__desktop {
  display: none;
}

.phone__mobile {
  display: block !important;
  margin-left: auto;
  margin-right: 50px;
}

.menu__call_icon {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}

@media (min-width: 576px) {
  .phone__desktop {
    display: block !important;
    margin-right: 50px;
  }
  .phone__desktop_call{
    display: flex;
    align-items: center;
  }

  .phone__mobile {
    display: none;
  }
}

@media (min-width: 900px) {
  .menu__items_wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }

  .menu__item {
    display: flex;
    margin-left: 15px;
    padding: 5px;
    transition: all 0.5s ease;
  }

  .menu__item:hover {
    color: #E1704B;
    transition: all 0.5s ease;
  }

  a:hover {
    color: #E1704B;
    transition: all 0.2s ease;
  }

}
</style>

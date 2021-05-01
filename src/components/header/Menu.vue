<template>
  <div class="menu">
    <div class="menu__items_wrapper">
      <div class="menu__item menu__item_projects">
        <router-link to="/houses">
          Проекты
        </router-link>
        <div class="submenu__item_projects">
          <router-link
            to="/houses"
            class="submenu__item_projects-item"
          >
            Каталог домов
          </router-link>
          <router-link
            to="/baths"
            class="submenu__item_projects-item"
          >
            Каталог бань
          </router-link>
        </div>
      </div>
      <div class="menu__item menu__item_builds">
        <router-link
          to="/buildhouses"
        >
          Строительство
        </router-link>
        <div class="submenu__item_builds">
          <router-link
            to="/buildhouses"
            class="submenu__item_builds-item"
          >
            Строительство домов под ключ
          </router-link>
          <router-link
            to="/buildbaths"
            class="submenu__item_builds-item"
          >
            Строительство бань под ключ
          </router-link>
          <router-link
            to="/basement"
            class="submenu__item_builds-item"
          >
            Строительство фундаментов
          </router-link>
        </div>
      </div>
      <div class="menu__item menu__item_services">
        <router-link
          to="/designing"
        >
          Услуги
        </router-link>
        <div class="submenu__item_services">
          <router-link
            to="/designing"
            class="submenu__item_services-item"
          >
            Индивидуальное проектирование
          </router-link>
          <router-link
            to="/designing"
            class="submenu__item_services-item"
          >
            Строительство ограждений
          </router-link>
          <router-link
            to="/designing"
            class="submenu__item_services-item"
          >
            Канализация и водоснабжение
          </router-link>
          <router-link
            to="/designing"
            class="submenu__item_services-item"
          >
            Ландшафтное проектирование
          </router-link>
          <router-link
            to="/designing"
            class="submenu__item_services-item"
          >
            Умный дом
          </router-link>
        </div>
      </div>
      <div class="menu__item menu__item_works">
        <router-link
          to="/portfolio"
        >
          Наши работы
        </router-link>
      </div>
      <div class="menu__item menu__item_about">
        <router-link
          to="about"
        >
          О нас
        </router-link>
        <div class="submenu__item_about">
          <router-link
            to="/about"
            class="submenu__item_about-item"
          >
            Команда
          </router-link>
          <router-link
            to="/aboutTerms"
            class="submenu__item_about-item"
          >
            Условия работы
          </router-link>
          <router-link
            to="/reviews"
            class="submenu__item_about-item"
          >
            Отзывы
          </router-link>
        </div>
      </div>
      <router-link
        to="contacts"
        class="menu__item menu__item_contacts"
      >
        Контакты
      </router-link>
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
  height: 100%;
}

.menu__item {
  position: relative;
  display: none;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.menu__items_wrapper {
  display: none;
  height: 100%;
  align-items: center;
}

.menu__call_wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
}

.submenu__item_projects, .submenu__item_builds, .submenu__item_services, .submenu__item_about {
  position: absolute;
  top: 60px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 200px;
  white-space: nowrap;
  box-shadow: 0 2px 2px gray;
  border-radius: 5px;
  height: 0;
  overflow: hidden;
  background: #eae6e6;
  transition: all 150ms ease-in-out;
}

.submenu__item_projects-item, .submenu__item_builds-item, .submenu__item_services-item, .submenu__item_about-item {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 15px;
  margin-top: 10px;
  border-bottom: 1px solid #f9f9f9;
}

.submenu__item_projects-item:last-child, .submenu__item_builds-item:last-child, .submenu__item_services-item:last-child, .submenu__item_about-item:last-child {
  border: none;
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

  .phone__desktop_call {
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
    align-items: center;
    margin-left: 15px;
    padding: 5px;
    transition: all 0.5s ease;
  }

  a:hover {
    color: #E1704B;
    transition: all 0.2s ease;
  }

  a.router-link-exact-active {
    color: #E1704B;
  }

  .menu__item_projects:hover .submenu__item_projects {
    display: flex;
    height: auto;
    transition: all 150ms ease-in-out;
    padding: 5px 10px 20px;
  }

  .menu__item_services:hover .submenu__item_services {
    display: flex;
    height: auto;
    transition: all 150ms ease-in-out;
    padding: 5px 10px 20px;
  }

  .menu__item_about:hover .submenu__item_about {
    display: flex;
    height: auto;
    transition: all 150ms ease-in-out;
    padding: 5px 10px 20px;
  }

  .menu__item_builds:hover .submenu__item_builds {
    display: flex;
    height: auto;
    transition: all 150ms ease-in-out;
    padding: 5px 10px 20px;
  }

}
</style>

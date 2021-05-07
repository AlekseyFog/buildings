<template>
  <div class="menu">
    <div class="menu__items_wrapper">
      <div class="menu__item menu__item_projects">
        <router-link to="/partners">
          Проекты
        </router-link>
<!--        <div class="submenu__item_projects">-->
<!--          &lt;!&ndash;          <router-link&ndash;&gt;-->
<!--          &lt;!&ndash;            to="/houses"&ndash;&gt;-->
<!--          &lt;!&ndash;            class="submenu__item_projects-item"&ndash;&gt;-->
<!--          &lt;!&ndash;          >&ndash;&gt;-->
<!--          &lt;!&ndash;            Каталог домов&ndash;&gt;-->
<!--          &lt;!&ndash;          </router-link>&ndash;&gt;-->
<!--          <router-link-->
<!--            to="/partners"-->
<!--            class="submenu__item_projects-item"-->
<!--          >-->
<!--            Каталог домов-->
<!--          </router-link>-->
<!--          <router-link-->
<!--            to="/baths"-->
<!--            class="submenu__item_projects-item"-->
<!--          >-->
<!--            Каталог бань-->
<!--          </router-link>-->
<!--        </div>-->
      </div>
      <div class="menu__item menu__item_builds">
        <router-link
          to="/houses"
        >
          Строительство
        </router-link>
        <div class="submenu__item_builds">
          <router-link
            to="/houses"
            class="submenu__item_builds-item"
          >
            Строительство домов под ключ
          </router-link>
          <router-link
            to="/baths"
            class="submenu__item_builds-item"
          >
            Строительство бань под ключ
          </router-link>
          <router-link
            to="/foundations"
            class="submenu__item_builds-item"
          >
            Строительство фундаментов
          </router-link>
        </div>
      </div>
      <div class="menu__item menu__item_services">
        <router-link
          to="/services"
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
            to="/borders"
            class="submenu__item_services-item"
          >
            Строительство ограждений
          </router-link>
          <router-link
            to="/water"
            class="submenu__item_services-item"
          >
            Канализация и водоснабжение
          </router-link>
          <router-link
            to="/landscape"
            class="submenu__item_services-item"
          >
            Ландшафтное проектирование
          </router-link>
          <router-link
            to="/smarthouse"
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
            Компания
          </router-link>
          <!--          <router-link-->
          <!--            to="/aboutTerms"-->
          <!--            class="submenu__item_about-item"-->
          <!--          >-->
          <!--            Условия работы-->
          <!--          </router-link>-->
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
  </div>
</template>

<script>

export default {
  name: 'Menu',
};
</script>

<style scoped>

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

.submenu__item_projects, .submenu__item_builds, .submenu__item_services, .submenu__item_about {
  position: absolute;
  top: 50px;
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
  margin-top: 5px;
  border-bottom: 1px solid #f9f9f9;
}

.submenu__item_projects-item:last-child, .submenu__item_builds-item:last-child, .submenu__item_services-item:last-child, .submenu__item_about-item:last-child {
  border: none;
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

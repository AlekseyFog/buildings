<template>
  <div class="nav">
    <div class="menu__item">
      <router-link to="/">
        Главная
      </router-link>
    </div>
    <div class="menu__item houses">
      <div>Дома</div>
      <div class="houses__menu_item-wrap">
        <div class="sub__menu_item">
          Кирпичные дома
        </div>
        <div class="sub__menu_item">
          Дома из газобетона
        </div>
        <div class="sub__menu_item">
          Дома из клееного бруса
        </div>
        <div class="sub__menu_item">
          Дома из профилированного бруса
        </div>
      </div>
    </div>
    <div class="menu__item">
      Бани
    </div>
    <div class="menu__item">
      Фундаменты
    </div>
    <div class="menu__item">
      Услуги
    </div>
    <div class="menu__item">
      О нас
    </div>
    <div class="menu__item">
      Отзывы
    </div>
    <div class="menu__item">
      Контакты
    </div>
    <button class="order_button">
      Заказать звонок
    </button>
  </div>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 40px;
  background: #232324;
  margin-top: 10px;
  z-index: 99;
}

.menu__item, .houses {
  display: flex;
  align-items: center;
  margin-left: 15px;
  color: #ffffff;
  font-size: 12px;
  white-space: nowrap;
  height: 40px;
}

.menu__item:hover {
  color: #F09236;
}

.menu__item:first-child {
  margin-left: 40px;
}
.houses__menu_item-wrap{
  display: none;
}

@media (min-width: 576px) {
  .nav {
    display: flex;
  }
  .houses:hover .houses__menu_item-wrap{
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 40px;
    min-width: 250px;
    width: 100px;
    background: #f1f1f1;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    z-index: 1;
    padding: 0 10px 10px;
  }
  .sub__menu_item{
    margin-top: 10px;
    white-space: nowrap;
    color: #1E3053;
  }
  .sub__menu_item:hover{
    color: #F09236;
  }
  a.router-link-exact-active {
    color: #F09236!important;
  }
  a:visited{
    color: #ffffff;
  }
  .order_button{
    display: block;
    background: #F09236;
    font-size: 13px;
    color:  #1E3053;
    width: 130px;
    height: 40px;
    border-radius: 2px;
    border: none;
    padding: 3px;
    margin-left: auto;
    margin-right: 50px;
    transition: all 0.5s ease;
  }
  .order_button:hover{
    color: #F09236;
    background: #000000;
    transition: all 0.5s ease;
  }
}
</style>

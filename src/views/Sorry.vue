<template>
  <div class="sorry">
    <div class="container">
      <div class="row mt-5 mb-5">
        <div class="m-auto sorry__image">
          <img src="@/assets/svg/sorry.png"/>
        </div>
      </div>
      <div class="row mt-5 mb-5">
        <div class="col-12 sorry__text">
          <h2>В данный момент раздел находится в разработке</h2>
        </div>
      </div>
      <div class="col-12 mb-3">
        <router-link to="/">
          <button class="sorry__button">На главную</button>
        </router-link>
      </div>
      <div class="col-12">
        <router-link to="/houses">
          <button class="sorry__button">Каталог домов</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sorry',
};
</script>

<style scoped>
.sorry__image img {
  width: 300px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #465162;
  margin: auto;
}

.sorry__text {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.sorry__button {
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  border: 0.2px solid #f9f9f9;
  border-radius: 15px;
  padding: 15px;
  font-size: 12px;
  color: #000000;
  box-shadow: 0 0 1px #333;
  margin: auto;
  cursor: pointer;
}
.sorry__button:hover{
  box-shadow: 0 0 3px #333;
}
</style>

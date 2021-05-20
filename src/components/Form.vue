<template>
  <div class="container-fluid">
    <div class="row mb-5">
      <form class="order_form">
        <div class="col-12">
          <h3 class="form__header">
            Оставить заявку
          </h3>
        </div>
        <div class="col-12">
          <input
            id="name"
            required
            type="text"
            placeholder="Ваше имя"
          />
        </div>
        <div class="col-12">
          <input
            id="phone"
            required
            type="tel"
            placeholder="Телефон"
          />
        </div>
        <div class="col-12">
          <input
            id="email"
            required
            type="email"
            placeholder="Ваш email"
          />
        </div>
        <div class="col-12">
          <textarea
            id="comment"
            required
            placeholder="Комментарий"
          />
        </div>
        <div class="col-12">
          <input
            type="submit"
            class="button"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
};
</script>

<style scoped>
.form__header {
  font-size: 30px;
  color: #722311;
  margin-bottom: 20px;
  background: #f9f9f9;
  padding: 5px;
  border-radius: 7px;
  text-align: center;
}

.order_form {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#email, #name, #phone {
  margin: 10px 0;
  width: 350px;
  height: 40px;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  box-shadow: 0 0 2px #ffffff;
}

#comment {
  width: 350px;
  height: 100px;
  border: none;
  border-radius: 10px;
  padding: 10px;
}

.button {
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  background: #722311;
  box-shadow: 0 0 3px #465162;
}
</style>

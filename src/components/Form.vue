<template>
  <div class="row mb-5">
    <div class="col-12 form__wrapper">
      <form class="order_form">
        <h3 class="form__header">
          Оставить заявку
        </h3>
        <label for="name">Имя</label>
        <input
          required
          id="name"
          type="text"
          placeholder="Ваше имя"
        />
        <label for="phone">Телефон</label>
        <input
          required
          id="phone"
          type="tel"
          placeholder="Телефон"
        />
        <label for="email">Email</label>
        <input
          required
          id="email"
          type="email"
          placeholder="Ваш email"
        />
        <label for="comment">Комментарий</label>
        <textarea
          required
          id="comment"
          placeholder="Комментарий"
        />
        <input type="submit" class="button" />
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
.form__header{
  font-size: 30px;
  color: #f09236;
  margin-bottom: 20px;
}

.form__wrapper {
  padding: 20px;
  background: #f9f9f9;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

label {
  margin: 10px 0;
}

#email, #name, #phone {
  margin: 10px 0;
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  box-shadow: 0 0 2px #ffffff;
}

#comment{
  width: 350px;
  height: 100px;
  border: none;
  border-radius: 10px;
  padding: 10px;
}

.button{
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  background: #E1704B;
  box-shadow: 0 0 3px #465162;
}
</style>

<template>
  <div class="quiz">
    <div class="quiz__header col-12">
      Пройдите опрос и узнайте, какой дом подходит именно Вам
    </div>
    <div class="quiz__button col-12">
      Начать
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizPreview',
};
</script>

<style scoped>
.quiz{
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
}
.quiz__header{
  font-size: 20px;
  font-weight: bold;
}
</style>

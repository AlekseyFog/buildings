<template>
  <div class="img">
    <img
      :src="`/main/main-content3.jpeg`"
      alt="house"
    />
  </div>
</template>

<script>
export default {
  name: 'Image1',
};
</script>

<style scoped>
.img{
  display: flex;
}
.img img{
  border-radius: 5px;
  box-shadow: 1px 1px 5px #ffffff;
  width: 100%;
  max-width: 500px;
  margin: auto;
}
</style>

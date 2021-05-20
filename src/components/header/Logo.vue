<template>
  <div class="logo">
    <router-link to="/">
      <img
        src="~@/assets/svg/Header-logo.png"
        alt="logo"
      />
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Logo',
};
</script>

<style lang="scss" scoped>

.logo img {
  width: 260px;
  height: 60px;
}

</style>

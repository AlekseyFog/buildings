<template>
  <div class="logo">
    <h1 class="logo__name">
      Строй<span class="logo__name_span">Элит</span>
    </h1>
  </div>
</template>

<script>

export default {
  name: 'Logo',
};
</script>

<style lang="scss" scoped>
.logo__name {
  font-size: 30px;
}

.logo__name_span {
  color: #E1704B;
}

@media (min-width: 576px) {
  .logo {
    margin-top: 0;
    margin-right: 15px;
    margin-left: 15px;
  }
  .logo__name {
   font-size: 35px;
  }
}

</style>

<template>
  <div class="layout__main">
    <Splash />
    <AboutMain />
  </div>
</template>

<script>
import Splash from '@/components/layout-main/Splash';
import AboutMain from '@/components/layout-main/AboutMain';

export default {
  name: 'LayoutMain',
  components: {
    Splash,
    AboutMain,
  },
};
</script>

<style scoped>

</style>

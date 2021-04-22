<template>
  <div class="layout__main">
    <Splash />
    <AboutMain />
    <Advantages />
    <ServicesPreview />
  </div>
</template>

<script>
import Splash from '@/components/layout-main/Splash';
import AboutMain from '@/components/layout-main/AboutMain';
import Advantages from '@/components/layout-main/Advantages';
import ServicesPreview from '@/components/layout-main/ServicesPreview';

export default {
  name: 'LayoutMain',
  components: {
    ServicesPreview,
    Advantages,
    Splash,
    AboutMain,
  },
};
</script>

<style scoped>

</style>

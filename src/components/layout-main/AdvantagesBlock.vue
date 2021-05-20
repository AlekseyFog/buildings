<template>
  <div class="advantages-block">
    <div class="row align-items-center justify-content-around">
      <div class="col-12 col-md-6">
        <div class="advantages-block__image">
          <Component :is="item.image" />
        </div>
      </div>
      <div
        class="col-12 col-md-6"
        :class="[
          revert && 'order-md-first' || 'order-md-second',
        ]"
      >
        <div class="advantages-block__title">
          {{ item.title }}
        </div>
        <div class="advantages-block__description">
          {{ item.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from '@/components/AdvantagesImages/image1';
import image2 from '@/components/AdvantagesImages/image2';
import image3 from '@/components/AdvantagesImages/image3';
import image4 from '@/components/AdvantagesImages/image4';
import image5 from '@/components/AdvantagesImages/image5';
import image6 from '@/components/AdvantagesImages/image6';

export default {
  name: 'AdvantagesBlock',

  components: {
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  },

  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    revert: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>

.advantages-block {
  display: flex;
  padding: 20px;
  margin-bottom: 40px;
}

.advantages-block__title {
  font-size: 30px;
  color: #722311;
  font-weight: bold;
  margin-bottom: 40px;
}

.advantages-block__description{
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
}
.advantages-block__image{
  margin-left: auto;
}

</style>

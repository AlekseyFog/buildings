<template>
  <div class="advantages-block">
    <div class="row align-items-center justify-content-around">
      <div class="col-md-3">
        <div class="advantages-block__image">
          <Component :is="item.image" />
        </div>
      </div>
      <div
        class="col-12 col-md-9"
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
import House from '@/assets/svg/house.svg';

export default {
  name: 'AdvantagesBlock',

  components: {
    House,
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
  padding: 20px;
  margin-bottom: 40px;
}

.advantages-block__title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.advantages-block__image{
  max-width: 150px;
  margin-left: auto;
}

</style>

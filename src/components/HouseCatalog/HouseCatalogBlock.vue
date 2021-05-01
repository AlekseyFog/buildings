<template>
  <div class="house-catalog-block">
    <div class="row align-items-center justify-content-around">
      <div class="col-12">
        <div class="house-catalog-block__image">
          <Component :is="item.image" />
        </div>
        <div class="house-catalog-block__description flex-column">
          <div class="house-catalog-block__name">
            {{ item.title }}
          </div>
          <div class="house-catalog-block__description">
            {{ item.description }}
          </div>
          <div class="house-catalog-block__material">
            {{ item.material }}
          </div>
          <div class="house-catalog-block__meters">
            {{ item.meters }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HouseCatalogBlock',

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

.house-catalog-block {
  padding: 10px;
  border: 1px solid black;
}

</style>

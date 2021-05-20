<template>
  <div class="house-catalog-block">
    <div class="row align-items-center justify-content-around">
      <div class="col-12">
        <div class="house-catalog-block__image">
          <img
            :src="item.imageMain"
            alt="img"
          />
        </div>
        <div class="house-catalog-block__description flex-column">
          <div class="house-catalog-block__name">
            {{ item.title }}
          </div>
          <div class="house-catalog-block__material">
            {{ item.material }}
          </div>
          <div class="house-catalog-block__meters">
            {{ item.meters }}
          </div>
          <div
            class="button__more"
            @click="showHouseModal"
          >
            Подробнее
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfCatalogBlock',

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
  methods: {
    showHouseModal() {
      const { item } = this;
      this.$emit('select-item', item);
    },
  },
};
</script>

<style lang="scss" scoped>
.house-catalog-block {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  border: 1px solid #722311;
  border-radius: 10px;
}
.house-catalog-block:hover{
  box-shadow: 0 0 5px #722311;
}

.house-catalog-block__image img{
  width: 100%;
  border-radius: 10px 10px 0 0;
}
.house-catalog-block__description{
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 10px;
}

.house-catalog-block__about,
.house-catalog-block__name,
.house-catalog-block__material,
.house-catalog-block__meters {
  display: block;
  width: 100%;
  color: #465162;
}

span{
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  color: #722311;
  font-size: 15px;
  margin-bottom: 10px;
}

.button__more{
  margin: auto auto 20px auto;
  background: #722311;
  border: none;
  border-radius: 10px;
  display: flex;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  font-family: 'Raleway', sans-serif;
  color: #f9f9f9;
  font-size: 15px;
  width: 120px;
  height: 40px;
  cursor: pointer;
  transition: all 0.5s ease;
}
.button__more:hover{
  color: #f09236;
  transition: all 0.5s ease;
}
</style>

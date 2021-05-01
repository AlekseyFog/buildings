<template>
  <div class="house-catalog">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="house-catalog__header">
            Каталог проектов загородных домов
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="house-catalog__filter">
            <div class="slider__till">
              Площадь от
              <range-slider
                class="slider house-catalog__slider"
                :min="minSliderValue"
                :max="maxSliderValue"
                :step="stepSliderValue"
                :value="fromSliderValue"
                @input="setSliderValue('from', $event)"
              />
              <div class="value">
                {{ fromSliderValue }} кв.м
              </div>
            </div>
            <div class="slider__till">
              Площадь до
              <range-slider
                class="slider house-catalog__slider"
                :min="minSliderValue"
                :max="maxSliderValue"
                :step="stepSliderValue"
                :value="tillSliderValue"
                @input="setSliderValue('till', $event)"
              />
              <div class="value">
                {{ tillSliderValue }} кв.м
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(item, index) in filteredHousList"
          :key="index"
          class="col-12 col-md-3 mb-md-4"
        >
          <HouseCatalogBlock
            :item="item"
            :revert="index % 2 === 0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HouseCatalogBlock from '@/components/HouseCatalog/HouseCatalogBlock';
import HOUSE_CATALOG from '@/store/housecatalog';
import RangeSlider from 'vue-range-slider';
import 'vue-range-slider/dist/vue-range-slider.css';

export default {
  name: 'BuildHouses',
  components: {
    HouseCatalogBlock,
    RangeSlider,
  },
  data: () => ({
    houseCatalog: HOUSE_CATALOG,
    fromSliderValue: 150,
    tillSliderValue: 500,
    stepSliderValue: 1,
    minSliderValue: 100,
    maxSliderValue: 500,
  }),
  computed: {
    filteredHousList() {
      const {
        fromSliderValue,
        tillSliderValue,
        houseCatalog,
      } = this;
      return houseCatalog.filter(({ meters }) => (parseInt(meters) >= fromSliderValue && parseInt(meters) <= tillSliderValue));
    },
  },
  methods: {
    setSliderValue(type, value) {
      if (type === 'from') {
        this.fromSliderValue = value;
      }
      if (type === 'till') {
        this.tillSliderValue = value;
      }
    },
  },
};

</script>

<style scoped>

.house-catalog__header {
  font-size: 30px;
  padding: 10px;
}

.house-catalog__filter {
  padding: 20px;
}

.house-catalog__slider ::v-deep .range-slider-fill {
  background-color: red;
}
</style>

<template>
  <div class="house-catalog">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="house-catalog__header">
            Каталог проектов бань
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
          v-for="(item, index) in filteredBathsList"
          :key="index"
          class="col-12 col-md-3 mb-md-4 d-flex"
        >
          <BathsCatalogBlock
            :item="item"
            :revert="index % 2 === 0"
            @showBathModal="showBathModal"
          />
        </div>
        <BathsCatalogModal
          v-if="BathModalIsVisible"
          :options="selectedItem"
          @close-modal="closeModalHandler"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RangeSlider from 'vue-range-slider';
import 'vue-range-slider/dist/vue-range-slider.css';

import BathsCatalogBlock from '@/components/bathscatalog/BathsCatalogBlock';
import BATHS_CATALOG from '@/store/bathscatalog';
import BathsCatalogModal from '@/components/bathscatalog/BathsCatalogModal';

export default {
  name: 'BuildBaths',
  components: {
    RangeSlider,
    BathsCatalogBlock,
    BathsCatalogModal,
  },
  data: () => ({
    bathsCatalog: BATHS_CATALOG,
    BathModalIsVisible: false,
    selectedItem: null,
    fromSliderValue: 100,
    tillSliderValue: 500,
    stepSliderValue: 1,
    minSliderValue: 100,
    maxSliderValue: 500,
  }),
  computed: {
    filteredBathsList() {
      const {
        fromSliderValue,
        tillSliderValue,
        bathsCatalog,
      } = this;
      return bathsCatalog.filter(({ meters }) => (parseInt(meters) >= fromSliderValue && parseInt(meters) <= tillSliderValue));
    },
  },
  methods: {
    showBathModal(options) {
      this.selectedItem = options;
      this.BathModalIsVisible = true;
    },
    closeModalHandler() {
      this.selectedItem = null;
      this.BathModalIsVisible = false;
    },
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

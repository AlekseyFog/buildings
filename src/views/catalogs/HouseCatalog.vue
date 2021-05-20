<template>
  <div class="house-catalog">
    <HouseCatalogModal
      v-if="houseModalIsVisible"
      :options="selectedItem"
      @close-modal="closeModalHandler"
    />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="house-catalog__header">
            Каталог проектов загородных домов
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
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
        <div class="col-12 col-md-6">
          <div class="ruplans">
            <p class="ruplans__txt">
              Мы сотрудничаем с
            </p>
            <div style="margin:20px 0;">
              <a
                href="https://ruplans.ru"
                title="RuPlans - Проекты домов и коттеджей"
              ><img
                alt="RuPlans - Проекты домов и коттеджей"
                src="https://ruplans.ru/img/logo1.png"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(item, index) in filteredHouseList"
          :key="index"
          class="col-12 col-md-3 mb-md-4 d-flex"
        >
          <HouseCatalogBlock
            :item="item"
            :revert="index % 2 === 0"
            @select-item="showModalHandler"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HouseCatalogBlock from '@/components/HouseCatalog/HouseCatalogBlock';
import HouseCatalogModal from '@/components/HouseCatalog/HouseCatalogModal';
import HOUSE_CATALOG from '@/store/housecatalog';
import RangeSlider from 'vue-range-slider';
import 'vue-range-slider/dist/vue-range-slider.css';

export default {
  name: 'HouseCatalog',
  components: {
    HouseCatalogBlock,
    HouseCatalogModal,
    RangeSlider,
  },
  data: () => ({
    houseModalIsVisible: false,
    selectedItem: null,
    houseCatalog: HOUSE_CATALOG,
    fromSliderValue: 50,
    tillSliderValue: 500,
    stepSliderValue: 1,
    minSliderValue: 50,
    maxSliderValue: 500,
  }),
  computed: {
    filteredHouseList() {
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
    showModalHandler(options) {
      this.houseModalIsVisible = true;
      this.selectedItem = options;
    },
    closeModalHandler() {
      this.houseModalIsVisible = false;
      this.selectedItem = null;
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
  background-color: #722311;
}

@media (min-width: 768px) {
  .house-catalog {
    padding: 30px;
  }

  .ruplans {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding-bottom: 20px;
  }
  .ruplans__txt{
    align-self: flex-end;
    padding: 0 0 40px;
  }
}
</style>

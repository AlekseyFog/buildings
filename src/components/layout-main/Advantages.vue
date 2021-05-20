<template>
  <div class="advantages">
    <div class="advantages__header">
      Преимущества работы с нами
    </div>
    <div
      v-for="(item, index) in advantages"
      :key="index"
      class="row"
    >
      <div class="col-12">
        <AdvantagesBlock
          :item="item"
          :revert="index % 2 === 0"
        />
      </div>
    </div>
  </div>
</template>

<script>
import translations from '@/store/translations';
import advantages from '@/store/advantages';
import AdvantagesBlock from '@/components/layout-main/AdvantagesBlock';

export default {
  name: 'Advantages',
  components: {
    AdvantagesBlock,
  },

  data() {
    return {
      translations,
      advantages,
    };
  },
};
</script>

<style scoped>
.advantages {
  display: flex;
  z-index: 1;
  flex-direction: column;
  padding: 40px 10px;
  background: #F4F5F7;
}

.advantages__header {
  color: #722311;
  font-size: 40px;
  margin: 10px auto 70px;
}

</style>

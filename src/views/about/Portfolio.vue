<template>
  <div class="container">
    <div class="row">
      <div class="build__header">
        Построенные дома
      </div>
    </div>
    <div class="row">
      <div
        v-for="(item, index) in portfCatalog"
        :key="index"
        class="col-12 col-md-3 mb-md-4 d-flex"
      >
        <PortfCatalogBlock
          :item="item"
          :revert="index % 2 === 0"
          @select-item="showPortfModal"
        />
      </div>
      <PortfCatalogModal
        v-if="PortfModalIsVisible"
        :options="selectedItem"
        @close-modal="closeModalHandler"
      />
    </div>
  </div>
</template>

<script>
import PortfCatalogBlock from '@/components/PortfCatalog/PortfCatalogBlock';
import PORTF_CATALOG from '@/store/portfolio';
import PortfCatalogModal from '@/components/PortfCatalog/PortfCatalogModal';

export default {
  name: 'BuildBaths',
  components: {
    PortfCatalogBlock,
    PortfCatalogModal,
  },
  data: () => ({
    portfCatalog: PORTF_CATALOG,
    PortfModalIsVisible: false,
    selectedItem: null,
  }),
  methods: {
    showPortfModal(options) {
      this.selectedItem = options;
      this.PortfModalIsVisible = true;
    },
    closeModalHandler() {
      this.selectedItem = null;
      this.PortfModalIsVisible = false;
    },
  },
};
</script>

<style scoped>
.build__header {
  font-size: 30px;
  padding: 10px;
}
</style>

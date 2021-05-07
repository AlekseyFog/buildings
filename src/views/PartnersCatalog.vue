<template>
  <div class="build">
    <div id="dmm_results" />
  </div>
</template>

<script type="text/javascript">
function dmm_init_connect() {
  // eslint-disable-next-line no-undef,no-unused-expressions
  typeof dmm_connect !== 'undefined' ? dmm_connect({
    apikey: '2b675efa46684086dcea62bef2191821',
    get_param: '0',
  }) : setTimeout(() => {
    dmm_init_connect();
  }, 200);
}

if (typeof (dmm_initJQ) === 'undefined') {
  const url = `${document.location.protocol}//domamo.ru/new_api/domamo-api.js`;
    const script = document.createElement('script');
  // eslint-disable-next-line no-unused-expressions,no-sequences
  script.setAttribute('src', url), document.getElementsByTagName('head')[0].appendChild(script), dmm_init_connect();
}

export default {
  name: 'PartnersCatalog',
};
</script>

<style scoped>

</style>

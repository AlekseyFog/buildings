<template>
  <div class="menu__call_wrapper">
    <div
      class="phone"
      @click="open_form"
    >
      <Call class="menu__call_icon" />
    </div>
  </div>
</template>

<script>
import Call from '@/assets/svg/call.svg';

export default {
  name: 'MenuCallButton',
  components: {
    Call,
  },
  methods: {
    open_form() {
      this.$emit('open_form');
    },
  },
};
</script>

<style scoped>
.menu__call_wrapper {
  display: none;
}

.menu__call_icon {
  display: none;
}

@media (min-width: 900px) {
  .menu__call_wrapper {
    z-index: 10;
    position: fixed;
    top: 15px;
    right: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    border: 2px solid #722311;
    border-radius: 50%;
    box-shadow: 1px 1px 3px #323b47;
    width: 50px;
    height: 50px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .menu__call_wrapper:hover {
    width: 55px;
    height: 55px;
    transition: all 0.3s ease-in-out;
  }

  .menu__call_icon {
    display: flex;
    width: 30px;
    height: 30px;
    margin: auto;
    fill: #722311;
  }
}
</style>

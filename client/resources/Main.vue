<template>
  <div class="main">
    <router-view />
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss">
  @import './scss/base';
  @import './scss/reset';
  .main {
    background-color: rgb(106, 178, 205);
    min-height: 100vh;
  }
</style>


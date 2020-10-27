<template>
  <div>
    <top-bar></top-bar>
    <memu></memu>
  </div>
</template>

<script>
import memu from "./components/Memu";
import topBar from "./components/TopBar";
export default {
  components: {
    memu,
    topBar,
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <v-container>
    <div class="home--header">
      <div class="home--header-logo">
        <img src="@/assets/logo.png" />
      </div>
      <div class="home--header-title">
        pagehome
      </div>
      <div class="home--header-github" @click="handleGitbubClick">
        <img src="@/assets/logo.png" />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>

<style lang="scss">
.home--header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 64px;
  line-height: 64px;
  background-color: #fff;
  box-sizing: border-box;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.08);
}

.home--header-logo {
  float: left;
  padding-left: 25px;
  overflow: hidden;
  cursor: pointer;

  > img {
    height: 32px;
    vertical-align: middle;
    border-style: none;
  }
}

.home--header-title {
  height: 65px;
  line-height: 65px;
  font-size: 25px;
  display: inline-block;
  padding-left: 12px;
  font-weight: 700;
}
</style>

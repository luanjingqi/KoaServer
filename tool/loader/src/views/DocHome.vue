<template>
  <div class="home">
    <div class="home--header">
      <div class="home--header-logo">
        <img src="@/assets/logo.png" />
      </div>
      <div class="home--header-title">
        VUE-UI-DOCS
      </div>
      <div class="home--header-github" @click="handleGitbubClick">
        <img src="@/assets/logo.png" />
      </div>
    </div>
    <div class="home--left">
      <div class="home--left-title">开发指南</div>
      <router-link class="home--left-link" to="/">快速上手</router-link>
      <router-link class="home--left-link" to="/changelog"
        >更新日志
      </router-link>
      <div class="home--left-title">组件</div>
      <router-link class="home--left-link" to="/component/button">
        Button 按钮
      </router-link>
    </div>
    <div class="home--content">
      <div class="home--content-page">
        <div class="home--content-view">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleGitbubClick() {
      window.open("https://github.com/kitorv/vue-ui-docs");
    },
  },
};
</script>

<style lang="scss">
.home {
  position: relative;
  height: 100%;
  overflow: hidden;
}

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

.home--left {
  position: fixed;
  z-index: 30;
  top: 65px;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  width: 250px;
  font-size: 14px;
  margin: 30px 0;
  color: #3f536e;
  background: #fff;
  border-right: 1px solid #ececec;
}

.home--left-title {
  font-size: 16px;
  color: #333;
  line-height: 40px;
  height: 40px;
  margin: 0;
  padding: 4px 25px;
  text-decoration: none;
  display: block;
  position: relative;
  transition: 0.15s ease-out;
  font-weight: 700;
}

.home--left-link {
  font-size: 14px;
  color: #333;
  line-height: 40px;
  height: 40px;
  margin: 0;
  padding: 4px 25px;
  text-decoration: none;
  display: block;
  position: relative;
  transition: 0.15s ease-out;
  font-weight: 500;

  &:hover {
    color: #41a259;
  }
}

.home--header-github {
  position: absolute;
  height: 40px;
  width: 40px;
  right: 20px;
  top: 10px;
  color: #444444;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }

  > img {
    height: 100%;
    width: 100%;
  }
}

.router-link-exact-active {
  color: #41a259 !important;
  background-color: #eeffde !important;
  border-right: 3px solid #41a259 !important;
}

.home--content {
  height: calc(100% - 65px);
  overflow: auto;
  margin-top: 65px;
}

.home--content-page {
  padding-left: 250px;
}

.home--content-view {
  max-width: 1000px;
  padding: 30px 50px 60px 50px;
  margin: 0 auto;
}
</style>

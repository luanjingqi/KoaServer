module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    // 解析Markdown文件转成vue组件
    config.module
      .rule("md")
      .test(/\.md$/)
      .use("vue-loader")
      .loader("vue-loader")
      .options({
        compilerOptions: {
          preserveWhitespace: false,
        },
      })
      .end()
      .use("markdown-loader")
      .loader(
        require("path").resolve(__dirname, "./src/build/markdown-loader.js")
      )
      .end();
  },
};

import theme from "./index";

export default theme({
  important: true,
  docs: {
    primaryColor: "#1b58f4",
  },
  i18n: {
    locales: () => [
      {
        code: "zh",
        iso: "zh-CN",
        file: "zh-CN.js",
        name: "中文",
      },
      {
        code: "en",
        iso: "en-US",
        file: "en-US.js",
        name: "English",
      },
    ],
    defaultLocale: "zh",
  },
  buildModules: ["@nuxtjs/composition-api/module", "@nuxt/typescript-build"],
});

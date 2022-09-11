import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",
  base:'/dmm-lib/',
  theme: defaultTheme({
    navbar: [
      { text: "bar1", link: "/guide/" },
      { text: "bar2", link: "/api/" },
    ],
    sidebar: [
      { text: "sidebar1", link: "/guide/" },
      { text: "sidebar2", link: "/api/" },
    ],
  }),
});

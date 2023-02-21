import { defineConfig } from "vitepress";
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getDirctSidebar(pathname: string) {
  const p = path.resolve(__dirname, '../', pathname)
  if(!fs.existsSync(p)) return []
  const dirct = fs.readdirSync(p)
                  .filter(v=>v.endsWith('.md'))
                  .sort((a, b) => {
                    if(a==='index.md') return 1
                    if(a[0]!=='2') return 1
                    return a>b ? -1 : 1
                  })
  return dirct.map(dir=>{
    const text = dir.replace('.md','');
    return {
      text,
      link: `/${pathname}/${text}`
    }
  })
}

export default defineConfig({
  lang: "en-US",
  title: "HuJianjun",
  titleTemplate: "明天会更好",
  description: "Huli66 study",
  appearance: true,
  lastUpdated: true,
  base: "/blog-vitepress/",
  head: [
    ["link", { rel: "icon", href: "/head.jpg", sizes: "16x16" }],
  ],

  themeConfig: {
    logo: "/logo.svg",
    nav: nav(),
    sidebar: {
      "/web": [{ text: "大前端", items: getDirctSidebar("web")}],
      "/developer": [{ text: "程序员基础", items: getDirctSidebar("developer")}],
      "/about": [{ text: "关于", items: getDirctSidebar("about")}],
      "/": getDirctSidebar("/blogs"),
    },
    siteTitle: "🍁狐狸",
    outlineTitle: "目录",
    socialLinks: [
      { icon: "github", link: "https://github.com/huli66" },
      { icon: "twitter", link: "" },
    ],
    footer: {
      message: "风华正茂 书生意气",
      copyright: "Copyright © 2023-present Jianjun Hu",
    },
    editLink: {
      pattern: "https://github.com/huli66/blog-vitepress/:path",
      text: "Edit this page on GitHub",
    },
    lastUpdatedText: "最近更新时间",
  },
});

function nav() {
  return [
    {
      text: "大前端",
      items: [
        { text: "JS&H5&C3", link: "/web/index" },
        { text: "React", link: "/web/js" },
        { text: "工程化", link: "/web/js" },
        { text: "翻译", link: "/web/js" },
      ]
    },
    { 
      text: "程序员基础",
      items: [
        { text: "算法", link: "/developer/algo" },
        { text: "设计模式", link: "/developer/index" },
        { text: "算法", link: "/developer/algo" },
        { text: "开发者技能", link: "/developer/algo" },
      ]
    },
    { 
      text: "关于",
      items: [
        { text: "本站历史", link: "/about/index" },
        { text: "生活记录", link: "/about/life" },
        { text: "个人简介", link: "/about/introduce" }
      ]
    },
  ]
}

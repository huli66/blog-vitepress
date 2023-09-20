import{_ as s,c as n,o as a,d as p}from"./app.90c1412e.js";const C=JSON.parse('{"title":"包管理工具","description":"","frontmatter":{"title":"包管理工具","lastUpdated":true},"headers":[{"level":2,"title":"npm","slug":"npm","link":"#npm","children":[]},{"level":2,"title":"yarn","slug":"yarn","link":"#yarn","children":[]},{"level":2,"title":"pnpm","slug":"pnpm","link":"#pnpm","children":[]}],"relativePath":"blogs/notes/包管理工具.md","lastUpdated":1695209990000}'),l={name:"blogs/notes/包管理工具.md"},e=p(`<h1 id="包管理工具" tabindex="-1">包管理工具 <a class="header-anchor" href="#包管理工具" aria-hidden="true">#</a></h1><h2 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-hidden="true">#</a></h2><p>早期 v2 版本，依赖包重复安装，嵌套层级太深</p><p>v3 版本提出了目录扁平化，将第一次安装的某个版本提升到顶层，其他版本无法提升到顶层就不变，缓解了嵌套层级太深的问题 但是产生了幽灵依赖问题、双胞胎陌生人问题（B v1 被提升到顶层，下面两个包都依赖 B v2，则依旧会重复安装 B v2，哪个包提升到顶层也和安装顺序有关，并不稳定，依赖不幂等） 为了解决依赖不幂等的问题，就使用了锁文件的方案，yarn 最早提出（yarn.lock package-lock.json)</p><h2 id="yarn" tabindex="-1">yarn <a class="header-anchor" href="#yarn" aria-hidden="true">#</a></h2><p>yarn 也存在幽灵依赖问题，但是多个版本包更智能</p><h2 id="pnpm" tabindex="-1">pnpm <a class="header-anchor" href="#pnpm" aria-hidden="true">#</a></h2><p>解决了幽灵依赖问题</p><p>hard link：pnpm 安装过程中会在全局的 store 目录中存储依赖包，然后在项目对应的 node_modules 中创建相应的硬链接</p><p>存在兼容性问题，或者某些 npm 包中写死了引用路径，可能会导致出错，而且依赖包在全局 store 中维护，修改调试时所有工程都会受影响</p><p>pnpm 的包结构树更清晰</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 包实际存储位置</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">store</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 清除全局无用的包</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">store</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">prune</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 从 npm 迁移到 pnpm</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">import</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 部分命令也需要从 npm 改为 pnpm</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>在项目里指定团队成员只能使用 pnpm 包管理器，在 <code>package.json</code> 中限制</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">preinstall</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">npx only-allow pnpm</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><code>pnpm ci</code> 会先删除项目的 <code>node_modules</code> 再安装，不会更新 <code>lock</code> 文件，完全按照 <code>package-lock.json</code> 进行安装</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ci</span></span>
<span class="line"></span></code></pre></div>`,16),o=[e];function t(c,r,i,d,y,h){return a(),n("div",null,o)}const D=s(l,[["render",t]]);export{C as __pageData,D as default};

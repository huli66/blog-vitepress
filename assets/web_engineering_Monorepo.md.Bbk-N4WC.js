import{_ as s,c as e,a2 as n,o as i}from"./chunks/framework.DOgdC_ou.js";const h=JSON.parse('{"title":"MonoRepo","description":"","frontmatter":{},"headers":[],"relativePath":"web/engineering/Monorepo.md","filePath":"web/engineering/Monorepo.md","lastUpdated":1729515322000}'),p={name:"web/engineering/Monorepo.md"};function o(t,a,l,r,c,d){return i(),e("div",null,a[0]||(a[0]=[n(`<h1 id="monorepo" tabindex="-1">MonoRepo <a class="header-anchor" href="#monorepo" aria-label="Permalink to &quot;MonoRepo&quot;">​</a></h1><p>多个项目放在一个仓库里</p><p>相对于传统的 MultiRepo 模式(每个项目一个单独仓库)</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── packages</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| ├── pkg1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| | ├── package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| ├── pkg2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| | ├── package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── package.json</span></span></code></pre></div><p>基于 <code>yarn workspace</code> 实现，通过 link 仓库的各个 package ，达到跨项目复用的 mudi</p>`,5)]))}const g=s(p,[["render",o]]);export{h as __pageData,g as default};

import{_ as e,c as s,o as n,d as t}from"./app.0403e3e7.js";const F=JSON.parse('{"title":"代码检查和格式化","description":"","frontmatter":{"title":"代码检查和格式化","lastUpdated":true},"headers":[{"level":2,"title":"代码检查 Linting","slug":"代码检查-linting","link":"#代码检查-linting","children":[]},{"level":2,"title":"格式化","slug":"格式化","link":"#格式化","children":[{"level":3,"title":"eslint-config-prettier","slug":"eslint-config-prettier","link":"#eslint-config-prettier","children":[]},{"level":3,"title":"配置 .eslintrc.json","slug":"配置-eslintrc-json","link":"#配置-eslintrc-json","children":[]},{"level":3,"title":".prettierrc.json","slug":"prettierrc-json","link":"#prettierrc-json","children":[]}]},{"level":2,"title":"CRLF & LF","slug":"crlf-lf","link":"#crlf-lf","children":[]},{"level":2,"title":"ESLint & Prettier & Husky","slug":"eslint-prettier-husky","link":"#eslint-prettier-husky","children":[]}],"relativePath":"web/engineering/代码检查和格式化.md","lastUpdated":1685354469000}'),l={name:"web/engineering/代码检查和格式化.md"},a=t(`<h1 id="代码检查和格式化" tabindex="-1">代码检查和格式化 <a class="header-anchor" href="#代码检查和格式化" aria-hidden="true">#</a></h1><p>使用 VS Code 进行开发，安装 ESLint 和 Prettier 插件</p><h2 id="代码检查-linting" tabindex="-1">代码检查 Linting <a class="header-anchor" href="#代码检查-linting" aria-hidden="true">#</a></h2><p>确保启用 <code>eslint-plugin-react-hooks</code> 规则，这是 React 项目中必备的，能帮助及时捕获 bug 推荐的 <code>eslint-config-react-apppreset</code> 中已经集成了该规则</p><h2 id="格式化" tabindex="-1">格式化 <a class="header-anchor" href="#格式化" aria-hidden="true">#</a></h2><p>设置保存时自动格式化代码 <code>format on save</code> ESlint 预设包含格式化规则，可能会与 Prettier 发生冲突，建议使用 <code>eslint-config-prettier</code> 禁用 ESLint 中所有的格式化规则，这样 ESLint 只用于捕捉逻辑错误</p><p>:::CLI 如果想在合并 PR 前强制执行文件的格式化，请在 CI 中使用 <code>prettier --check</code> 命令 如果想格式化当前文件，使用 \`npx prettier --write ./src/*<em>/</em> :::</p><h3 id="eslint-config-prettier" tabindex="-1">eslint-config-prettier <a class="header-anchor" href="#eslint-config-prettier" aria-hidden="true">#</a></h3><p>关闭所有非必要或者可能和 prettier 有冲突的 rules，但是这个配置只是关闭部分 rules，所以它必须配合其他配置使用才能起到 eslint 的作用</p><p><code>npm install --save-dev eslint-config-prettier</code></p><p>可以覆盖以下 plugins 的部分 rules @typescript-eslint eslint-plugin@babel eslint-plugin eslint-plugin-babel eslint-plugin-react eslint-plugin-standard eslint-plugin-vue 等</p><p><code>npx eslint-config-prettier index.js test/index.js</code> exit codes 0-no problems found 1- Unexpected error 2- rules 冲突</p><h3 id="配置-eslintrc-json" tabindex="-1">配置 .eslintrc.json <a class="header-anchor" href="#配置-eslintrc-json" aria-hidden="true">#</a></h3><p><code>rules</code> 配置会覆盖 <code>extends</code> 里的</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">extends</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">react-app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">react-app/jest</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">some-other-config-you-use</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">prettier</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">rules</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">indent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="prettierrc-json" tabindex="-1">.prettierrc.json <a class="header-anchor" href="#prettierrc-json" aria-hidden="true">#</a></h3><p>也可以配置格式化相关的 <code>rules</code></p><h2 id="crlf-lf" tabindex="-1">CRLF &amp; LF <a class="header-anchor" href="#crlf-lf" aria-hidden="true">#</a></h2><p>如果团队要在 Mac 和 Window 环境进行开发，参考 <a href="/blog/developer/others/lineFeed.html">CRLF &amp; LF</a></p><h2 id="eslint-prettier-husky" tabindex="-1">ESLint &amp; Prettier &amp; Husky <a class="header-anchor" href="#eslint-prettier-husky" aria-hidden="true">#</a></h2><p>如果希望配置一个相对完善的，可以用在其他项目的 代码检查和格式化 蓝本，包括 ESLint &amp; Prettier &amp; Husky 功能，应该考虑如下几点</p><ol><li>ESLint 希望尽量让 Prettier 来进行格式化，但是 Prittier 缺少报错提示功能</li><li>Prettier 只进行自动格式化，不会进行报错提示</li><li>Husky 对 git</li></ol><p>需要配置的文件</p><ul><li>package.json</li><li>.eslintrc.js</li><li>.prettierrc.js</li><li>.eslintignore</li><li>.prettierignore</li></ul>`,24),r=[a];function i(p,o,c,d,h,D){return n(),s("div",null,r)}const y=e(l,[["render",i]]);export{F as __pageData,y as default};

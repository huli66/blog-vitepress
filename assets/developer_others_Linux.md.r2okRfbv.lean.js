import{_ as s,c as e,a2 as a,o as l}from"./chunks/framework.DOgdC_ou.js";const k=JSON.parse('{"title":"Linux 基础入门","description":"","frontmatter":{"title":"Linux 基础入门","lastUpdated":true},"headers":[],"relativePath":"developer/others/Linux.md","filePath":"developer/others/Linux.md","lastUpdated":1729515322000}'),t={name:"developer/others/Linux.md"};function d(n,i,o,p,c,h){return l(),e("div",null,i[0]||(i[0]=[a(`<h1 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h1><p>今天想删除服务器里的老版本 <code>nginx</code> ，但是误删了 <code>/lib64</code> 目录...</p><p>还好是部门新搞的测试服务器，没有太大问题，最后重新搞了一个服务器，还是要学习一下 <code>Linux</code> 的常用命令</p><p><code>rm -rf</code> 命令能不用就别用，宁可多一些冗余文件...</p><p>Linux 是一种自由和开放源码的类 UNIX 操作系统，最初由芬兰人 Linux Torvalds 上大学时编写的...</p><p><strong>Linux 能运行主要的 UNIX 工具软件、应用程序和网络协议，支持 32 位和 64 位硬件，Linux 继承了 Unix 以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统</strong></p><h2 id="linux-和-centos" tabindex="-1">Linux 和 CentOS <a class="header-anchor" href="#linux-和-centos" aria-label="Permalink to &quot;Linux 和 CentOS&quot;">​</a></h2><p><code>Linux</code> 有很多发行版本，从性质上可以划分为由商业公司维护的商业版本和开源社区维护的免费版本 商业版以 <code>Redhat</code> 为代表，开源社区版则以 <code>Debian</code> 为代表，有着各自的特点，在不同领域发挥作用</p><p><strong>Linux PC 上使用的核心命令大多数在 Mac 上也可以使用</strong></p><p><code>CentOS</code> 基于 <code>RHEL</code> ，目前是企业 IT 界使用最广泛的，社区支持的 企业级操作系统，于 2004 年发布，命令行人性化，具有高度的可定制性、安全性、稳定性</p><p><code>Ubuntu</code> 基于 <code>Debian</code> 架构，有着完善的包管理系统、漂亮的用户界面、丰富的社区，对大多数硬件有着良好兼容，有着极多的个人和专业用户，但是图形界面占用内存非常大，内存越大 <code>VPS(Virtual Private Server 虚拟专用服务器)</code> 价格越高，从这一点来讲，<code>Ubuntu</code> 并没有在 <code>VPS</code> 安装的操作系统选择之列</p><p>所以工作上来说，大部分公司的服务器都是 CentOS 系统的（浅薄了解），个人机器上安装可以选择 Ubuntu 体验更好</p><table tabindex="0"><thead><tr><th>Ubuntu</th><th>CentOS</th></tr></thead><tbody><tr><td>基于 Debian 架构</td><td>基于 RHEL 架构</td></tr><tr><td>经常更新</td><td>几乎没有更新</td></tr><tr><td>没有 cPanel 支持</td><td>支持 cPanle / WHM</td></tr><tr><td>更大的用户和开发人员社区</td><td>较小的用户和开发人员社区</td></tr><tr><td>以教程和免费的指南提供更多的帮助</td><td>提供的帮助较少</td></tr><tr><td>对于之前使用过 Ubuntu 桌面的初学者来说更容易学习</td><td>由于 RHEL 发布的桌面发行版不多，初学者入手比较困难</td></tr><tr><td><strong>使用 apt-get 包管理器安装 .deb 包</strong></td><td><strong>使用 yum 包管理器安装的 .rpm</strong></td></tr><tr><td></td><td></td></tr></tbody></table><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Linux 的发行版</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Linux 内核</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Debian</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Ubuntu</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">      -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Linux Mint</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Fedora</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RHEL</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">      -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CentOS</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">      -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Oracle Linux</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SUSE</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SLES</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">      -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> openSUSE</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 其他发行版</span></span></code></pre></div><h2 id="linux-系统目录结构" tabindex="-1">Linux 系统目录结构 <a class="header-anchor" href="#linux-系统目录结构" aria-label="Permalink to &quot;Linux 系统目录结构&quot;">​</a></h2><ul><li><p>/bin: Binaries（二进制文件）存放最常用命令</p></li><li><p>/boot: 启动 Linux 时使用的一些核心文件，包括一些连接文件和镜像文件</p></li><li><p>/dev: Device（设备）的缩写，存放 Linux 的外部设备，在 Linux 中访问设备的方式和访问文件是相同的</p></li><li><p>/etc: Etcetera 存放所有的系统管理所需要的配置文件和子目录</p></li><li><p>/home: 用户的主目录，每个用户都拥有一个自己的目录，一般以用户名命名，例如 <code>/home/alice</code> <code>/home/bob</code></p></li><li><p>/lib: Library 存放系统最基本的动态链接共享库，类似于 Windows 的 DLL 文件，几乎所有的应用程序都要用的这些共享库</p></li><li><p>/lost+found: 一般是空的，系统非法关机后这里就会存放一些东西</p></li><li><p>/media: 系统会自动识别一些设备，如 U 盘、光驱等，然后挂载到这个目录下</p></li><li><p>/mnt: 系统提供该目录是为了让用户临时挂载别的文件系统的，可以把硬盘或者光驱挂载到 /mnt 上，然后就可以进入该目录查看内容了</p></li><li><p>/opt: optinal（可选）给主机额外安装软件所摆放的目录，默认是空的</p></li><li><p>/proc: Processes（进程）是一中伪文件系统（虚拟文件系统），存储当前内核运行状态的一系列特殊文件，是系统内存的映射，可以直接访问这个目录来获取系统信息，<strong>这个目录的内容不在硬盘上而是在内存中，可以直接修改里面的某些文件</strong></p></li><li><p>/root: 系统管理员的用户主目录</p></li><li><p>/sbin: Superuser Binaries，系统管理员使用的系统管理程序</p></li><li><p>/selinux: Redhat/CentOS 所特有的目录，存放安全机制（类似 Windows 防火墙）相关文件</p></li><li><p>/srv: 存放服务启动之后需要提取的数据</p></li><li><p>/sys: <strong>内核设备树的一个直观映射，集成了针对进程信息的 proc 文件系统、针对设备的 devfs 文件系统、针对伪终端的 devpts 文件系统</strong></p></li><li><p>/tmp: temporary（临时）这个目录是用于存放一些临时文件的</p></li><li><p>/usr: unix shared resources（共享资源）的缩写，非常重要，很多应用程序和文件都放在这个目录下，类似 windows 的 program files</p></li><li><p>/usr/bin: 系统用户使用的应用程序</p></li><li><p>/usr/sbin: 超级用户使用的比较高级的管理程序和系统守护程序</p></li><li><p>/usr/src: 内核源代码默认的放置目录</p></li><li><p>/var: variable（变量）存放着不断扩充的东西，习惯将经常被修改的目录放在这里，比如各种日志文件</p></li><li><p>/run: 一个临时文件系统，存储系统启动以来的信息，当系统重启时里面的文件应该被清除，如果系统上有 <code>/var/run</code> 目录，应该让其指向 <code>/run</code></p></li><li><p>系统启动必须 <code>/boot</code> <code>/etc</code> <code>/lib</code> <code>/sys</code></p></li><li><p>指令集合 <code>/bin</code> <code>/sbin</code></p></li><li><p>外部文件管理 <code>/dev</code> <code>/media</code> <code>/mnt</code></p></li><li><p>临时文件 <code>/run</code> <code>/lost+found</code> <code>/tmp</code></p></li><li><p>账户 <code>/root</code> <code>/home</code> <code>/usr</code> <code>/usr/bin</code> <code>/usr/sbin</code> <code>/usr/src</code></p></li><li><p>运行过程中要用 <code>/var</code> <code>/proc</code></p></li><li><p>扩展 <code>/opt</code> <code>/srv</code></p></li></ul><h2 id="linux-文件和目录管理" tabindex="-1">Linux 文件和目录管理 <a class="header-anchor" href="#linux-文件和目录管理" aria-label="Permalink to &quot;Linux 文件和目录管理&quot;">​</a></h2><h3 id="查看权限和属性" tabindex="-1">查看权限和属性 <a class="header-anchor" href="#查看权限和属性" aria-label="Permalink to &quot;查看权限和属性&quot;">​</a></h3><p>使用 <code>ll</code> 或者 <code>ls -l</code> 命令，显示当前目录下所有文件的属性和所属用户、组</p><p>第一个字符代表文件类型是目录、文件、连接文件等</p><ul><li><code>d</code> 目录</li><li><code>-</code> 文件</li><li><code>l</code> 链接文档</li><li><code>b</code> 可供存储的接口设备(可随机存取装置)</li><li><code>c</code> 串行端口设备，如键盘鼠标等(一次性读取装置) 接下来 9 个字符，以 3 个为一组，<code>r</code> 代表可读（read），<code>w</code> 代表可写（write），<code>x</code> 代表可执行（execute），这三个权限的位置不会改变，没有权限则显示 <code>-</code> 顺序是 <strong>owner/group/others</strong> 即 user permissions、 group permissions、 other(everyon) permissions</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 或者 ll</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">total</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 文件总数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dr-xrwx-wx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4096</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> last-modified-date</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filename</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 类型 属主权限 属组权限 其他用户权限 硬链接数 属主 属组 size 修改时间 文件名及其指向</span></span></code></pre></div><p>Linux 系统中用户是按组分类的，一个用户可以属于一个或多个组 对于文件所有者以外的用户可以分为文件所属组的同组用户和其他用户，因此有三种权限 <strong>属主权限、属组权限（同组用户）、其他用户权限</strong></p><p><strong>对于 root 用户来说，文件的权限一般对其不起作用</strong></p><h3 id="修改权限和属性" tabindex="-1">修改权限和属性 <a class="header-anchor" href="#修改权限和属性" aria-label="Permalink to &quot;修改权限和属性&quot;">​</a></h3><ul><li>chgrp 更改文件属组</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chgrp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-R] 属组名 文件名</span></span></code></pre></div><p><code>-R</code>: 递归更改，也就是加上 <code>-R</code> 参数则该目录下的所有文件的属组都会更改</p><ul><li>chown 更改文件属主，也可以同时更改文件属组</li></ul><div class="tip custom-block"><p class="custom-block-title">注意</p><p>chown 更改文件属主和属组时，如果属主并不属于该属组呢，或者只更改属主（另一个组的用户）会出现什么情况呢</p></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-R] 属主名 文件名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-R] 属主名:属组名 文件名</span></span></code></pre></div><ul><li>chmod 更改文件 9 个属性</li></ul><p>可以设置符号也可以设置数字，每种权限对应的分数如下，每组的值为权限分累加 <strong><code>r:4</code> <code>w:2</code> <code>x:1</code> <code>-:0</code></strong></p><p>rwxrwx--- ====&gt; (4+2+1=7)(4+2+1=7)(0+0+0=0)</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 指定文件属性改为 rwxrwx---</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-R] 770 文件或目录</span></span></code></pre></div><p>设置符号方式 <strong><code>u:user</code> <code>g:group</code> <code>o:other</code> <code>a:all</code></strong><strong><code>+(加入权限)</code> <code>-(移除权限)</code> <code>=(设定权限为)</code></strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 权限设为 -rwxr-xr--</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> u=rwx,g=rx,o=r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filename</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 拿掉所有人的可执行权限</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a-x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filename</span></span></code></pre></div><h3 id="处理目录的常用命令" tabindex="-1">处理目录的常用命令 <a class="header-anchor" href="#处理目录的常用命令" aria-label="Permalink to &quot;处理目录的常用命令&quot;">​</a></h3><ul><li>绝对路径：从根目录 <code>/</code> 写起</li><li>相对路径：不从 <code>/</code> 写起，而是使用 <code>./</code> <code>../</code> 等</li><li><code>ls</code>: list files 列出目录及文件名 <ul><li><code>-a</code>: 全部文件，包括隐藏文件</li><li><code>-d</code>: 仅目录本身，而不是列出目录的文件数据</li><li><code>-l</code>: 长数据串列出，包含文件的属性与权限等 <code>ls -dl # 列出目录本身的属性</code></li></ul></li><li><code>cd</code>: change directory 切换目录</li><li><code>pwd</code>: print work directory 显示目前的目录 <ul><li><code>-P</code>: 显示确实的路劲，而非链接路径</li></ul></li><li><code>mkdir</code>: make directory 创建一个新的目录 <ul><li><code>-p</code>: 递归创建 <code>mkdir -p test1/test2/test3</code>，创建嵌套目录</li><li><code>-m</code>: 带权限创建 <code>mkdir -m 770 test</code></li></ul></li><li><code>rmdir</code>: remove directory 删除一个空的目录 <ul><li><code>-p</code>: 一次删除多级空目录 <code>rmdir -p test1/test2/test3</code></li></ul></li><li><code>cp</code>: copy file 复制文件或目录</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-adfilprsu] source target</span></span></code></pre></div><ul><li><code>rm</code>: remove 删除文件或目录 <ul><li><code>-f</code>: 强制删除</li><li><code>-i</code>: 互动模式，删除前询问</li><li><code>-r</code>: 递归删除</li></ul></li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-fir] filename</span></span></code></pre></div><ul><li><code>mv</code>: move file 移动文件与目录，或修改文件与目录名称</li><li><code>touch</code>: 生成文件</li></ul><h3 id="查看文件内容" tabindex="-1">查看文件内容 <a class="header-anchor" href="#查看文件内容" aria-label="Permalink to &quot;查看文件内容&quot;">​</a></h3><ul><li><code>cat</code>: 从第一行开始查看 <ul><li><code>-b</code>: 列出非空白行行号</li><li><code>-v</code>: 列出一些看不出来的字符</li><li><code>-E</code>: 结尾的断行字节 $ 显示出来</li><li><code>-T</code>: 将 tab 显示为 ^l</li><li><code>-A</code>: 相当于 -vET 的整合</li><li><code>-n</code>: 列出行号（包括空白行）</li></ul></li><li><code>tac</code></li><li><code>nl</code></li><li><code>more</code></li><li><code>less</code></li><li><code>head</code></li><li><code>tail</code></li></ul><h2 id="vim" tabindex="-1">vim <a class="header-anchor" href="#vim" aria-label="Permalink to &quot;vim&quot;">​</a></h2><ul><li>命令模式 Command mode：刚开始启动 vi/vim 就进入命令模式，其他模式中按下 <code>esc</code> 进入，也叫一般模式</li><li>输入模式 Insert mode：按 <code>i</code> 进入输入模式</li><li>底线命令模式 Last line mode：按 <code>:</code> 英文冒号进入 <ul><li><code>q</code>: quit 退出，不保存</li><li><code>w</code>: write 保存文件，写入到硬盘</li><li><code>q!</code>: 强制退出，有修改又不想保存时使用，等同于<code>ZQ</code></li><li><code>w!</code>: 属性为只读时强制写入，但是不一定成功</li><li><code>wq</code>: 保存退出，也可以加 <code>!</code>，等同于 <code>ZZ</code></li><li><code>w [filename]</code>: 保存成另一个文档，另存为</li><li><code>r [filename]</code>: 读入另一个文档，将其内容添加到游标后</li><li><code>! command</code>: 暂时离开 vi 到指令行模式执行 command 的显示结果</li><li><code>set nu</code>: 显示行号</li><li><code>set nonu</code>: 取消行号</li></ul></li></ul><h2 id="yum-命令" tabindex="-1">yum 命令 <a class="header-anchor" href="#yum-命令" aria-label="Permalink to &quot;yum 命令&quot;">​</a></h2><p>yum(Yellow dog Updater, Modified) 是 Fedora 和 RedHat 以及 SUSE 中的 Shell 前端软件包管理器 基于 RPM 包管理，能够从指定的服务器自动下载 RPM 包并且按照，可以自动处理依赖关系并一次行安装所有依赖的软件包</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [options] [command] [package ...]</span></span></code></pre></div><ul><li>options: 可选项，<code>-h</code> 帮助， <code>-y</code> 当安装过程提示选择全部为 yes，<code>-q</code> 不显示安装过程</li><li>command: 要进行的操作</li><li>package: 包名</li></ul><h3 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h3><ul><li><code>yum check-update</code>: 列出所有可更新的软件，或者指定某一个包的可更新</li><li><code>yum update</code>: 更新所有软件，或者指定更新一个包</li><li><code>yum install &lt;package_name&gt;</code>: 安装指定包</li><li><code>yum list</code>: 列出所有可按照的软件，或者可按照的指定软件</li><li><code>yum search &lt;keyword&gt;</code>: 查找软件包</li><li><code>yum remove &lt;package_name&gt;</code>: 删除软件包</li><li><code>yum clean packages</code>: 清除缓存目录下的软件包</li><li><code>yum clean headers</code>: 清除缓存目录下的 headers</li><li><code>yum clean oldheaders</code>: 清除缓存目录下的旧的 headers</li><li><code>yum clean, yum clean all(= yum clean packages; yum clean oldheaders)</code>: 清除缓存目录下的软件包及旧的 headers</li></ul><h3 id="换源" tabindex="-1">换源 <a class="header-anchor" href="#换源" aria-label="Permalink to &quot;换源&quot;">​</a></h3><p>可以换成国内的源，ali，网易（163），等</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 备份原来的源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/yum.repos.d/CentOS-Base.repo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/yum.repos.d/CentOS-Base.repo.backup</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载对应版本的 repo 文件，放入 /etc/yum.repos.d/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://mirrors.163.com/.help/CentOs7-Base-163.repo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CentOS7-Base-163.repo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CentOS-Base.repo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成缓存</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> makecache</span></span></code></pre></div><h2 id="apt-命令" tabindex="-1">apt 命令 <a class="header-anchor" href="#apt-命令" aria-label="Permalink to &quot;apt 命令&quot;">​</a></h2><p>apt(Advanced Packaging Tool) 是一个在 Debian 和 Ubuntu 中的 Shell 前端软件包管理器 <strong>执行 apt 命令需要超级管理员权限（root）</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [options] [command] [package ...]</span></span></code></pre></div><p>参数和 yum 一样</p><h3 id="常用命令-1" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令-1" aria-label="Permalink to &quot;常用命令&quot;">​</a></h3><ul><li><code>sudo apt update</code>: 列出所有可更新软件清单，或者更新指定包</li><li><code>sudo apt upgrade</code>: 升级软件包</li><li><code>sudo apt full-upgrade</code>: 升级软件包，升级前删除需要更新的包</li><li><code>sudo apt list --upgradeable</code>: 列出可更新的软件包及版本信息</li><li><code>sudo apt install &lt;package_2&gt; &lt;/package_2&gt;</code>: 安装一个或多个包</li><li><code>sudo apt show &lt;package_name&gt;</code>: 显示软件包信息，大小、版本、依赖等</li><li><code>sudo apt remove &lt;package_name&gt;</code>: 删除指定包</li><li><code>sudo apt autoremove</code>: 清理不再使用的依赖和库文件</li><li><code>sudo apt purge &lt;package_name&gt;</code>: 移除软件包及配置文件</li><li><code>sudo apt search &lt;keyword&gt;</code>: 查找软件包</li><li><code>sudo apt list --installed</code>: 列出所有已安装包</li><li><code>sudo apt list --all-versions</code>: 列出所有已安装包的版本信息</li></ul><p>参考 1.<a href="https://blog.csdn.net/hello_1995/article/details/126582596" target="_blank" rel="noreferrer">Linux 系统之 CentOS 和 Ubuntu 的区别</a> 2.<a href="https://www.runoob.com/linux/linux-system-contents.html" target="_blank" rel="noreferrer">Linux 系统目录结构</a> 3.<a href="https://www.runoob.com/linux/linux-command-manual.html" target="_blank" rel="noreferrer">Linux 命令大全</a></p>`,63)]))}const u=s(t,[["render",d]]);export{k as __pageData,u as default};

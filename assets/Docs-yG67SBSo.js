import{_ as y,p as w,c as S,a as d,e,b as s,w as n,u as i,k as a,o as p,d as _,f as m,g as u,h,F as v,r as b,n as k,I as x,t as r,s as M,A as P}from"./index-fNRHFKBu.js";const Q={class:"flex gap-6"},B={class:"hidden w-64 shrink-0 lg:block"},C={class:"sticky top-20"},D={class:"space-y-1"},A=["onClick"],L={class:"mb-4 w-full lg:hidden"},N=["value"],H={class:"min-w-0 flex-1"},I={class:"flex items-start justify-between"},q={class:"text-sm text-muted-foreground"},R={class:"flex items-center gap-2"},W={class:"prose prose-slate max-w-none dark:prose-invert"},j=["innerHTML"],T={__name:"Docs",setup(z){const o=w("getting-started"),g=[{id:"getting-started",title:"快速开始",icon:"mdi:rocket-launch",description:"快速了解 fscan 的基本使用方法"},{id:"build-constraints",title:"构建约束",icon:"mdi:hammer-wrench",description:"了解如何使用构建约束定制编译"},{id:"plugins",title:"插件系统",icon:"mdi:puzzle",description:"插件架构和开发指南"},{id:"configuration",title:"配置说明",icon:"mdi:cog",description:"参数配置和使用技巧"},{id:"faq",title:"常见问题",icon:"mdi:help-circle",description:"常见问题解答"}],f={"getting-started":{title:"快速开始",description:"快速了解 fscan 的基本使用方法",icon:"mdi:rocket-launch",content:`
      <h2>简介</h2>
      <p>fscan 是一款功能强大的内网综合扫描工具，支持主机存活探测、端口扫描、服务识别、Web指纹识别、漏洞扫描、密码爆破等功能。</p>

      <h2>安装</h2>
      <h3>下载预编译版本</h3>
      <p>访问 <a href="https://github.com/shadow1ng/fscan/releases" target="_blank">GitHub Releases</a> 下载最新版本。</p>

      <h3>从源码编译</h3>
      <pre><code>git clone https://github.com/shadow1ng/fscan.git
cd fscan
go build</code></pre>

      <h2>基本使用</h2>
      <h3>扫描单个主机</h3>
      <pre><code>fscan -h 192.168.1.1</code></pre>

      <h3>扫描网段</h3>
      <pre><code>fscan -h 192.168.1.0/24</code></pre>

      <h3>指定端口</h3>
      <pre><code>fscan -h 192.168.1.1 -p 80,443,8080-8090</code></pre>

      <h3>完整扫描</h3>
      <pre><code>fscan -h 192.168.1.0/24 -np -no -nopoc</code></pre>

      <h2>输出选项</h2>
      <pre><code># 保存到文件
fscan -h 192.168.1.0/24 -o result.txt

# JSON 格式输出
fscan -h 192.168.1.0/24 -json output.json</code></pre>

      <h2>下一步</h2>
      <p>查看 <strong>配置说明</strong> 了解更多参数选项，或查看 <strong>插件系统</strong> 了解如何扩展功能。</p>
    `},"build-constraints":{title:"构建约束",description:"了解如何使用构建约束定制编译",icon:"mdi:hammer-wrench",content:`
      <h2>什么是构建约束？</h2>
      <p>构建约束（Build Constraints）允许你在编译时选择性地包含或排除特定功能模块。通过 Go 的构建标签（build tags），你可以编译出只包含所需功能的精简版本。</p>

      <h2>编译模式</h2>
      <h3>完整编译（默认）</h3>
      <pre><code>go build</code></pre>
      <p>包含所有插件，可执行文件约 15-20 MB。</p>

      <h3>选择性编译</h3>
      <pre><code>go build -tags "plugin_selective,plugin_ssh,plugin_mysql"</code></pre>
      <p>只包含 SSH 和 MySQL 插件，可减小 40-60% 体积。</p>

      <h2>插件标签</h2>
      <h3>服务类插件</h3>
      <ul>
        <li><code>plugin_ssh</code> - SSH 服务扫描</li>
        <li><code>plugin_mysql</code> - MySQL 服务扫描</li>
        <li><code>plugin_redis</code> - Redis 服务扫描</li>
        <li><code>plugin_mongodb</code> - MongoDB 服务扫描</li>
        <li><code>plugin_postgresql</code> - PostgreSQL 服务扫描</li>
        <li>更多插件请参考<strong>插件系统</strong>文档</li>
      </ul>

      <h3>Web 插件</h3>
      <ul>
        <li><code>plugin_webtitle</code> - Web 标题获取（~0MB）</li>
        <li><code>plugin_webpoc</code> - Web 漏洞扫描（~6MB）</li>
      </ul>

      <h3>本地插件</h3>
      <ul>
        <li><code>plugin_systeminfo</code> - 系统信息收集</li>
        <li><code>plugin_keylogger</code> - 键盘记录</li>
        <li><code>plugin_reverseshell</code> - 反弹 Shell</li>
      </ul>

      <h2>编译示例</h2>
      <h3>最小化扫描工具</h3>
      <pre><code>go build -tags "plugin_selective,plugin_ssh,plugin_ftp,plugin_telnet" -o fscan_mini</code></pre>

      <h3>Web 专用扫描器</h3>
      <pre><code>go build -tags "plugin_selective,plugin_webtitle,plugin_webpoc" -o fscan_web</code></pre>

      <h3>后渗透工具包</h3>
      <pre><code>go build -tags "plugin_selective,plugin_systeminfo,plugin_keylogger,plugin_reverseshell" -o fscan_post</code></pre>

      <h2>使用构建配置器</h2>
      <p>访问 <strong>构建</strong> 页面使用可视化构建配置器，自动生成编译命令。</p>
    `},plugins:{title:"插件系统",description:"插件架构和开发指南",icon:"mdi:puzzle",content:`
      <h2>插件架构</h2>
      <p>fscan 采用模块化插件架构，每个扫描功能都是独立的插件。</p>

      <h2>插件分类</h2>
      <h3>1. 服务类插件 (plugins/services)</h3>
      <p>用于扫描和识别网络服务：</p>
      <ul>
        <li><strong>数据库</strong>: MySQL, Redis, MongoDB, PostgreSQL, Oracle, MSSQL</li>
        <li><strong>远程访问</strong>: SSH, RDP, VNC, Telnet</li>
        <li><strong>文件共享</strong>: SMB, FTP, Rsync</li>
        <li><strong>消息队列</strong>: RabbitMQ, Kafka, ActiveMQ</li>
        <li><strong>其他</strong>: LDAP, SMTP, Elasticsearch, Neo4j, Cassandra</li>
      </ul>

      <h3>2. Web 插件 (plugins/web)</h3>
      <ul>
        <li><strong>webtitle</strong>: 获取 Web 页面标题和指纹</li>
        <li><strong>webpoc</strong>: Web 漏洞扫描（POC 检测）</li>
      </ul>

      <h3>3. 本地插件 (plugins/local)</h3>
      <p>后渗透和权限维持功能：</p>
      <ul>
        <li><strong>信息收集</strong>: systeminfo, envinfo, fileinfo, avdetect</li>
        <li><strong>远程控制</strong>: reverseshell, forwardshell, socks5proxy</li>
        <li><strong>权限维持</strong>: crontask, systemdservice, winservice, winstartup</li>
        <li><strong>凭证获取</strong>: minidump, keylogger</li>
        <li><strong>工具</strong>: downloader, cleaner</li>
      </ul>

      <h2>插件开发指南</h2>
      <h3>基础结构</h3>
      <pre><code>//go:build plugin_myservice || !plugin_selective

package services

import (
    "context"
    "github.com/shadow1ng/fscan/common"
    "github.com/shadow1ng/fscan/plugins"
)

type MyServicePlugin struct {
    plugins.BasePlugin
}

func NewMyServicePlugin() *MyServicePlugin {
    return &MyServicePlugin{
        BasePlugin: plugins.NewBasePlugin("myservice"),
    }
}

func (p *MyServicePlugin) Scan(ctx context.Context, info *common.HostInfo) error {
    // 实现扫描逻辑
    return nil
}

func init() {
    plugins.RegisterServicePlugin("myservice", func() plugins.ServicePlugin {
        return NewMyServicePlugin()
    })
}</code></pre>

      <h3>关键要点</h3>
      <ul>
        <li>添加构建标签: <code>//go:build plugin_xxx || !plugin_selective</code></li>
        <li>继承 <code>BasePlugin</code></li>
        <li>实现 <code>Scan()</code> 方法</li>
        <li>在 <code>init()</code> 中注册插件</li>
      </ul>

      <h2>构建标签说明</h2>
      <p>构建标签格式: <code>//go:build plugin_name || !plugin_selective</code></p>
      <ul>
        <li><strong>完整编译</strong>: 不指定标签，所有插件都会被包含</li>
        <li><strong>选择性编译</strong>: 指定 <code>plugin_selective</code> 后，只包含明确指定的插件</li>
      </ul>
    `},configuration:{title:"配置说明",description:"参数配置和使用技巧",icon:"mdi:cog",content:`
      <h2>命令行参数</h2>
      <p>访问 <strong>参数</strong> 页面使用可视化参数配置器。</p>

      <h2>目标配置</h2>
      <pre><code># 单个 IP
fscan -h 192.168.1.1

# CIDR 网段
fscan -h 192.168.1.0/24

# IP 范围
fscan -h 192.168.1.1-192.168.1.254

# 从文件读取
fscan -hf targets.txt</code></pre>

      <h2>端口配置</h2>
      <pre><code># 指定端口
fscan -h 192.168.1.1 -p 80,443,3306

# 端口范围
fscan -h 192.168.1.1 -p 1-65535

# 跳过端口扫描
fscan -h 192.168.1.1 -np</code></pre>

      <h2>认证配置</h2>
      <pre><code># 指定用户名和密码
fscan -h 192.168.1.1 -user admin -pwd password

# 使用字典文件
fscan -h 192.168.1.1 -userf users.txt -pwdf passwords.txt

# 用户名:密码对
fscan -h 192.168.1.1 -upf credentials.txt</code></pre>

      <h2>输出配置</h2>
      <pre><code># 保存到文本文件
fscan -h 192.168.1.1 -o result.txt

# JSON 格式
fscan -h 192.168.1.1 -json output.json

# 设置日志级别
fscan -h 192.168.1.1 -log-level info</code></pre>

      <h2>性能优化</h2>
      <pre><code># 调整线程数
fscan -h 192.168.1.0/24 -t 100

# 调整超时时间
fscan -h 192.168.1.1 -time 3</code></pre>

      <h2>扫描控制</h2>
      <pre><code># 禁用 Ping 探测
fscan -h 192.168.1.0/24 -np

# 禁用端口扫描
fscan -h 192.168.1.1 -nopoc

# 指定扫描模块
fscan -h 192.168.1.1 -m ssh,mysql,redis</code></pre>
    `},faq:{title:"常见问题",description:"常见问题解答",icon:"mdi:help-circle",content:`
      <h2>编译相关</h2>
      <h3>Q: 如何减小可执行文件体积？</h3>
      <p>A: 使用选择性编译，只包含需要的插件：</p>
      <pre><code>go build -tags "plugin_selective,plugin_ssh,plugin_mysql" -ldflags "-s -w"</code></pre>

      <h3>Q: 编译时出现 "undefined" 错误？</h3>
      <p>A: 检查是否使用了 <code>plugin_selective</code> 但没有指定需要的插件标签。</p>

      <h2>使用相关</h2>
      <h3>Q: 扫描速度慢怎么办？</h3>
      <p>A: 可以通过以下方式优化：</p>
      <ul>
        <li>增加线程数: <code>-t 200</code></li>
        <li>减少超时时间: <code>-time 2</code></li>
        <li>跳过不需要的扫描: <code>-nopoc</code></li>
      </ul>

      <h3>Q: 如何只扫描特定服务？</h3>
      <p>A: 使用 <code>-m</code> 参数指定模块：</p>
      <pre><code>fscan -h 192.168.1.0/24 -m ssh,mysql,redis</code></pre>

      <h3>Q: 如何避免被防火墙拦截？</h3>
      <p>A: 可以：</p>
      <ul>
        <li>降低扫描速度: <code>-t 10</code></li>
        <li>增加延迟: <code>-time 5</code></li>
        <li>使用代理: <code>-proxy socks5://127.0.0.1:1080</code></li>
      </ul>

      <h2>插件开发</h2>
      <h3>Q: 如何添加自定义插件？</h3>
      <p>A: 参考<strong>插件系统</strong>文档，按照标准结构创建插件文件。</p>

      <h3>Q: 插件如何获取上下文信息？</h3>
      <p>A: 通过 <code>common.HostInfo</code> 结构体传递目标信息。</p>

      <h2>更多问题？</h2>
      <p>访问 <a href="https://github.com/shadow1ng/fscan/issues" target="_blank">GitHub Issues</a> 提交问题或查看已有讨论。</p>
    `}},l=S(()=>f[o.value]||f["getting-started"]);return(V,c)=>(p(),d("div",Q,[e("aside",B,[e("div",C,[s(i(a),null,{default:n(()=>[s(i(_),null,{default:n(()=>[s(i(m),{class:"text-base"},{default:n(()=>c[1]||(c[1]=[u("文档导航")])),_:1})]),_:1}),s(i(h),{class:"p-0"},{default:n(()=>[e("nav",D,[(p(),d(v,null,b(g,t=>e("button",{key:t.id,class:k(["flex w-full items-center gap-2 rounded-lg px-4 py-2 text-left text-sm transition-colors",o.value===t.id?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-accent hover:text-accent-foreground"]),onClick:$=>o.value=t.id},[s(i(x),{icon:t.icon,class:"text-lg"},null,8,["icon"]),u(" "+r(t.title),1)],10,A)),64))])]),_:1})]),_:1})])]),e("div",L,[s(i(a),null,{default:n(()=>[s(i(h),{class:"p-4"},{default:n(()=>[M(e("select",{"onUpdate:modelValue":c[0]||(c[0]=t=>o.value=t),class:"w-full rounded-lg border border-input bg-background px-3 py-2"},[(p(),d(v,null,b(g,t=>e("option",{key:t.id,value:t.id},r(t.title),9,N)),64))],512),[[P,o.value]])]),_:1})]),_:1})]),e("main",H,[s(i(a),null,{default:n(()=>[s(i(_),null,{default:n(()=>[e("div",I,[e("div",null,[s(i(m),{class:"mb-2 text-2xl"},{default:n(()=>[u(r(l.value.title),1)]),_:1}),e("p",q,r(l.value.description),1)]),e("div",R,[s(i(x),{icon:l.value.icon,class:"text-3xl text-primary"},null,8,["icon"])])])]),_:1}),s(i(h),null,{default:n(()=>[e("article",W,[e("div",{innerHTML:l.value.content},null,8,j)])]),_:1})]),_:1})])]))}},F=y(T,[["__scopeId","data-v-6282c1dd"]]);export{F as default};

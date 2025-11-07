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

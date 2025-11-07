<template>
  <div class="flex gap-6">
    <!-- 侧边栏导航 -->
    <aside class="hidden w-64 shrink-0 lg:block">
      <div class="sticky top-20">
        <Card>
          <CardHeader>
            <CardTitle class="text-base">文档导航</CardTitle>
          </CardHeader>
          <CardContent class="p-0">
            <nav class="space-y-1">
              <button
                v-for="doc in docCategories"
                :key="doc.id"
                class="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-left text-sm transition-colors"
                :class="
                  currentDoc === doc.id
                    ? 'bg-primary/10 font-medium text-primary'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                "
                @click="currentDoc = doc.id"
              >
                <Icon :icon="doc.icon" class="text-lg" />
                {{ doc.title }}
              </button>
            </nav>
          </CardContent>
        </Card>
      </div>
    </aside>

    <!-- 移动端文档选择 -->
    <div class="mb-4 w-full lg:hidden">
      <Card>
        <CardContent class="p-4">
          <select
            v-model="currentDoc"
            class="w-full rounded-lg border border-input bg-background px-3 py-2"
          >
            <option v-for="doc in docCategories" :key="doc.id" :value="doc.id">
              {{ doc.title }}
            </option>
          </select>
        </CardContent>
      </Card>
    </div>

    <!-- 主内容区 -->
    <main class="min-w-0 flex-1">
      <Card>
        <CardHeader>
          <div class="flex items-start justify-between">
            <div>
              <CardTitle class="mb-2 text-2xl">{{ currentDocData.title }}</CardTitle>
              <p class="text-sm text-muted-foreground">{{ currentDocData.description }}</p>
            </div>
            <div class="flex items-center gap-2">
              <Icon :icon="currentDocData.icon" class="text-3xl text-primary" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <article class="prose prose-slate max-w-none dark:prose-invert">
            <div v-html="currentDocData.content"></div>
          </article>
        </CardContent>
      </Card>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const currentDoc = ref('getting-started')

const docCategories = [
  {
    id: 'getting-started',
    title: '快速开始',
    icon: 'mdi:rocket-launch',
    description: '快速了解 fscan 的基本使用方法',
  },
  {
    id: 'build-constraints',
    title: '构建约束',
    icon: 'mdi:hammer-wrench',
    description: '了解如何使用构建约束定制编译',
  },
  {
    id: 'plugins',
    title: '插件系统',
    icon: 'mdi:puzzle',
    description: '插件架构和开发指南',
  },
  {
    id: 'configuration',
    title: '配置说明',
    icon: 'mdi:cog',
    description: '参数配置和使用技巧',
  },
  {
    id: 'api',
    title: 'API 文档',
    icon: 'mdi:api',
    description: 'RPC API 接口说明',
  },
  {
    id: 'faq',
    title: '常见问题',
    icon: 'mdi:help-circle',
    description: '常见问题解答',
  },
]

const docContents = {
  'getting-started': {
    title: '快速开始',
    description: '快速了解 fscan 的基本使用方法',
    icon: 'mdi:rocket-launch',
    content: `
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
    `,
  },
  'build-constraints': {
    title: '构建约束',
    description: '了解如何使用构建约束定制编译',
    icon: 'mdi:hammer-wrench',
    content: `
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
    `,
  },
  plugins: {
    title: '插件系统',
    description: '插件架构和开发指南',
    icon: 'mdi:puzzle',
    content: `
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
    `,
  },
  configuration: {
    title: '配置说明',
    description: '参数配置和使用技巧',
    icon: 'mdi:cog',
    content: `
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
    `,
  },
  api: {
    title: 'API 文档',
    description: 'RPC API 接口说明',
    icon: 'mdi:api',
    content: `
      <h2>RPC 服务</h2>
      <p>fscan 支持通过 RPC 接口进行远程调用。</p>

      <h2>启动 RPC 服务</h2>
      <pre><code>fscan -api 0.0.0.0:8888 -api-key your-secret-key</code></pre>

      <h2>API 端点</h2>
      <h3>POST /v1/startscan</h3>
      <p>启动扫描任务</p>
      <pre><code>curl -X POST http://localhost:8888/v1/startscan \\
  -H "Fscan-API-SECRET: your-secret-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "arg": ["-h", "192.168.1.0/24", "-np"]
  }'</code></pre>

      <h4>响应</h4>
      <pre><code>{
  "taskId": "uuid-string",
  "status": "running"
}</code></pre>

      <h3>POST /v1/getresults</h3>
      <p>获取扫描结果</p>
      <pre><code>curl -X POST http://localhost:8888/v1/getresults \\
  -H "Fscan-API-SECRET: your-secret-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "taskId": "uuid-string"
  }'</code></pre>

      <h4>响应</h4>
      <pre><code>{
  "taskId": "uuid-string",
  "finished": false,
  "total": 256,
  "end": 128,
  "results": [
    {
      "time": "2024-11-07 18:00:00",
      "type": "PORT",
      "target": "192.168.1.1:22",
      "status": "open",
      "details": {...}
    }
  ]
}</code></pre>

      <h2>认证</h2>
      <p>所有 API 请求都需要在 Header 中包含 API 密钥：</p>
      <pre><code>Fscan-API-SECRET: your-secret-key</code></pre>

      <h2>错误处理</h2>
      <p>API 使用标准 HTTP 状态码：</p>
      <ul>
        <li><strong>200</strong>: 成功</li>
        <li><strong>400</strong>: 请求参数错误</li>
        <li><strong>401</strong>: 认证失败</li>
        <li><strong>500</strong>: 服务器错误</li>
      </ul>
    `,
  },
  faq: {
    title: '常见问题',
    description: '常见问题解答',
    icon: 'mdi:help-circle',
    content: `
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

      <h2>API 相关</h2>
      <h3>Q: RPC 服务如何保证安全？</h3>
      <p>A: 建议：</p>
      <ul>
        <li>设置强 API 密钥</li>
        <li>只监听内网地址</li>
        <li>配合防火墙规则</li>
        <li>使用反向代理加 HTTPS</li>
      </ul>

      <h3>Q: 如何查看 API 调用日志？</h3>
      <p>A: 启动时设置日志级别：</p>
      <pre><code>fscan -api 0.0.0.0:8888 -api-key key -log-level debug</code></pre>

      <h2>插件开发</h2>
      <h3>Q: 如何添加自定义插件？</h3>
      <p>A: 参考<strong>插件系统</strong>文档，按照标准结构创建插件文件。</p>

      <h3>Q: 插件如何获取上下文信息？</h3>
      <p>A: 通过 <code>common.HostInfo</code> 结构体传递目标信息。</p>

      <h2>更多问题？</h2>
      <p>访问 <a href="https://github.com/shadow1ng/fscan/issues" target="_blank">GitHub Issues</a> 提交问题或查看已有讨论。</p>
    `,
  },
}

const currentDocData = computed(() => {
  return docContents[currentDoc.value] || docContents['getting-started']
})
</script>

<style scoped>
/* 文档内容样式 */
:deep(.prose) {
  color: hsl(var(--foreground));
}

:deep(.prose h2) {
  margin-top: 2em;
  margin-bottom: 1em;
  font-size: 1.5em;
  font-weight: 700;
  color: hsl(var(--foreground));
  border-bottom: 1px solid hsl(var(--border));
  padding-bottom: 0.3em;
}

:deep(.prose h3) {
  margin-top: 1.6em;
  margin-bottom: 0.6em;
  font-size: 1.25em;
  font-weight: 600;
  color: hsl(var(--foreground));
}

:deep(.prose p) {
  margin-top: 1em;
  margin-bottom: 1em;
  line-height: 1.75;
}

:deep(.prose a) {
  color: hsl(var(--primary));
  text-decoration: underline;
  text-decoration-color: hsl(var(--primary) / 0.3);
  transition: all 0.2s;
}

:deep(.prose a:hover) {
  text-decoration-color: hsl(var(--primary));
}

:deep(.prose code) {
  background: hsl(var(--muted));
  padding: 0.2em 0.4em;
  border-radius: 0.25rem;
  font-size: 0.875em;
  font-family: 'Courier New', monospace;
  color: hsl(var(--foreground));
}

:deep(.prose pre) {
  background: hsl(var(--muted));
  padding: 1em;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1.5em 0;
}

:deep(.prose pre code) {
  background: transparent;
  padding: 0;
  border-radius: 0;
  font-size: 0.875em;
}

:deep(.prose ul) {
  margin: 1em 0;
  padding-left: 1.5em;
  list-style-type: disc;
}

:deep(.prose ul li) {
  margin: 0.5em 0;
  line-height: 1.75;
}

:deep(.prose strong) {
  font-weight: 600;
  color: hsl(var(--foreground));
}
</style>

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
      <h2>设计背景：为什么需要构建约束</h2>

      <h3>问题一：二进制体积失控</h3>
      <p>fscan 包含 50+ 插件，完整编译的二进制文件达到 15-30 MB。在渗透测试场景中：</p>
      <ul>
        <li><strong>上传限制</strong>：某些漏洞利用链对文件大小有严格限制（如 10MB 以下）</li>
        <li><strong>带宽约束</strong>：通过慢速连接（如代理链）传输大文件耗时过长</li>
        <li><strong>隐蔽性需求</strong>：小文件更容易绕过流量检测和文件监控</li>
      </ul>

      <h3>问题二：功能需求差异化</h3>
      <p>不同渗透阶段对工具的需求完全不同：</p>
      <ul>
        <li><strong>信息收集阶段</strong>：只需要端口扫描和服务识别，不需要后渗透模块</li>
        <li><strong>横向移动阶段</strong>：只需要凭据爆破插件，不需要 Web 漏洞扫描</li>
        <li><strong>权限维持阶段</strong>：只需要后门和持久化插件，不需要网络扫描</li>
      </ul>
      <p>携带 50 个插件去只用 5 个功能是巨大的资源浪费。</p>

      <h3>问题三：安全与合规</h3>
      <ul>
        <li><strong>后渗透工具的敏感性</strong>：keylogger、reverseshell 等模块容易被安全软件标记</li>
        <li><strong>授权范围限制</strong>：某些渗透测试合同明确禁止使用某些攻击技术</li>
        <li><strong>最小权限原则</strong>：只编译授权使用的功能，避免法律风险</li>
      </ul>

      <h2>设计理念</h2>

      <h3>核心机制</h3>
      <p>fscan 使用 Go 的构建标签（build tags）实现编译时插件选择。每个插件文件都包含一个简单的标签：</p>
      <pre><code>//go:build plugin_xxx || !plugin_selective</code></pre>

      <p><strong>工作原理</strong>：</p>
      <ul>
        <li><strong>默认编译</strong>：不指定任何标签时，<code>!plugin_selective</code> 为真，所有插件都被包含</li>
        <li><strong>选择编译</strong>：指定 <code>-tags "plugin_selective,plugin_ssh"</code> 时，只有 SSH 插件被包含</li>
      </ul>

      <h3>为什么默认全包含？</h3>
      <ul>
        <li>新用户直接 <code>go build</code> 即可获得完整功能</li>
        <li>无需学习任何构建选项</li>
        <li>兼容现有的构建脚本和 CI/CD 流程</li>
      </ul>

      <h3>设计优势</h3>
      <ul>
        <li>无需配置文件，标签直接写在代码中</li>
        <li>插件之间零依赖，可以任意组合</li>
        <li>编译时决策，零运行时开销</li>
      </ul>

      <h2>插件分类</h2>

      <h3>1. 服务类插件（plugins/services）</h3>
      <p>用于网络服务扫描和凭据爆破：</p>
      <ul>
        <li><strong>体积</strong>：每个 0.1-0.5 MB</li>
        <li><strong>代表插件</strong>：SSH, MySQL, Redis, SMB, FTP, RDP, MongoDB 等</li>
        <li><strong>特点</strong>：插件之间零依赖，可任意组合</li>
      </ul>

      <h3>2. Web 插件（plugins/web）</h3>
      <p>Web 应用安全扫描模块：</p>
      <ul>
        <li><strong>webtitle</strong>：Web 指纹识别（体积增加 ~0 MB）</li>
        <li><strong>webpoc</strong>：Web 漏洞扫描（体积增加 ~6 MB，包含 POC 数据库）</li>
      </ul>
      <p>两个插件独立，可根据需求单独选择。</p>

      <h3>3. 本地插件（plugins/local）</h3>
      <p>后渗透和权限维持功能：</p>
      <ul>
        <li><strong>典型插件</strong>：systeminfo, keylogger, reverseshell, persistence</li>
        <li><strong>注意</strong>：这些功能较为敏感，建议根据授权范围选择性编译</li>
      </ul>

      <h2>使用场景</h2>

      <h3>场景一：最小化部署</h3>
      <p>适用于文件大小受限的环境（如通过漏洞上传）：</p>
      <pre><code>go build -tags "plugin_selective,plugin_ssh,plugin_mysql,plugin_redis,plugin_smb"</code></pre>
      <p>二进制体积 < 5MB，包含基础服务扫描。</p>

      <h3>场景二：Web 渗透测试</h3>
      <p>只需要 Web 应用扫描功能：</p>
      <pre><code>go build -tags "plugin_selective,plugin_webtitle,plugin_webpoc"</code></pre>
      <p>二进制体积 ~10MB。</p>

      <h3>场景三：合规性要求</h3>
      <p>排除敏感的后渗透功能：</p>
      <pre><code>go build -tags "plugin_selective,plugin_ssh,plugin_mysql,plugin_webtitle"</code></pre>
      <p>不包含 keylogger、reverseshell 等敏感模块。</p>

      <h3>场景四：完整功能</h3>
      <p>本地测试或完整授权的项目：</p>
      <pre><code>go build</code></pre>
      <p>包含所有插件，二进制 15-30 MB。</p>

      <h2>体积对比</h2>

      <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background: #f5f5f5;">
            <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">编译配置</th>
            <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">包含插件</th>
            <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">体积</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">完整编译</td>
            <td style="padding: 10px; border: 1px solid #ddd;">全部 50+ 插件</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>15-30 MB</strong></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">基础服务扫描</td>
            <td style="padding: 10px; border: 1px solid #ddd;">SSH + MySQL + Redis + SMB</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>~5 MB</strong> (-67%)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Web 专用</td>
            <td style="padding: 10px; border: 1px solid #ddd;">webtitle + webpoc</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>~10 MB</strong> (-50%)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">极简版</td>
            <td style="padding: 10px; border: 1px solid #ddd;">仅 SSH</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>< 3 MB</strong> (-90%)</td>
          </tr>
        </tbody>
      </table>

      <h2>快速开始</h2>
      <p>访问 <strong>构建配置器</strong> 页面，通过可视化界面选择所需插件，自动生成编译命令。无需记忆任何标签名称。</p>
    `,
  },
  plugins: {
    title: '插件系统',
    description: '插件架构和开发指南',
    icon: 'mdi:puzzle',
    content: `
      <h2>设计目标</h2>
      <p>fscan 的插件系统旨在实现：</p>
      <ul>
        <li><strong>零依赖</strong>：插件之间完全解耦，可以任意组合</li>
        <li><strong>易扩展</strong>：添加新插件不需要修改核心代码</li>
        <li><strong>可裁剪</strong>：通过构建标签实现编译时选择</li>
        <li><strong>统一接口</strong>：所有插件遵循相同的调用规范</li>
      </ul>

      <h2>架构设计</h2>

      <h3>分层结构</h3>
      <p>fscan 采用三层插件架构：</p>
      <ul>
        <li><strong>核心层</strong>：插件注册表和调度器</li>
        <li><strong>接口层</strong>：统一的插件接口定义</li>
        <li><strong>实现层</strong>：具体的插件实现</li>
      </ul>

      <h3>注册机制</h3>
      <p>插件采用<strong>自注册模式</strong>：</p>
      <ul>
        <li>每个插件在 <code>init()</code> 函数中向注册表注册自己</li>
        <li>核心层维护一个全局插件注册表</li>
        <li>运行时根据注册表动态调用插件</li>
      </ul>
      <p><strong>优势</strong>：核心代码不需要知道有哪些插件存在，添加新插件时零侵入。</p>

      <h3>接口设计</h3>
      <p>所有插件实现统一的接口：</p>
      <ul>
        <li><code>Scan(ctx, hostInfo)</code>：执行扫描逻辑</li>
        <li><code>Name()</code>：返回插件名称</li>
        <li><code>Priority()</code>：返回执行优先级</li>
      </ul>
      <p><strong>好处</strong>：调度器可以用相同的方式调用所有插件，不需要特殊处理。</p>

      <h2>插件分类</h2>

      <h3>1. 服务类插件（plugins/services）</h3>
      <p><strong>设计特点</strong>：网络协议扫描，体积小，无依赖</p>
      <ul>
        <li><strong>数据库</strong>：MySQL, Redis, MongoDB, PostgreSQL, Oracle, MSSQL</li>
        <li><strong>远程访问</strong>：SSH, RDP, VNC, Telnet</li>
        <li><strong>文件共享</strong>：SMB, FTP, Rsync</li>
        <li><strong>消息队列</strong>：RabbitMQ, Kafka, ActiveMQ</li>
        <li><strong>其他</strong>：LDAP, SMTP, Elasticsearch, Neo4j, Cassandra</li>
      </ul>

      <h3>2. Web 插件（plugins/web）</h3>
      <p><strong>设计特点</strong>：HTTP 协议专用，支持复杂的 Web 场景</p>
      <ul>
        <li><strong>webtitle</strong>：轻量级指纹识别</li>
        <li><strong>webpoc</strong>：重量级漏洞扫描（包含 POC 数据库）</li>
      </ul>

      <h3>3. 本地插件（plugins/local）</h3>
      <p><strong>设计特点</strong>：系统级操作，需要高权限</p>
      <ul>
        <li><strong>信息收集</strong>：systeminfo, envinfo, fileinfo, avdetect</li>
        <li><strong>远程控制</strong>：reverseshell, forwardshell, socks5proxy</li>
        <li><strong>权限维持</strong>：crontask, systemdservice, winservice, winstartup</li>
        <li><strong>凭证获取</strong>：minidump, keylogger</li>
        <li><strong>工具</strong>：downloader, cleaner</li>
      </ul>

      <h2>解耦设计</h2>

      <h3>编译时解耦</h3>
      <p>通过构建标签实现：</p>
      <ul>
        <li>每个插件独立声明构建条件</li>
        <li>不参与编译的插件代码完全不会被包含</li>
        <li>核心层无需知道哪些插件被编译</li>
      </ul>

      <h3>运行时解耦</h3>
      <p>通过注册表和接口实现：</p>
      <ul>
        <li>调度器只知道接口，不知道具体实现</li>
        <li>插件之间不相互引用</li>
        <li>可以动态增减插件而不影响其他模块</li>
      </ul>

      <h2>扩展性设计</h2>

      <h3>添加新插件的步骤</h3>
      <ol>
        <li>创建新的插件文件（如 <code>newservice.go</code>）</li>
        <li>添加构建标签 <code>//go:build plugin_newservice || !plugin_selective</code></li>
        <li>实现插件接口（继承 BasePlugin，实现 Scan 方法）</li>
        <li>在 <code>init()</code> 中注册插件</li>
      </ol>
      <p><strong>关键</strong>：无需修改任何现有代码，核心层会自动发现和调用新插件。</p>

      <h3>插件优先级控制</h3>
      <p>某些插件需要优先执行（如端口扫描），某些需要延后执行（如漏洞检测）。插件通过 <code>Priority()</code> 方法声明优先级，调度器按优先级排序后执行。</p>

      <h2>最小接口原则</h2>
      <p>插件接口只定义必需的方法：</p>
      <ul>
        <li><code>Scan()</code>：执行扫描（必须）</li>
        <li><code>Name()</code>：标识插件（必须）</li>
        <li><code>Priority()</code>：控制顺序（可选，默认值）</li>
      </ul>
      <p>不需要的功能（如配置验证、依赖声明）都不在接口中，保持接口简洁。</p>

      <h2>Context 机制</h2>
      <p>所有插件的 <code>Scan()</code> 方法接收 <code>context.Context</code> 参数：</p>
      <ul>
        <li><strong>超时控制</strong>：调度器可以设置全局超时</li>
        <li><strong>取消机制</strong>：用户中断时可以立即停止所有插件</li>
        <li><strong>资源清理</strong>：插件可以监听 Context 并优雅关闭</li>
      </ul>
      <p>这是 Go 标准的并发控制模式，无需自己实现信号机制。</p>

      <h2>设计权衡</h2>

      <h3>为什么用自注册而不是配置文件？</h3>
      <ul>
        <li>✅ 配置和代码在一起，不会出现不同步</li>
        <li>✅ 编译时检查，配置错误会导致编译失败</li>
        <li>✅ 无需解析配置文件，减少启动时间</li>
        <li>❌ 缺点：运行时无法动态加载插件</li>
      </ul>
      <p>fscan 是安全工具，稳定性优先于灵活性。</p>

      <h3>为什么插件不能相互调用？</h3>
      <ul>
        <li>避免循环依赖</li>
        <li>便于选择性编译（不需要依赖解析）</li>
        <li>插件失败不会影响其他插件</li>
      </ul>
      <p>如果多个插件需要共享功能，应该提取到 <code>common</code> 包中。</p>
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

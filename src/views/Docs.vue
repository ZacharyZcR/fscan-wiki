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
    id: 'logging',
    title: '日志系统',
    icon: 'mdi:text-box-outline',
    description: '日志架构和设计理念',
  },
  {
    id: 'output',
    title: '输出系统',
    icon: 'mdi:export',
    description: '输出格式和存储设计',
  },
  {
    id: 'scan-engine',
    title: '扫描引擎',
    icon: 'mdi:engine',
    description: '扫描调度和流程控制',
  },
  {
    id: 'alive-detection',
    title: '存活探测',
    icon: 'mdi:pulse',
    description: '主机存活探测机制',
  },
  {
    id: 'port-scan',
    title: '端口扫描',
    icon: 'mdi:lan-connect',
    description: '端口扫描策略和优化',
  },
  {
    id: 'service-identification',
    title: '服务识别',
    icon: 'mdi:application-cog',
    description: '服务指纹识别系统',
  },
  {
    id: 'web-scan',
    title: 'Web 扫描',
    icon: 'mdi:web',
    description: 'Web 应用扫描架构',
  },
  {
    id: 'local-scan',
    title: '本地扫描',
    icon: 'mdi:desktop-tower',
    description: '本地权限和后渗透',
  },
  {
    id: 'config-system',
    title: '配置系统',
    icon: 'mdi:cog-outline',
    description: '全局配置管理',
  },
  {
    id: 'parser-system',
    title: '解析系统',
    icon: 'mdi:code-braces',
    description: '输入解析和验证',
  },
  {
    id: 'proxy-system',
    title: '代理系统',
    icon: 'mdi:swap-horizontal',
    description: '代理支持和流量转发',
  },
  {
    id: 'i18n-system',
    title: '国际化系统',
    icon: 'mdi:translate',
    description: '多语言支持',
  },
  {
    id: 'fingerprint-system',
    title: '指纹识别',
    icon: 'mdi:fingerprint',
    description: 'Web 和端口指纹识别',
  },
  {
    id: 'poc-system',
    title: 'POC 检测',
    icon: 'mdi:bug-check',
    description: 'POC 漏洞检测引擎',
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
  logging: {
    title: '日志系统',
    description: '日志架构和设计理念',
    icon: 'mdi:text-box-outline',
    content: `
      <h2>设计目标</h2>
      <p>fscan 的日志系统设计围绕渗透测试的实际需求：</p>
      <ul>
        <li><strong>实时反馈</strong>：扫描过程中即时显示发现的漏洞和凭据</li>
        <li><strong>分级输出</strong>：根据信息重要性分级，支持过滤</li>
        <li><strong>并发安全</strong>：多线程环境下不会出现日志混乱</li>
        <li><strong>最小噪音</strong>：默认只显示关键信息，避免刷屏</li>
      </ul>

      <h2>日志分级</h2>

      <h3>DEBUG（调试级别）</h3>
      <p><strong>用途</strong>：开发调试和问题诊断</p>
      <ul>
        <li>网络连接详细信息</li>
        <li>协议交互的原始数据</li>
        <li>插件执行的内部状态</li>
      </ul>
      <p><strong>特点</strong>：信息量极大，通常只在调试时启用</p>

      <h3>INFO（信息级别，默认）</h3>
      <p><strong>用途</strong>：正常扫描过程的关键事件</p>
      <ul>
        <li>发现的开放端口</li>
        <li>识别的服务版本</li>
        <li>扫描进度提示</li>
      </ul>
      <p><strong>特点</strong>：平衡信息量和可读性，适合大多数场景</p>

      <h3>SUCCESS（成功级别）</h3>
      <p><strong>用途</strong>：标记扫描成功的关键发现</p>
      <ul>
        <li>爆破成功的凭据</li>
        <li>发现的漏洞</li>
        <li>可利用的弱点</li>
      </ul>
      <p><strong>特点</strong>：绿色高亮显示，最关注的信息</p>

      <h3>ERROR（错误级别）</h3>
      <p><strong>用途</strong>：扫描过程中的异常</p>
      <ul>
        <li>网络连接失败</li>
        <li>插件执行错误</li>
        <li>配置参数问题</li>
      </ul>
      <p><strong>特点</strong>：红色显示，需要人工介入</p>

      <h2>并发日志设计</h2>

      <h3>问题：多线程日志混乱</h3>
      <p>fscan 使用多线程并发扫描，如果直接 <code>fmt.Println()</code>，会出现：</p>
      <ul>
        <li>多个线程的输出交错混杂</li>
        <li>一行日志被另一个线程的输出打断</li>
        <li>无法保证日志的完整性</li>
      </ul>

      <h3>解决方案：日志队列</h3>
      <p>fscan 使用带缓冲的 channel 作为日志队列：</p>
      <ul>
        <li>所有插件将日志消息发送到 channel</li>
        <li>单独的日志线程从 channel 读取并输出</li>
        <li>保证每条日志原子性输出，不会被打断</li>
      </ul>
      <p><strong>关键设计</strong>：生产者-消费者模式，channel 是天然的线程安全队列</p>

      <h3>缓冲区大小权衡</h3>
      <ul>
        <li><strong>缓冲区太小</strong>：插件发送日志时会阻塞，影响扫描性能</li>
        <li><strong>缓冲区太大</strong>：内存占用高，日志延迟显示</li>
      </ul>
      <p>fscan 默认使用 1000 容量的缓冲 channel，在性能和实时性之间取得平衡</p>

      <h2>日志格式设计</h2>

      <h3>简洁优先</h3>
      <p>渗透测试场景下，用户关注的是<strong>结果</strong>而不是过程：</p>
      <ul>
        <li>✅ <code>[+] 192.168.1.1:22 ssh root:password</code>（直接显示结果）</li>
        <li>❌ <code>[2025-01-07 10:23:45] [INFO] SSH Plugin: Authentication succeeded for host 192.168.1.1:22 with username root and password password</code>（冗长）</li>
      </ul>

      <h3>颜色编码</h3>
      <p>不同级别的日志使用不同颜色：</p>
      <ul>
        <li><strong style="color: green;">[+] SUCCESS</strong>：绿色，成功的关键发现</li>
        <li><strong style="color: blue;">[*] INFO</strong>：蓝色，一般信息</li>
        <li><strong style="color: red;">[-] ERROR</strong>：红色，错误信息</li>
        <li><strong style="color: gray;">[DEBUG]</strong>：灰色，调试信息</li>
      </ul>
      <p><strong>注意</strong>：支持 <code>-no-color</code> 参数禁用颜色，适配不支持 ANSI 颜色的终端</p>

      <h3>时间戳可选</h3>
      <ul>
        <li>默认不显示时间戳，保持输出简洁</li>
        <li>提供 <code>-timestamp</code> 参数启用时间戳（用于审计和回溯）</li>
      </ul>

      <h2>日志去重</h2>

      <h3>问题：重复信息刷屏</h3>
      <p>扫描大量主机时，某些信息会重复出现：</p>
      <ul>
        <li>"端口 22 开放" 可能出现数百次</li>
        <li>"SSH 服务" 识别结果重复</li>
      </ul>

      <h3>解决方案：智能去重</h3>
      <ul>
        <li><strong>成功信息</strong>：永不去重（每个漏洞都重要）</li>
        <li><strong>一般信息</strong>：同类信息只显示首次（如 "开放端口"）</li>
        <li><strong>错误信息</strong>：同类错误只显示前 N 次</li>
      </ul>
      <p><strong>实现</strong>：使用 <code>map[string]bool</code> 记录已显示的消息指纹</p>

      <h2>日志性能优化</h2>

      <h3>避免字符串拼接</h3>
      <p>日志消息的构造会影响性能：</p>
      <ul>
        <li>❌ <code>log.Info("Host: " + host + " Port: " + port)</code>（多次内存分配）</li>
        <li>✅ <code>log.Infof("Host: %s Port: %d", host, port)</code>（单次格式化）</li>
      </ul>

      <h3>懒惰求值</h3>
      <p>DEBUG 级别的日志不应该在关闭时仍然消耗资源：</p>
      <ul>
        <li>❌ <code>log.Debug("Data: " + expensiveOperation())</code>（总是执行）</li>
        <li>✅ <code>if log.IsDebug() { log.Debug(...) }</code>（条件执行）</li>
      </ul>

      <h2>日志与输出的分离</h2>

      <h3>设计原则</h3>
      <p>日志和输出是两个独立的概念：</p>
      <ul>
        <li><strong>日志</strong>：给人看的，显示扫描过程和状态</li>
        <li><strong>输出</strong>：给程序看的，保存扫描结果供后续处理</li>
      </ul>

      <h3>独立控制</h3>
      <ul>
        <li>日志级别：控制显示什么日志（<code>-log-level</code>）</li>
        <li>输出格式：控制结果存储格式（<code>-o</code>、<code>-json</code>）</li>
        <li>两者互不影响：可以关闭日志但仍然保存输出</li>
      </ul>

      <h2>设计权衡</h2>

      <h3>为什么不用 logrus/zap 等日志库？</h3>
      <ul>
        <li>✅ 减少依赖，降低编译体积</li>
        <li>✅ 自定义格式更灵活，符合渗透测试习惯</li>
        <li>✅ 避免引入不需要的功能（如日志轮转、远程发送）</li>
        <li>❌ 缺点：需要自己实现并发安全和分级控制</li>
      </ul>
      <p>fscan 的日志需求简单明确，自己实现 200 行代码即可满足，引入第三方库反而增加复杂度。</p>
    `,
  },
  output: {
    title: '输出系统',
    description: '输出格式和存储设计',
    icon: 'mdi:export',
    content: `
      <h2>设计目标</h2>
      <p>输出系统设计要满足不同场景的需求：</p>
      <ul>
        <li><strong>人类可读</strong>：文本格式，直接查看扫描结果</li>
        <li><strong>机器可解析</strong>：JSON 格式，供其他工具处理</li>
        <li><strong>结构化存储</strong>：分类存储不同类型的结果</li>
        <li><strong>增量写入</strong>：边扫描边保存，避免数据丢失</li>
      </ul>

      <h2>输出格式</h2>

      <h3>文本格式（默认）</h3>
      <p><strong>特点</strong>：面向人类，方便快速查看</p>
      <ul>
        <li>每行一个结果</li>
        <li>使用固定格式便于 grep 过滤</li>
        <li>包含关键信息：IP、端口、服务、凭据、漏洞</li>
      </ul>
      <p><strong>示例</strong>：</p>
      <pre><code>[+] 192.168.1.1:22 ssh root:password
[+] 192.168.1.2:3306 mysql admin:123456
[+] 192.168.1.3:80 WebTitle: Apache Tomcat 8.5.0
[+] 192.168.1.4:8080 [CVE-2021-44228] Log4j RCE</code></pre>

      <h3>JSON 格式</h3>
      <p><strong>特点</strong>：面向机器，便于自动化处理</p>
      <ul>
        <li>完整的结构化数据</li>
        <li>包含时间戳、插件名称、原始响应等元信息</li>
        <li>支持多层嵌套，表达复杂结果</li>
      </ul>
      <p><strong>结构设计</strong>：</p>
      <pre><code>{
  "host": "192.168.1.1",
  "port": 22,
  "protocol": "ssh",
  "timestamp": "2025-01-07T10:23:45Z",
  "result": {
    "type": "credential",
    "username": "root",
    "password": "password",
    "success": true
  },
  "plugin": "ssh",
  "raw_banner": "SSH-2.0-OpenSSH_7.4"
}</code></pre>

      <h2>分类存储设计</h2>

      <h3>问题：混合存储难以处理</h3>
      <p>如果所有结果都混在一个文件：</p>
      <ul>
        <li>提取所有凭据需要复杂的正则表达式</li>
        <li>统计漏洞数量需要遍历全文</li>
        <li>无法快速定位特定类型的结果</li>
      </ul>

      <h3>解决方案：分类输出</h3>
      <p>fscan 根据结果类型自动创建不同文件：</p>
      <ul>
        <li><code>result.txt</code>：所有结果的汇总</li>
        <li><code>credentials.txt</code>：爆破成功的凭据</li>
        <li><code>vulnerabilities.txt</code>：发现的漏洞</li>
        <li><code>webinfo.txt</code>：Web 指纹和标题</li>
      </ul>
      <p><strong>优势</strong>：需要凭据时直接打开 <code>credentials.txt</code>，无需处理其他信息</p>

      <h2>增量写入机制</h2>

      <h3>问题：批量写入的风险</h3>
      <p>如果将所有结果缓存在内存，最后一次性写入：</p>
      <ul>
        <li>程序崩溃会丢失所有数据</li>
        <li>大规模扫描时内存占用过高</li>
        <li>无法实时查看中间结果</li>
      </ul>

      <h3>解决方案：实时追加写入</h3>
      <p>每发现一个结果立即写入文件：</p>
      <ul>
        <li>使用 <code>os.O_APPEND</code> 模式打开文件</li>
        <li>每次写入后立即 <code>Flush()</code> 刷盘</li>
        <li>程序中断时已写入的数据不会丢失</li>
      </ul>

      <h3>并发写入安全</h3>
      <p>多个插件同时写入同一个文件会导致数据混乱，解决方案：</p>
      <ul>
        <li>使用 <code>sync.Mutex</code> 保护文件句柄</li>
        <li>写入操作原子化：获取锁 → 写入 → 刷盘 → 释放锁</li>
      </ul>

      <h2>输出去重</h2>

      <h3>问题：重复结果</h3>
      <p>某些情况下同一个结果可能被多次发现：</p>
      <ul>
        <li>端口扫描和服务识别都会记录开放端口</li>
        <li>多个插件可能报告同一个漏洞</li>
      </ul>

      <h3>解决方案：内存去重表</h3>
      <p>维护一个 <code>map[string]bool</code> 记录已输出的结果：</p>
      <ul>
        <li>结果指纹：<code>host:port:type:key</code></li>
        <li>写入前检查指纹是否存在</li>
        <li>存在则跳过，不存在则写入并记录指纹</li>
      </ul>
      <p><strong>权衡</strong>：内存占用 vs 重复数据，fscan 选择消耗内存来保证输出清洁</p>

      <h2>输出缓冲设计</h2>

      <h3>问题：频繁磁盘 I/O</h3>
      <p>每发现一个结果就写入磁盘会导致：</p>
      <ul>
        <li>大量系统调用，性能开销高</li>
        <li>SSD 写入放大，影响硬盘寿命</li>
      </ul>

      <h3>解决方案：批量缓冲写入</h3>
      <p>使用 <code>bufio.Writer</code> 缓冲：</p>
      <ul>
        <li>结果先写入内存缓冲区</li>
        <li>缓冲区满或定时（如 1 秒）时统一刷盘</li>
        <li>程序结束时强制 Flush 保证数据完整</li>
      </ul>
      <p><strong>平衡</strong>：实时性 vs 性能，fscan 选择 1 秒延迟换取 10 倍性能提升</p>

      <h2>文件命名策略</h2>

      <h3>时间戳命名</h3>
      <p>默认输出文件名包含时间戳，避免覆盖：</p>
      <ul>
        <li><code>fscan_20250107_102345.txt</code></li>
        <li>多次扫描的结果自动隔离</li>
        <li>便于追溯历史扫描记录</li>
      </ul>

      <h3>自定义命名</h3>
      <ul>
        <li><code>-o result.txt</code>：指定文件名，覆盖模式</li>
        <li><code>-o-append result.txt</code>：追加模式，不覆盖</li>
      </ul>

      <h2>数据完整性保证</h2>

      <h3>信号处理</h3>
      <p>用户中断（Ctrl+C）时：</p>
      <ul>
        <li>捕获 <code>SIGINT</code> 信号</li>
        <li>停止所有扫描线程</li>
        <li>Flush 所有缓冲区</li>
        <li>关闭文件句柄</li>
      </ul>
      <p><strong>关键</strong>：确保优雅关闭，不丢失已扫描的数据</p>

      <h3>错误处理</h3>
      <p>磁盘空间不足或权限不足时：</p>
      <ul>
        <li>立即停止写入，避免部分数据损坏</li>
        <li>显示明确的错误信息</li>
        <li>保留已成功写入的数据</li>
      </ul>

      <h2>输出格式扩展性</h2>

      <h3>接口抽象</h3>
      <p>输出系统使用接口设计：</p>
      <pre><code>type OutputWriter interface {
    Write(result *ScanResult) error
    Flush() error
    Close() error
}</code></pre>
      <p>不同格式实现相同接口：</p>
      <ul>
        <li><code>TextWriter</code>：文本格式</li>
        <li><code>JSONWriter</code>：JSON 格式</li>
        <li><code>CSVWriter</code>：CSV 格式（未来扩展）</li>
      </ul>

      <h3>多输出支持</h3>
      <p>同时输出到多个格式：</p>
      <ul>
        <li><code>-o result.txt -json result.json</code></li>
        <li>使用 <code>MultiWriter</code> 包装多个 Writer</li>
        <li>一次扫描，多种格式，无需重复扫描</li>
      </ul>

      <h2>设计权衡</h2>

      <h3>为什么不用数据库存储？</h3>
      <ul>
        <li>✅ 文件更简单，无需依赖 SQLite 等库</li>
        <li>✅ 便于传输和备份（直接复制文件）</li>
        <li>✅ 减少编译体积</li>
        <li>❌ 缺点：复杂查询需要手动处理</li>
      </ul>
      <p>fscan 是一次性扫描工具，不需要持久化存储和复杂查询，文件存储足够。</p>

      <h3>为什么默认不输出所有信息？</h3>
      <ul>
        <li>大规模扫描时文件会变得巨大（GB 级别）</li>
        <li>大多数信息是无用的（如关闭的端口）</li>
        <li>用户只关心成功的发现</li>
      </ul>
      <p>提供 <code>-verbose</code> 参数输出完整信息，但默认保持精简。</p>
    `,
  },
  'scan-engine': {
    title: '扫描引擎',
    description: '扫描调度和流程控制',
    icon: 'mdi:engine',
    content: `
      <h2>设计目标</h2>
      <p>扫描引擎是 fscan 的核心调度系统，负责协调所有扫描组件：</p>
      <ul>
        <li><strong>流程编排</strong>：按正确顺序执行扫描阶段</li>
        <li><strong>并发控制</strong>：管理线程池和资源分配</li>
        <li><strong>状态管理</strong>：跟踪扫描进度和结果</li>
        <li><strong>异常处理</strong>：优雅处理错误和中断</li>
      </ul>

      <h2>扫描流水线设计</h2>

      <h3>扫描阶段</h3>
      <p>fscan 采用五阶段流水线架构：</p>
      <ol>
        <li><strong>目标解析</strong>：将输入转换为 IP 列表</li>
        <li><strong>存活探测</strong>：过滤不可达主机</li>
        <li><strong>端口扫描</strong>：发现开放端口</li>
        <li><strong>服务识别</strong>：识别服务类型和版本</li>
        <li><strong>深度扫描</strong>：执行插件扫描（爆破/漏洞检测）</li>
      </ol>
      <p><strong>设计原则</strong>：每个阶段的输出是下一阶段的输入，形成数据流</p>

      <h3>为什么分阶段？</h3>
      <ul>
        <li><strong>减少无效工作</strong>：不对死主机做端口扫描</li>
        <li><strong>优化资源使用</strong>：只对开放端口做服务识别</li>
        <li><strong>提升效率</strong>：存活探测淘汰 80% 主机，节省大量时间</li>
      </ul>

      <h2>并发模型</h2>

      <h3>三层并发</h3>
      <p>fscan 使用分层并发模型：</p>
      <ul>
        <li><strong>主机级并发</strong>：同时扫描多个主机</li>
        <li><strong>端口级并发</strong>：同时扫描单个主机的多个端口</li>
        <li><strong>插件级并发</strong>：同时执行多个插件</li>
      </ul>

      <h3>线程池设计</h3>
      <p>使用 goroutine 池而不是无限制创建：</p>
      <ul>
        <li><strong>问题</strong>：扫描 100 万主机时创建 100 万 goroutine 会导致内存耗尽</li>
        <li><strong>解决</strong>：使用固定大小的 worker 池（默认 600）</li>
        <li><strong>实现</strong>：带缓冲的 channel 作为任务队列</li>
      </ul>
      <pre><code>// 伪代码
taskQueue := make(chan Task, 1000)
for i := 0; i < workerCount; i++ {
    go worker(taskQueue)
}
for _, host := range hosts {
    taskQueue <- host
}</code></pre>

      <h2>Context 传播机制</h2>

      <h3>设计目标</h3>
      <p>所有扫描操作支持超时和取消：</p>
      <ul>
        <li>用户按 Ctrl+C 时立即停止所有扫描</li>
        <li>单个主机扫描超时不影响其他主机</li>
        <li>插件超时不影响其他插件</li>
      </ul>

      <h3>Context 树结构</h3>
      <p>Context 按层级传播：</p>
      <ul>
        <li><strong>根 Context</strong>：全局超时，监听信号</li>
        <li><strong>主机 Context</strong>：单个主机的超时</li>
        <li><strong>插件 Context</strong>：单个插件的超时</li>
      </ul>
      <p><strong>级联取消</strong>：父 Context 取消时，所有子 Context 自动取消</p>

      <h2>扫描策略模式</h2>

      <h3>问题：不同场景的扫描需求</h3>
      <ul>
        <li><strong>快速扫描</strong>：只探测存活，跳过端口扫描</li>
        <li><strong>端口扫描</strong>：只扫描端口，不做深度检测</li>
        <li><strong>完整扫描</strong>：执行所有阶段</li>
      </ul>

      <h3>解决方案：策略接口</h3>
      <p>定义扫描策略接口：</p>
      <pre><code>type ScanStrategy interface {
    ShouldRunAliveDetection() bool
    ShouldRunPortScan() bool
    ShouldRunServiceIdentification() bool
    ShouldRunPlugins() bool
}</code></pre>
      <p>不同策略实现不同的阶段组合，引擎根据策略动态调整流程</p>

      <h2>进度追踪设计</h2>

      <h3>问题：用户需要实时进度</h3>
      <p>扫描大量目标时，用户希望知道：</p>
      <ul>
        <li>已完成多少主机</li>
        <li>预计还需多长时间</li>
        <li>当前在扫描哪个主机</li>
      </ul>

      <h3>解决方案：进度通道</h3>
      <ul>
        <li>引擎维护一个进度 channel</li>
        <li>每完成一个主机发送进度事件</li>
        <li>前端监听 channel 并更新进度条</li>
      </ul>

      <h2>错误处理策略</h2>

      <h3>失败不中断</h3>
      <p>单个主机或插件失败不应影响整体扫描：</p>
      <ul>
        <li>主机 A 超时，继续扫描主机 B</li>
        <li>SSH 插件崩溃，继续运行 MySQL 插件</li>
        <li>记录错误但不停止扫描</li>
      </ul>

      <h3>错误分类</h3>
      <ul>
        <li><strong>致命错误</strong>：配置错误、权限不足 → 停止扫描</li>
        <li><strong>可恢复错误</strong>：网络超时、目标不可达 → 记录并继续</li>
      </ul>

      <h2>资源清理机制</h2>

      <h3>问题：长时间扫描的资源泄漏</h3>
      <ul>
        <li>网络连接未关闭</li>
        <li>文件句柄泄漏</li>
        <li>goroutine 泄漏</li>
      </ul>

      <h3>解决方案：defer + Context</h3>
      <pre><code>func scan(ctx context.Context, host string) {
    defer cleanup()  // 保证资源释放

    conn, err := dial(ctx, host)
    if err != nil {
        return
    }
    defer conn.Close()  // 保证连接关闭

    // 扫描逻辑
}</code></pre>

      <h2>设计权衡</h2>

      <h3>为什么不用工作流引擎？</h3>
      <ul>
        <li>✅ 扫描流程固定，不需要动态编排</li>
        <li>✅ 简单的流水线足够，不需要 DAG</li>
        <li>✅ 减少依赖和复杂度</li>
        <li>❌ 缺点：添加新阶段需要修改引擎代码</li>
      </ul>

      <h3>为什么使用 goroutine 池而不是无限制并发？</h3>
      <ul>
        <li>✅ 防止内存耗尽</li>
        <li>✅ 避免创建过多系统线程</li>
        <li>✅ 可控的资源消耗</li>
        <li>❌ 缺点：需要调优池大小</li>
      </ul>
    `,
  },
  'alive-detection': {
    title: '存活探测',
    description: '主机存活探测机制',
    icon: 'mdi:pulse',
    content: `
      <h2>设计目标</h2>
      <p>存活探测的目标是快速过滤不可达主机：</p>
      <ul>
        <li><strong>快速</strong>：1 秒内完成 254 个 IP 的探测</li>
        <li><strong>准确</strong>：减少漏报和误报</li>
        <li><strong>隐蔽</strong>：避免触发安全设备告警</li>
        <li><strong>适应性</strong>：兼容不同网络环境</li>
      </ul>

      <h2>探测方法</h2>

      <h3>1. ICMP Ping（优先）</h3>
      <p><strong>原理</strong>：发送 ICMP Echo Request，等待 Echo Reply</p>
      <ul>
        <li><strong>优势</strong>：速度快，开销小</li>
        <li><strong>劣势</strong>：需要 root 权限，可能被防火墙拦截</li>
      </ul>

      <h3>2. TCP Ping（备用）</h3>
      <p><strong>原理</strong>：向常用端口发送 SYN 包，检测响应</p>
      <ul>
        <li>探测端口：80, 443, 22, 445, 3389（覆盖 90% 场景）</li>
        <li><strong>优势</strong>：不需要特权，绕过 ICMP 过滤</li>
        <li><strong>劣势</strong>：比 ICMP 慢</li>
      </ul>

      <h3>3. ARP Ping（局域网）</h3>
      <p><strong>原理</strong>：发送 ARP 请求，检测 MAC 地址</p>
      <ul>
        <li><strong>优势</strong>：局域网最准确，无法被过滤</li>
        <li><strong>劣势</strong>：仅限同一子网</li>
      </ul>

      <h2>探测策略</h2>

      <h3>自适应探测</h3>
      <p>fscan 根据网络环境自动选择探测方法：</p>
      <ol>
        <li>检测当前用户权限</li>
        <li>如果有 root/管理员权限 → 使用 ICMP</li>
        <li>如果无特权 → 使用 TCP Ping</li>
        <li>如果是局域网（/24, /16） → 优先使用 ARP</li>
      </ol>

      <h3>多方法组合</h3>
      <p>某些主机可能只响应特定方法：</p>
      <ul>
        <li>Windows 服务器通常禁用 ICMP，但响应 445/3389</li>
        <li>Linux 服务器通常响应 ICMP 和 22</li>
      </ul>
      <p><strong>策略</strong>：ICMP + TCP 端口组合探测，提高准确率</p>

      <h2>ICMP 实现细节</h2>

      <h3>问题：Go 标准库不支持原始 ICMP</h3>
      <p>Go 的 <code>net</code> 包不提供原始 ICMP 支持，需要自己实现</p>

      <h3>解决方案：使用 syscall</h3>
      <ul>
        <li>创建原始套接字：<code>syscall.Socket(AF_INET, SOCK_RAW, IPPROTO_ICMP)</code></li>
        <li>构造 ICMP Echo Request 包</li>
        <li>设置超时：<code>SetReadDeadline()</code></li>
        <li>接收并解析 Echo Reply</li>
      </ul>

      <h3>ICMP 包结构</h3>
      <pre><code>type ICMPHeader struct {
    Type     uint8  // 8 = Echo Request, 0 = Echo Reply
    Code     uint8  // 0
    Checksum uint16
    ID       uint16
    Sequence uint16
}</code></pre>
      <p><strong>校验和计算</strong>：必须正确，否则被系统丢弃</p>

      <h2>并发探测设计</h2>

      <h3>问题：顺序探测太慢</h3>
      <p>顺序探测 254 个 IP，每个超时 1 秒 = 254 秒</p>

      <h3>解决方案：批量并发</h3>
      <ul>
        <li>创建 N 个 goroutine 并发发送 ICMP</li>
        <li>所有 goroutine 共享一个接收 goroutine</li>
        <li>使用 ID/Sequence 区分不同的请求</li>
      </ul>
      <p><strong>性能</strong>：254 个 IP 的探测在 1 秒内完成</p>

      <h3>接收器设计</h3>
      <p>单个接收 goroutine 监听所有响应：</p>
      <pre><code>recvChan := make(chan string, 1000)
go func() {
    for {
        reply := receiveICMP()
        recvChan <- reply.SourceIP
    }
}()

// 发送器
for _, ip := range ips {
    go sendICMP(ip)
}</code></pre>

      <h2>超时和重试</h2>

      <h3>超时设置</h3>
      <ul>
        <li><strong>ICMP</strong>：1 秒超时（网络延迟通常 < 100ms）</li>
        <li><strong>TCP Ping</strong>：2 秒超时（需要 TCP 握手）</li>
      </ul>

      <h3>重试策略</h3>
      <ul>
        <li>默认不重试（速度优先）</li>
        <li>提供 <code>-ping-retry</code> 参数启用重试</li>
        <li>重试间隔：500ms</li>
      </ul>

      <h2>误报和漏报处理</h2>

      <h3>误报：主机实际不存在</h3>
      <ul>
        <li><strong>原因</strong>：网关响应 ICMP Redirect</li>
        <li><strong>解决</strong>：验证 ICMP 响应的源 IP 是否匹配</li>
      </ul>

      <h3>漏报：主机存在但探测失败</h3>
      <ul>
        <li><strong>原因</strong>：防火墙过滤 ICMP 和常用端口</li>
        <li><strong>解决</strong>：提供 <code>-no-ping</code> 参数跳过存活探测，直接扫描所有主机</li>
      </ul>

      <h2>权限处理</h2>

      <h3>问题：普通用户无法使用 ICMP</h3>
      <p>原始套接字需要 CAP_NET_RAW 权限</p>

      <h3>解决方案：自动降级</h3>
      <pre><code>func detectAlive() {
    if hasPrivilege() {
        return icmpPing()
    }
    return tcpPing()
}</code></pre>
      <p>无权限时自动切换到 TCP Ping，对用户透明</p>

      <h2>设计权衡</h2>

      <h3>为什么不使用 ping 命令？</h3>
      <ul>
        <li>✅ 自己实现可以精确控制超时和并发</li>
        <li>✅ 不依赖外部命令，跨平台兼容</li>
        <li>✅ 可以提取更多信息（RTT、TTL）</li>
        <li>❌ 缺点：需要处理原始套接字的复杂性</li>
      </ul>

      <h3>为什么默认探测而不是直接扫描？</h3>
      <ul>
        <li>✅ 存活探测淘汰 80% 不可达主机</li>
        <li>✅ 节省大量端口扫描时间</li>
        <li>✅ 减少无效流量</li>
        <li>❌ 缺点：可能漏掉防火墙严格的主机</li>
      </ul>
      <p>提供 <code>-no-ping</code> 参数禁用存活探测，适配特殊场景</p>
    `,
  },
  'port-scan': {
    title: '端口扫描',
    description: '端口扫描策略和优化',
    icon: 'mdi:lan-connect',
    content: `
      <h2>设计目标</h2>
      <p>端口扫描的核心目标：</p>
      <ul>
        <li><strong>速度</strong>：1000 端口 < 10 秒</li>
        <li><strong>准确</strong>：减少漏扫和误报</li>
        <li><strong>隐蔽</strong>：避免被 IDS/IPS 检测</li>
        <li><strong>稳定</strong>：不触发连接数限制</li>
      </ul>

      <h2>扫描方法</h2>

      <h3>1. SYN 扫描（默认）</h3>
      <p><strong>原理</strong>：半开连接，发送 SYN 但不完成握手</p>
      <ul>
        <li>发送 SYN 包</li>
        <li>收到 SYN-ACK → 端口开放</li>
        <li>收到 RST → 端口关闭</li>
        <li>不发送最后的 ACK，连接不建立</li>
      </ul>
      <p><strong>优势</strong>：</p>
      <ul>
        <li>速度快，不占用连接资源</li>
        <li>不会在目标日志中留下完整连接记录</li>
        <li>适合大规模扫描</li>
      </ul>
      <p><strong>劣势</strong>：需要 root 权限构造原始 TCP 包</p>

      <h3>2. Connect 扫描（备用）</h3>
      <p><strong>原理</strong>：完整的 TCP 三次握手</p>
      <ul>
        <li>调用系统 <code>connect()</code></li>
        <li>成功 → 端口开放</li>
        <li>超时/拒绝 → 端口关闭</li>
      </ul>
      <p><strong>优势</strong>：不需要特权</p>
      <p><strong>劣势</strong>：</p>
      <ul>
        <li>速度慢，需要完成握手并关闭连接</li>
        <li>会在目标日志中留下记录</li>
        <li>占用连接资源，可能触发限制</li>
      </ul>

      <h2>端口选择策略</h2>

      <h3>问题：扫描 65535 端口太慢</h3>
      <p>全端口扫描需要 10+ 分钟，大多数情况不实用</p>

      <h3>解决方案：智能端口集</h3>
      <ul>
        <li><strong>Top 1000</strong>（默认）：覆盖 95% 场景</li>
        <li><strong>Top 100</strong>：快速扫描，5 秒完成</li>
        <li><strong>全端口</strong>：<code>-p 1-65535</code>，用于深度扫描</li>
        <li><strong>自定义</strong>：<code>-p 80,443,8080-8090</code></li>
      </ul>

      <h3>Top 端口的选择依据</h3>
      <p>基于真实互联网扫描数据：</p>
      <ul>
        <li>80, 443, 8080, 8000, 8443（Web 服务）</li>
        <li>22, 23, 3389（远程访问）</li>
        <li>445, 139（SMB）</li>
        <li>3306, 5432, 1433, 6379, 27017（数据库）</li>
      </ul>

      <h2>并发扫描设计</h2>

      <h3>三级并发模型</h3>
      <ol>
        <li><strong>主机级</strong>：同时扫描多个主机</li>
        <li><strong>端口级</strong>：同时扫描单个主机的多个端口</li>
        <li><strong>批次级</strong>：分批发送，避免网络拥塞</li>
      </ol>

      <h3>速率控制</h3>
      <p><strong>问题</strong>：瞬间发送 1000 个 SYN 包会导致：</p>
      <ul>
        <li>网络拥塞，丢包率高</li>
        <li>触发防火墙限速</li>
        <li>本地端口耗尽</li>
      </ul>
      <p><strong>解决</strong>：令牌桶限速</p>
      <pre><code>// 每秒最多 500 个包
rateLimiter := time.NewTicker(2 * time.Millisecond)
for _, port := range ports {
    <-rateLimiter.C  // 等待令牌
    go scanPort(host, port)
}</code></pre>

      <h2>超时和重试</h2>

      <h3>超时设置</h3>
      <ul>
        <li><strong>SYN 扫描</strong>：1 秒（等待 SYN-ACK）</li>
        <li><strong>Connect 扫描</strong>：2 秒（完整握手）</li>
      </ul>

      <h3>动态超时调整</h3>
      <p>根据网络延迟动态调整：</p>
      <ul>
        <li>测量前 10 个端口的 RTT</li>
        <li>超时 = 平均 RTT × 3</li>
        <li>防止慢速网络漏扫</li>
      </ul>

      <h3>重试策略</h3>
      <ul>
        <li>默认不重试（速度优先）</li>
        <li>丢包率 > 10% 时自动降速并重试</li>
      </ul>

      <h2>结果验证</h2>

      <h3>问题：误报</h3>
      <p>某些情况下会误判端口状态：</p>
      <ul>
        <li>防火墙返回 RST 伪装端口关闭</li>
        <li>负载均衡器响应所有端口</li>
      </ul>

      <h3>解决方案：二次验证</h3>
      <ul>
        <li>SYN 扫描发现开放端口后，用 Connect 验证</li>
        <li>发送应用层数据，检测真实服务</li>
        <li>过滤掉"蜜罐"端口</li>
      </ul>

      <h2>防火墙规避</h2>

      <h3>1. 随机化</h3>
      <ul>
        <li><strong>端口顺序随机</strong>：不按 1,2,3... 扫描</li>
        <li><strong>源端口随机</strong>：避免被识别为扫描器</li>
        <li><strong>时间随机</strong>：包之间加入随机延迟</li>
      </ul>

      <h3>2. 分片扫描</h3>
      <p>将 TCP 包分片，绕过简单的包过滤：</p>
      <ul>
        <li>TCP 头分片到多个 IP 包</li>
        <li>某些防火墙只检查第一个分片</li>
      </ul>
      <p><strong>注意</strong>：现代防火墙大多能重组分片，效果有限</p>

      <h3>3. 慢速扫描</h3>
      <p>提供 <code>-scan-rate</code> 参数：</p>
      <ul>
        <li><code>--scan-rate 10</code>：每秒 10 个端口</li>
        <li>极慢但隐蔽，避免触发速率限制</li>
      </ul>

      <h2>SYN 扫描实现细节</h2>

      <h3>构造 TCP SYN 包</h3>
      <pre><code>type TCPHeader struct {
    SrcPort  uint16
    DstPort  uint16
    SeqNum   uint32
    AckNum   uint32
    Flags    uint8  // SYN = 0x02
    Window   uint16
    Checksum uint16
    Urgent   uint16
}</code></pre>

      <h3>接收 SYN-ACK</h3>
      <p>使用 BPF 过滤器只接收目标响应：</p>
      <pre><code>// 只接收来自目标 IP 的 SYN-ACK 或 RST
filter := fmt.Sprintf("src host %s and (tcp[tcpflags] & (tcp-syn|tcp-ack) != 0)", targetIP)</code></pre>

      <h2>端口状态分类</h2>

      <ul>
        <li><strong>Open</strong>：收到 SYN-ACK</li>
        <li><strong>Closed</strong>：收到 RST</li>
        <li><strong>Filtered</strong>：无响应（被防火墙丢弃）</li>
        <li><strong>Open|Filtered</strong>：收到 ICMP 不可达</li>
      </ul>
      <p>默认只报告 Open 状态，减少噪音</p>

      <h2>设计权衡</h2>

      <h3>为什么默认 SYN 而不是 Connect？</h3>
      <ul>
        <li>✅ SYN 扫描速度快 10 倍</li>
        <li>✅ 不占用连接资源</li>
        <li>✅ 更隐蔽（不完成握手）</li>
        <li>❌ 缺点：需要 root 权限</li>
      </ul>
      <p>无权限时自动降级到 Connect 扫描</p>

      <h3>为什么不默认全端口扫描？</h3>
      <ul>
        <li>✅ Top 1000 端口覆盖 95% 场景</li>
        <li>✅ 扫描时间从 10 分钟降到 10 秒</li>
        <li>✅ 减少网络流量和目标负载</li>
        <li>❌ 缺点：可能漏掉非标端口的服务</li>
      </ul>
      <p>提供 <code>-p -</code> 参数扫描全端口</p>
    `,
  },
  'service-identification': {
    title: '服务识别',
    description: '服务指纹识别系统',
    icon: 'mdi:application-cog',
    content: `
      <h2>设计目标</h2>
      <p>服务识别的目标是准确识别开放端口上的服务：</p>
      <ul>
        <li><strong>准确性</strong>：正确识别服务类型和版本</li>
        <li><strong>完整性</strong>：支持常见的 100+ 种服务</li>
        <li><strong>效率</strong>：单个端口识别 < 3 秒</li>
        <li><strong>健壮性</strong>：处理异常响应和超时</li>
      </ul>

      <h2>识别方法</h2>

      <h3>1. Banner 抓取（主要方法）</h3>
      <p><strong>原理</strong>：连接服务并读取 Banner 信息</p>
      <ul>
        <li>建立 TCP 连接</li>
        <li>某些服务主动发送 Banner（SSH、FTP、SMTP）</li>
        <li>某些服务需要发送探测包才响应（HTTP、MySQL）</li>
      </ul>
      <p><strong>示例</strong>：</p>
      <pre><code>SSH-2.0-OpenSSH_7.4
220 FTP Server ready
HTTP/1.1 400 Bad Request</code></pre>

      <h3>2. Probe 探测（辅助方法）</h3>
      <p><strong>原理</strong>：发送特定协议的探测包，分析响应</p>
      <ul>
        <li>HTTP：发送 GET 请求，解析响应头</li>
        <li>MySQL：发送 MySQL 握手包</li>
        <li>Redis：发送 PING 命令</li>
      </ul>

      <h3>3. 行为分析</h3>
      <p><strong>原理</strong>：根据服务的行为特征判断</p>
      <ul>
        <li>立即关闭连接 → 可能是 HTTP 代理</li>
        <li>发送二进制数据 → 可能是数据库</li>
        <li>SSL/TLS 握手 → HTTPS 或加密服务</li>
      </ul>

      <h2>Probe 引擎设计</h2>

      <h3>Probe 定义</h3>
      <p>Probe 是一个探测规则，包含：</p>
      <ul>
        <li><strong>探测数据</strong>：发送给服务的字节序列</li>
        <li><strong>匹配规则</strong>：正则表达式或字符串匹配</li>
        <li><strong>服务名称</strong>：识别成功后的服务名</li>
        <li><strong>版本提取</strong>：从响应中提取版本号</li>
      </ul>

      <h3>Probe 示例</h3>
      <pre><code>Probe HTTP GetRequest {
    send: "GET / HTTP/1.0\\r\\n\\r\\n"
    match: "HTTP/1\\.[01] \\d+ "
    service: http
    version: "Apache/([\\d.]+)"
}</code></pre>

      <h3>Probe 执行流程</h3>
      <ol>
        <li>连接目标端口</li>
        <li>发送 Probe 数据</li>
        <li>读取响应（超时 3 秒）</li>
        <li>匹配规则，提取信息</li>
        <li>匹配失败则尝试下一个 Probe</li>
      </ol>

      <h2>指纹库设计</h2>

      <h3>指纹来源</h3>
      <p>fscan 的指纹库来自：</p>
      <ul>
        <li>Nmap 的 nmap-service-probes</li>
        <li>自定义的常见服务指纹</li>
        <li>用户贡献的指纹</li>
      </ul>

      <h3>指纹组织方式</h3>
      <p>按服务类型分组：</p>
      <ul>
        <li><strong>通用 Probe</strong>：NULL（只读取 Banner）、HTTP、SSL</li>
        <li><strong>数据库 Probe</strong>：MySQL、PostgreSQL、Redis、MongoDB</li>
        <li><strong>远程访问 Probe</strong>：SSH、RDP、Telnet</li>
      </ul>

      <h3>优先级排序</h3>
      <p>常见服务优先探测：</p>
      <ol>
        <li>HTTP（80% 端口是 Web 服务）</li>
        <li>SSH、FTP（主动 Banner）</li>
        <li>数据库（MySQL、Redis、MongoDB）</li>
        <li>其他服务</li>
      </ol>

      <h2>并发识别设计</h2>

      <h3>问题：顺序识别太慢</h3>
      <p>识别 100 个端口，每个 3 秒 = 300 秒</p>

      <h3>解决方案：并发探测</h3>
      <ul>
        <li>同时对多个端口进行服务识别</li>
        <li>每个端口一个 goroutine</li>
        <li>限制并发数（默认 100）防止资源耗尽</li>
      </ul>

      <h2>超时和重试</h2>

      <h3>超时设置</h3>
      <ul>
        <li><strong>连接超时</strong>：2 秒</li>
        <li><strong>读取超时</strong>：3 秒</li>
        <li><strong>总超时</strong>：5 秒（单个端口）</li>
      </ul>

      <h3>重试策略</h3>
      <ul>
        <li>网络错误重试 1 次</li>
        <li>超时不重试（可能服务真的很慢）</li>
      </ul>

      <h2>SSL/TLS 识别</h2>

      <h3>问题：加密服务无法直接识别</h3>
      <p>HTTPS、SMTPS、IMAPS 等加密服务，Banner 被加密</p>

      <h3>解决方案：先 SSL 握手</h3>
      <ol>
        <li>检测是否为 SSL/TLS 端口（443, 993, 995）</li>
        <li>尝试 SSL 握手</li>
        <li>握手成功后，通过加密通道发送 Probe</li>
        <li>提取证书信息（域名、组织）</li>
      </ol>

      <h3>证书信息提取</h3>
      <pre><code>cert := conn.ConnectionState().PeerCertificates[0]
domain := cert.Subject.CommonName
org := cert.Subject.Organization[0]</code></pre>

      <h2>版本提取</h2>

      <h3>从 Banner 提取版本</h3>
      <p>使用正则表达式：</p>
      <pre><code>// SSH-2.0-OpenSSH_7.4
pattern := "OpenSSH_([\\d.]+)"
match := regexp.FindStringSubmatch(banner, pattern)
version := match[1]  // "7.4"</code></pre>

      <h3>版本规范化</h3>
      <ul>
        <li><code>Apache/2.4.41 (Ubuntu)</code> → <code>Apache 2.4.41</code></li>
        <li><code>nginx/1.18.0</code> → <code>nginx 1.18.0</code></li>
      </ul>

      <h2>异常处理</h2>

      <h3>常见异常</h3>
      <ul>
        <li><strong>连接立即关闭</strong>：可能是防火墙或负载均衡</li>
        <li><strong>乱码响应</strong>：可能是二进制协议</li>
        <li><strong>超时无响应</strong>：可能需要特殊握手</li>
      </ul>

      <h3>容错处理</h3>
      <ul>
        <li>解析错误不崩溃，返回 "unknown"</li>
        <li>记录原始响应，便于人工分析</li>
        <li>部分匹配也返回服务名</li>
      </ul>

      <h2>性能优化</h2>

      <h3>1. Probe 缓存</h3>
      <p>相同端口的 Probe 结果缓存：</p>
      <ul>
        <li>Key: <code>host:port</code></li>
        <li>Value: 识别结果</li>
        <li>TTL: 扫描会话期间</li>
      </ul>

      <h3>2. 连接复用</h3>
      <p>某些服务支持多次请求：</p>
      <ul>
        <li>HTTP Keep-Alive</li>
        <li>复用连接发送多个 Probe</li>
        <li>减少 TCP 握手开销</li>
      </ul>

      <h3>3. 快速失败</h3>
      <ul>
        <li>连接失败立即返回</li>
        <li>不等待完整超时</li>
        <li>避免阻塞其他端口识别</li>
      </ul>

      <h2>输出格式</h2>

      <h3>结构化输出</h3>
      <pre><code>{
    "host": "192.168.1.1",
    "port": 22,
    "service": "ssh",
    "product": "OpenSSH",
    "version": "7.4",
    "os": "Ubuntu",
    "banner": "SSH-2.0-OpenSSH_7.4"
}</code></pre>

      <h2>设计权衡</h2>

      <h3>为什么不使用 Nmap 服务识别？</h3>
      <ul>
        <li>✅ 内置识别更快，不需要调用外部工具</li>
        <li>✅ 可以自定义 Probe 和指纹库</li>
        <li>✅ 更好的错误处理和日志</li>
        <li>❌ 缺点：指纹库不如 Nmap 完整</li>
      </ul>

      <h3>为什么不所有端口都做深度识别？</h3>
      <ul>
        <li>✅ 深度识别耗时长（每个端口 5+ 秒）</li>
        <li>✅ 大多数场景只需要基本信息</li>
        <li>✅ 提供 <code>-service-scan-mode=deep</code> 启用深度识别</li>
        <li>❌ 缺点：快速模式可能漏掉非标准服务</li>
      </ul>
    `,
  },
  'web-scan': {
    title: 'Web 扫描',
    description: 'Web 应用扫描架构',
    icon: 'mdi:web',
    content: `
      <h2>设计目标</h2>
      <p>Web 扫描模块专注于 HTTP/HTTPS 服务的深度识别：</p>
      <ul>
        <li><strong>指纹识别</strong>：识别 Web 框架、CMS、中间件</li>
        <li><strong>信息收集</strong>：标题、状态码、响应头、证书</li>
        <li><strong>漏洞检测</strong>：内置 POC 检测常见漏洞</li>
        <li><strong>目录发现</strong>：敏感路径和文件探测</li>
      </ul>

      <h2>Web 指纹识别</h2>

      <h3>多维度特征匹配</h3>
      <p>fscan 从多个维度提取 Web 特征：</p>
      <ul>
        <li><strong>HTTP 响应头</strong>：Server、X-Powered-By、Set-Cookie</li>
        <li><strong>HTML 内容</strong>：特定标签、关键字、注释</li>
        <li><strong>URL 路径</strong>：/admin、/wp-admin 等特征路径</li>
        <li><strong>Favicon</strong>：图标哈希值（MD5/MurmurHash）</li>
        <li><strong>特定文件</strong>：robots.txt、README.md</li>
      </ul>

      <h3>指纹库组织</h3>
      <p>按 Web 技术分类：</p>
      <ul>
        <li><strong>Web 服务器</strong>：Apache、Nginx、IIS、Tomcat</li>
        <li><strong>应用框架</strong>：Spring、Django、Laravel、Express</li>
        <li><strong>CMS</strong>：WordPress、Drupal、Joomla</li>
        <li><strong>中间件</strong>：Shiro、Struts2</li>
      </ul>

      <h2>HTTP 请求设计</h2>

      <h3>自定义 HTTP 客户端</h3>
      <p>为什么不直接用 Go 的 http.Client？</p>
      <ul>
        <li><strong>超时精确控制</strong>：连接超时、读取超时分别设置</li>
        <li><strong>重定向处理</strong>：自定义重定向策略，记录跳转链</li>
        <li><strong>代理支持</strong>：HTTP/SOCKS5 代理</li>
        <li><strong>证书验证</strong>：支持跳过 SSL 验证</li>
      </ul>

      <h3>请求头伪造</h3>
      <p>避免被 WAF 识别为扫描器：</p>
      <pre><code>User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Accept: text/html,application/xhtml+xml
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8
Accept-Encoding: gzip, deflate</code></pre>

      <h2>响应处理</h2>

      <h3>编码检测和转换</h3>
      <p>Web 页面可能使用各种编码：</p>
      <ul>
        <li>检测 Content-Type: charset=xxx</li>
        <li>检测 HTML meta charset</li>
        <li>自动转换为 UTF-8</li>
      </ul>

      <h3>内容提取</h3>
      <ul>
        <li><strong>标题提取</strong>：<code>&lt;title&gt;...&lt;/title&gt;</code></li>
        <li><strong>关键字提取</strong>：正则匹配特定模式</li>
        <li><strong>链接提取</strong>：用于目录爆破</li>
      </ul>

      <h2>并发控制</h2>

      <h3>问题：HTTP 请求的特殊性</h3>
      <ul>
        <li>HTTP Keep-Alive 可能占用连接</li>
        <li>某些 Web 服务器限制单 IP 连接数</li>
        <li>大量并发可能触发 WAF</li>
      </ul>

      <h3>解决方案：分级限速</h3>
      <ul>
        <li>单个主机并发：10</li>
        <li>全局并发：100</li>
        <li>提供 --web-threads 参数调整</li>
      </ul>

      <h2>POC 集成</h2>

      <h3>POC 执行时机</h3>
      <p>在指纹识别后执行对应的 POC：</p>
      <ol>
        <li>识别出 Struts2 → 执行 Struts2 相关 POC</li>
        <li>识别出 Shiro → 执行 Shiro 反序列化 POC</li>
        <li>识别出 Spring → 执行 Spring 相关 POC</li>
      </ol>

      <h3>POC 优先级</h3>
      <ul>
        <li><strong>高危 POC</strong>：RCE、SQL 注入优先</li>
        <li><strong>中危 POC</strong>：文件读取、SSRF</li>
        <li><strong>低危 POC</strong>：信息泄露</li>
      </ul>

      <h2>HTTPS 处理</h2>

      <h3>证书信息提取</h3>
      <pre><code>cert := response.TLS.PeerCertificates[0]
domain := cert.Subject.CommonName
issuer := cert.Issuer.CommonName
notBefore := cert.NotBefore
notAfter := cert.NotAfter</code></pre>

      <h3>证书验证绕过</h3>
      <p>某些内网环境使用自签名证书：</p>
      <pre><code>InsecureSkipVerify: true</code></pre>

      <h2>设计权衡</h2>

      <h3>为什么单独分离 Web 扫描？</h3>
      <ul>
        <li>✅ Web 扫描逻辑复杂，独立模块便于维护</li>
        <li>✅ 可选编译，减少不需要 Web 扫描时的体积</li>
        <li>✅ 便于集成第三方 POC 库</li>
      </ul>
    `,
  },
  'local-scan': {
    title: '本地扫描',
    description: '本地权限和后渗透',
    icon: 'mdi:desktop-tower',
    content: `
      <h2>设计目标</h2>
      <p>本地扫描模块用于已获取权限的主机上进行后渗透操作：</p>
      <ul>
        <li><strong>信息收集</strong>：系统信息、环境变量、文件</li>
        <li><strong>权限维持</strong>：持久化机制</li>
        <li><strong>凭据获取</strong>：内存凭据、浏览器密码</li>
        <li><strong>横向移动</strong>：代理、端口转发</li>
      </ul>

      <h2>系统信息收集</h2>

      <h3>跨平台信息获取</h3>
      <p>使用条件编译适配不同系统：</p>
      <pre><code>//go:build windows
// Windows 特定代码

//go:build linux
// Linux 特定代码</code></pre>

      <h3>收集内容</h3>
      <ul>
        <li><strong>系统</strong>：OS 版本、内核版本、架构</li>
        <li><strong>网络</strong>：IP地址、网关、DNS、路由表</li>
        <li><strong>进程</strong>：运行中的进程和服务</li>
        <li><strong>用户</strong>：当前用户、用户列表、权限</li>
      </ul>

      <h2>权限检测</h2>

      <h3>特权检测</h3>
      <pre><code>// Linux
uid := os.Getuid()
isRoot := uid == 0

// Windows
isAdmin := windows.GetTokenInformation()</code></pre>

      <h3>防护软件检测</h3>
      <ul>
        <li>检测防病毒软件进程</li>
        <li>检测 EDR 产品</li>
        <li>检测防火墙状态</li>
      </ul>

      <h2>权限维持机制</h2>

      <h3>Linux 持久化</h3>
      <ul>
        <li><strong>Crontab</strong>：定时任务</li>
        <li><strong>Systemd Service</strong>：系统服务</li>
        <li><strong>rc.local</strong>：开机启动</li>
        <li><strong>SSH Key</strong>：免密登录</li>
      </ul>

      <h3>Windows 持久化</h3>
      <ul>
        <li><strong>注册表启动项</strong>：Run、RunOnce</li>
        <li><strong>服务</strong>：Windows Service</li>
        <li><strong>计划任务</strong>：Scheduled Task</li>
        <li><strong>WMI 事件</strong>：Event Consumer</li>
      </ul>

      <h2>敏感文件扫描</h2>

      <h3>扫描规则</h3>
      <ul>
        <li><strong>配置文件</strong>：含密码的配置</li>
        <li><strong>历史文件</strong>：.bash_history、.zsh_history</li>
        <li><strong>密钥文件</strong>：.ssh/id_rsa、.aws/credentials</li>
        <li><strong>浏览器数据</strong>：Cookies、密码数据库</li>
      </ul>

      <h2>设计权衡</h2>

      <h3>为什么本地插件默认不编译？</h3>
      <ul>
        <li>✅ 高度敏感，容易被杀软标记</li>
        <li>✅ 大多数场景不需要</li>
        <li>✅ 减小默认二进制体积</li>
      </ul>
    `,
  },
  'config-system': {
    title: '配置系统',
    description: '全局配置管理',
    icon: 'mdi:cog-outline',
    content: `
      <h2>设计目标</h2>
      <p>配置系统管理 fscan 的运行参数和全局状态：</p>
      <ul>
        <li><strong>集中管理</strong>：所有配置项在一个地方</li>
        <li><strong>类型安全</strong>：编译时检查配置项类型</li>
        <li><strong>默认值</strong>：提供合理的默认配置</li>
        <li><strong>验证</strong>：配置项合法性检查</li>
      </ul>

      <h2>配置结构设计</h2>

      <h3>分组管理</h3>
      <pre><code>type Config struct {
    Target    TargetConfig
    Scan      ScanConfig
    Auth      AuthConfig
    Output    OutputConfig
    Proxy     ProxyConfig
}</code></pre>

      <h3>配置来源优先级</h3>
      <ol>
        <li><strong>命令行参数</strong>：最高优先级</li>
        <li><strong>配置文件</strong>：次优先级</li>
        <li><strong>默认值</strong>：最低优先级</li>
      </ol>

      <h2>配置验证</h2>

      <h3>合法性检查</h3>
      <ul>
        <li><strong>范围检查</strong>：线程数 1-1000</li>
        <li><strong>格式检查</strong>：IP、端口格式</li>
        <li><strong>依赖检查</strong>：某些选项相互依赖</li>
        <li><strong>冲突检查</strong>：某些选项互斥</li>
      </ul>

      <h3>错误提示</h3>
      <p>配置错误时给出明确提示：</p>
      <pre><code>Error: invalid thread count: 0
Valid range: 1-1000
Default value: 600</code></pre>

      <h2>配置持久化</h2>

      <h3>配置文件格式</h3>
      <p>使用 YAML 格式：</p>
      <pre><code>scan:
  threads: 600
  timeout: 3
auth:
  username: admin
  password: password123
output:
  file: result.txt
  format: text</code></pre>

      <h3>配置文件位置</h3>
      <ul>
        <li><code>./fscan.yaml</code>：当前目录</li>
        <li><code>~/.fscan/config.yaml</code>：用户目录</li>
        <li><code>--config</code>：自定义路径</li>
      </ul>

      <h2>全局访问</h2>

      <h3>单例模式</h3>
      <p>配置对象全局唯一：</p>
      <pre><code>var GlobalConfig *Config

func GetConfig() *Config {
    return GlobalConfig
}</code></pre>

      <h2>设计权衡</h2>

      <h3>为什么不用 Viper？</h3>
      <ul>
        <li>✅ 减少依赖</li>
        <li>✅ 配置结构简单，不需要复杂功能</li>
        <li>❌ 缺点：需要自己实现配置合并</li>
      </ul>
    `,
  },
  'parser-system': {
    title: '解析系统',
    description: '输入解析和验证',
    icon: 'mdi:code-braces',
    content: `
      <h2>设计目标</h2>
      <p>解析系统负责将用户输入转换为内部数据结构：</p>
      <ul>
        <li><strong>灵活性</strong>：支持多种输入格式</li>
        <li><strong>容错性</strong>：处理格式错误</li>
        <li><strong>效率</strong>：快速解析大文件</li>
        <li><strong>验证</strong>：输入合法性检查</li>
      </ul>

      <h2>目标解析</h2>

      <h3>支持的格式</h3>
      <ul>
        <li><strong>单个 IP</strong>：192.168.1.1</li>
        <li><strong>CIDR</strong>：192.168.1.0/24</li>
        <li><strong>IP 范围</strong>：192.168.1.1-192.168.1.254</li>
        <li><strong>域名</strong>：example.com</li>
        <li><strong>文件</strong>：targets.txt（每行一个目标）</li>
      </ul>

      <h3>CIDR 展开</h3>
      <p>将 CIDR 转换为 IP 列表：</p>
      <pre><code>192.168.1.0/24 → 192.168.1.1 - 192.168.1.254
10.0.0.0/8     → 10.0.0.1 - 10.255.255.254</code></pre>

      <h3>域名解析</h3>
      <ul>
        <li>DNS 查询 A 记录</li>
        <li>支持多个 IP（CDN）</li>
        <li>DNS 超时处理</li>
      </ul>

      <h2>端口解析</h2>

      <h3>支持的格式</h3>
      <ul>
        <li><strong>单个端口</strong>：80</li>
        <li><strong>端口列表</strong>：80,443,3306</li>
        <li><strong>端口范围</strong>：8080-8090</li>
        <li><strong>混合</strong>：80,443,8000-9000</li>
        <li><strong>全端口</strong>：- 或 1-65535</li>
      </ul>

      <h3>端口去重和排序</h3>
      <pre><code>输入: 80,443,80,8080-8082,443
输出: [80, 443, 8080, 8081, 8082]</code></pre>

      <h2>凭据解析</h2>

      <h3>用户名密码对</h3>
      <p>支持多种格式：</p>
      <ul>
        <li><strong>单个</strong>：<code>-user admin -pwd password</code></li>
        <li><strong>文件</strong>：<code>-userf users.txt -pwdf passwords.txt</code></li>
        <li><strong>组合</strong>：<code>-upf combo.txt</code>（user:pass 格式）</li>
      </ul>

      <h3>组合生成</h3>
      <p>用户名和密码笛卡尔积：</p>
      <pre><code>users: [admin, root]
passwords: [123456, password]
→ [admin:123456, admin:password, root:123456, root:password]</code></pre>

      <h2>文件解析</h2>

      <h3>行处理</h3>
      <ul>
        <li>跳过空行</li>
        <li>跳过注释（# 开头）</li>
        <li>去除首尾空白</li>
        <li>自动检测编码（UTF-8、GBK）</li>
      </ul>

      <h3>大文件优化</h3>
      <p>流式读取，避免内存耗尽：</p>
      <pre><code>scanner := bufio.NewScanner(file)
for scanner.Scan() {
    process(scanner.Text())
}</code></pre>

      <h2>输入验证</h2>

      <h3>IP 地址验证</h3>
      <ul>
        <li>格式检查：四段，每段 0-255</li>
        <li>排除保留地址（0.0.0.0、255.255.255.255）</li>
        <li>排除组播地址（224-239）</li>
      </ul>

      <h3>端口验证</h3>
      <ul>
        <li>范围：1-65535</li>
        <li>数量限制：最多 10000 个端口</li>
      </ul>

      <h2>错误处理</h2>

      <h3>友好的错误提示</h3>
      <pre><code>Error: invalid IP address "192.168.1.256"
Line 10 in targets.txt
Hint: each part of IP should be 0-255</code></pre>

      <h2>设计权衡</h2>

      <h3>为什么不用正则表达式解析所有格式？</h3>
      <ul>
        <li>✅ 正则难以维护和调试</li>
        <li>✅ 手动解析性能更好</li>
        <li>✅ 错误提示更友好</li>
      </ul>
    `,
  },
  'proxy-system': {
    title: '代理系统',
    description: '代理支持和流量转发',
    icon: 'mdi:swap-horizontal',
    content: `
      <h2>设计目标</h2>
      <p>代理系统支持通过代理服务器进行扫描：</p>
      <ul>
        <li><strong>隐藏源 IP</strong>：通过代理隐藏真实 IP</li>
        <li><strong>绕过限制</strong>：突破网络限制</li>
        <li><strong>链式代理</strong>：支持多级代理</li>
        <li><strong>协议支持</strong>：HTTP、HTTPS、SOCKS5</li>
      </ul>

      <h2>支持的代理类型</h2>

      <h3>1. HTTP/HTTPS 代理</h3>
      <p><strong>用途</strong>：主要用于 Web 扫描</p>
      <ul>
        <li>HTTP CONNECT 隧道</li>
        <li>支持代理认证</li>
        <li>适用于 HTTP/HTTPS 流量</li>
      </ul>

      <h3>2. SOCKS5 代理</h3>
      <p><strong>用途</strong>：通用 TCP 代理</p>
      <ul>
        <li>支持所有 TCP 流量</li>
        <li>支持用户名密码认证</li>
        <li>适用于端口扫描、服务识别</li>
      </ul>

      <h2>代理链设计</h2>

      <h3>多级代理</h3>
      <p>支持代理链：Client → Proxy1 → Proxy2 → Target</p>
      <pre><code>--proxy socks5://proxy1:1080 \\
        --proxy socks5://proxy2:1080</code></pre>

      <h3>代理池</h3>
      <ul>
        <li>支持多个代理地址</li>
        <li>随机选择或轮询</li>
        <li>失败自动切换</li>
      </ul>

      <h2>代理拨号器</h2>

      <h3>自定义 Dialer</h3>
      <p>封装代理连接逻辑：</p>
      <pre><code>type ProxyDialer interface {
    Dial(network, addr string) (net.Conn, error)
}

// SOCKS5 Dialer
type SOCKS5Dialer struct {
    proxy string
    auth  *Auth
}

func (d *SOCKS5Dialer) Dial(network, addr string) (net.Conn, error) {
    // 1. 连接到代理服务器
    conn, _ := net.Dial("tcp", d.proxy)

    // 2. SOCKS5 握手
    _ = d.handshake(conn)

    // 3. 请求连接目标
    _ = d.connect(conn, addr)

    return conn, nil
}</code></pre>

      <h2>代理认证</h2>

      <h3>支持的认证方式</h3>
      <ul>
        <li><strong>无认证</strong>：直接连接</li>
        <li><strong>用户名密码</strong>：SOCKS5 用户名密码认证</li>
        <li><strong>HTTP Basic Auth</strong>：HTTP 代理认证</li>
      </ul>

      <h3>认证信息格式</h3>
      <pre><code>socks5://username:password@proxy:1080
http://username:password@proxy:8080</code></pre>

      <h2>代理健康检查</h2>

      <h3>连接测试</h3>
      <p>扫描前测试代理可用性：</p>
      <ul>
        <li>尝试连接测试目标（如 8.8.8.8:53）</li>
        <li>测试超时 5 秒</li>
        <li>不可用的代理自动移除</li>
      </ul>

      <h3>运行时监控</h3>
      <ul>
        <li>记录代理失败次数</li>
        <li>失败率超过 50% 时标记为不可用</li>
        <li>定期重试不可用的代理</li>
      </ul>

      <h2>性能优化</h2>

      <h3>连接复用</h3>
      <p>HTTP/HTTPS 支持 Keep-Alive：</p>
      <ul>
        <li>复用代理连接</li>
        <li>减少握手开销</li>
        <li>提升扫描速度</li>
      </ul>

      <h3>超时设置</h3>
      <ul>
        <li><strong>连接超时</strong>：5 秒</li>
        <li><strong>读写超时</strong>：10 秒</li>
        <li>代理连接比直连超时更长</li>
      </ul>

      <h2>错误处理</h2>

      <h3>常见错误</h3>
      <ul>
        <li><strong>代理不可达</strong>：连接超时</li>
        <li><strong>认证失败</strong>：用户名密码错误</li>
        <li><strong>目标不可达</strong>：代理无法访问目标</li>
      </ul>

      <h3>降级策略</h3>
      <ul>
        <li>代理失败后尝试直连</li>
        <li>提供 --proxy-only 参数强制使用代理</li>
      </ul>

      <h2>设计权衡</h2>

      <h3>为什么不用系统代理设置？</h3>
      <ul>
        <li>✅ 明确指定更可控</li>
        <li>✅ 避免影响其他程序</li>
        <li>✅ 支持代理链</li>
      </ul>
    `,
  },
  'i18n-system': {
    title: '国际化系统',
    description: '多语言支持',
    icon: 'mdi:translate',
    content: `
      <h2>设计目标</h2>
      <p>国际化系统提供多语言支持：</p>
      <ul>
        <li><strong>多语言</strong>：中文、英文</li>
        <li><strong>动态切换</strong>：运行时切换语言</li>
        <li><strong>易扩展</strong>：添加新语言简单</li>
        <li><strong>零开销</strong>：不使用时零性能影响</li>
      </ul>

      <h2>i18n 架构</h2>

      <h3>翻译键值对</h3>
      <pre><code>// zh-CN
{
  "scan.start": "开始扫描",
  "scan.complete": "扫描完成",
  "error.network": "网络错误"
}

// en-US
{
  "scan.start": "Start scanning",
  "scan.complete": "Scan complete",
  "error.network": "Network error"
}</code></pre>

      <h3>翻译函数</h3>
      <pre><code>func T(key string, args ...interface{}) string {
    text := i18n.Get(key)
    return fmt.Sprintf(text, args...)
}

// 使用
log.Info(T("scan.start"))
log.Info(T("scan.progress", completed, total))</code></pre>

      <h2>语言检测</h2>

      <h3>自动检测</h3>
      <ol>
        <li>检查 <code>--lang</code> 参数</li>
        <li>检查环境变量 <code>LANG</code></li>
        <li>检查系统语言</li>
        <li>默认使用英文</li>
      </ol>

      <h3>手动指定</h3>
      <pre><code>fscan --lang zh-CN
fscan --lang en-US</code></pre>

      <h2>翻译文件组织</h2>

      <h3>文件结构</h3>
      <pre><code>i18n/
├── zh-CN.json
├── en-US.json
└── ja-JP.json  // 未来扩展</code></pre>

      <h3>分模块翻译</h3>
      <ul>
        <li><strong>通用</strong>：common.*</li>
        <li><strong>扫描</strong>：scan.*</li>
        <li><strong>错误</strong>：error.*</li>
        <li><strong>插件</strong>：plugin.*</li>
      </ul>

      <h2>设计权衡</h2>

      <h3>为什么不用 i18n 库？</h3>
      <ul>
        <li>✅ 翻译需求简单</li>
        <li>✅ 减少依赖</li>
        <li>✅ 100 行代码实现</li>
        <li>❌ 缺点：不支持复数、日期格式化</li>
      </ul>

      <h3>为什么默认英文？</h3>
      <ul>
        <li>✅ 国际化标准</li>
        <li>✅ 便于全球用户使用</li>
        <li>✅ 英文更简洁</li>
      </ul>
    `,
  },
  'fingerprint-system': {
    title: '指纹识别',
    description: 'Web 和端口指纹识别',
    icon: 'mdi:fingerprint',
    content: `
      <h2>设计目标</h2>
      <p>指纹识别系统通过特征匹配识别服务和应用：</p>
      <ul>
        <li><strong>准确性</strong>：减少误报和漏报</li>
        <li><strong>覆盖面</strong>：支持主流服务和应用</li>
        <li><strong>可扩展</strong>：易于添加新指纹</li>
        <li><strong>性能</strong>：快速匹配</li>
      </ul>

      <h2>指纹类型</h2>

      <h3>1. 端口指纹</h3>
      <p>基于端口号的快速识别：</p>
      <ul>
        <li>80, 8080 → HTTP</li>
        <li>443, 8443 → HTTPS</li>
        <li>22 → SSH</li>
        <li>3306 → MySQL</li>
      </ul>

      <h3>2. Banner 指纹</h3>
      <p>基于服务 Banner 的识别：</p>
      <pre><code>SSH-2.0-OpenSSH_7.4 → OpenSSH 7.4
220 FTP Server → FTP
MySQL Handshake → MySQL</code></pre>

      <h3>3. HTTP 指纹</h3>
      <p>基于 HTTP 特征的识别：</p>
      <ul>
        <li><strong>响应头</strong>：Server、X-Powered-By</li>
        <li><strong>HTML 内容</strong>：特定标签、关键字</li>
        <li><strong>Favicon</strong>：图标哈希</li>
        <li><strong>URL 路径</strong>：特征路径</li>
      </ul>

      <h2>指纹匹配引擎</h2>

      <h3>匹配规则</h3>
      <pre><code>type Fingerprint struct {
    Name      string
    Category  string
    Match     []MatchRule
}

type MatchRule struct {
    Type    string  // header, body, favicon
    Pattern string  // 正则或字符串
    Weight  int     // 权重
}</code></pre>

      <h3>加权匹配</h3>
      <p>多个规则匹配，累计权重：</p>
      <pre><code>Server: Apache → +50
Body contains "WordPress" → +30
/wp-admin/ exists → +20
Total: 100 → WordPress</code></pre>

      <h2>Favicon 哈希</h2>

      <h3>原理</h3>
      <ol>
        <li>下载 /favicon.ico</li>
        <li>计算 MD5/MurmurHash</li>
        <li>与指纹库比对</li>
      </ol>

      <h3>优势</h3>
      <ul>
        <li>唯一性高</li>
        <li>难以伪造</li>
        <li>快速匹配</li>
      </ul>

      <h2>指纹库管理</h2>

      <h3>指纹格式</h3>
      <pre><code>{
  "name": "WordPress",
  "category": "CMS",
  "matches": [
    {
      "type": "body",
      "pattern": "wp-content",
      "weight": 30
    },
    {
      "type": "header",
      "pattern": "X-Powered-By: PHP",
      "weight": 20
    }
  ]
}</code></pre>

      <h3>指纹更新</h3>
      <ul>
        <li>在线更新指纹库</li>
        <li>本地缓存</li>
        <li>支持自定义指纹</li>
      </ul>

      <h2>性能优化</h2>

      <h3>1. 快速路径</h3>
      <p>端口指纹优先：</p>
      <pre><code>80 → 快速识别为 HTTP
→ 跳过大部分其他指纹</code></pre>

      <h3>2. 惰性匹配</h3>
      <p>高权重规则优先：</p>
      <pre><code>匹配 Server 头 → 权重 50
权重已达阈值 → 停止匹配</code></pre>

      <h3>3. 缓存结果</h3>
      <p>相同目标不重复识别</p>

      <h2>设计权衡</h2>

      <h3>为什么不用机器学习？</h3>
      <ul>
        <li>✅ 规则匹配可解释性强</li>
        <li>✅ 不需要训练数据</li>
        <li>✅ 实时性好</li>
        <li>❌ 缺点：需要手动维护指纹库</li>
      </ul>
    `,
  },
  'poc-system': {
    title: 'POC 检测',
    description: 'POC 漏洞检测引擎',
    icon: 'mdi:bug-check',
    content: `
      <h2>设计目标</h2>
      <p>POC 检测系统自动化验证已知漏洞：</p>
      <ul>
        <li><strong>准确性</strong>：低误报率</li>
        <li><strong>安全性</strong>：不破坏目标系统</li>
        <li><strong>可扩展</strong>：易于添加新 POC</li>
        <li><strong>可控性</strong>：支持选择性执行</li>
      </ul>

      <h2>POC 定义</h2>

      <h3>POC 结构</h3>
      <pre><code>type POC struct {
    ID          string
    Name        string
    Severity    string  // critical, high, medium, low
    Target      string  // 适用目标
    Request     Request
    Verify      VerifyFunc
}</code></pre>

      <h3>POC 示例</h3>
      <pre><code>{
  "id": "CVE-2021-44228",
  "name": "Log4j RCE",
  "severity": "critical",
  "target": "java",
  "request": {
    "method": "GET",
    "path": "/",
    "headers": {
      "User-Agent": "\${jndi:ldap://...}"
    }
  },
  "verify": {
    "type": "dnslog",
    "contains": "request received"
  }
}</code></pre>

      <h2>POC 执行引擎</h2>

      <h3>执行流程</h3>
      <ol>
        <li>指纹识别（如 Struts2）</li>
        <li>筛选对应 POC</li>
        <li>按严重性排序</li>
        <li>依次执行 POC</li>
        <li>验证漏洞存在</li>
      </ol>

      <h3>执行控制</h3>
      <ul>
        <li><strong>严重性过滤</strong>：只执行高危 POC</li>
        <li><strong>POC 选择</strong>：<code>--poc CVE-2021-44228</code></li>
        <li><strong>POC 排除</strong>：<code>--exclude-poc SQL</code></li>
      </ul>

      <h2>验证方法</h2>

      <h3>1. 响应验证</h3>
      <ul>
        <li><strong>关键字</strong>：响应包含特定字符串</li>
        <li><strong>状态码</strong>：200 vs 500</li>
        <li><strong>响应长度</strong>：长度差异</li>
      </ul>

      <h3>2. DNSLog 验证</h3>
      <p>利用 DNSLog 平台验证：</p>
      <ol>
        <li>生成唯一域名：<code>xxx.dnslog.cn</code></li>
        <li>Payload 包含该域名</li>
        <li>检查是否收到 DNS 请求</li>
      </ol>

      <h3>3. 时间盲注验证</h3>
      <pre><code>sleep(5) → 响应时间 > 5s → 漏洞存在</code></pre>

      <h2>安全措施</h2>

      <h3>只读 POC</h3>
      <ul>
        <li>不执行写操作</li>
        <li>不上传 Shell</li>
        <li>不修改数据</li>
      </ul>

      <h3>限速和超时</h3>
      <ul>
        <li><strong>单个 POC 超时</strong>：10 秒</li>
        <li><strong>POC 间隔</strong>：1 秒</li>
        <li>避免触发 WAF</li>
      </ul>

      <h2>POC 库管理</h2>

      <h3>POC 来源</h3>
      <ul>
        <li>内置 POC（高质量）</li>
        <li>在线 POC 库</li>
        <li>用户自定义 POC</li>
      </ul>

      <h3>POC 更新</h3>
      <pre><code>fscan --update-poc</code></pre>

      <h2>并发控制</h2>

      <h3>POC 并发</h3>
      <p>不同目标的 POC 可并发：</p>
      <ul>
        <li>目标 A 的 POC 和目标 B 的 POC 并发</li>
        <li>同一目标的 POC 串行（避免干扰）</li>
      </ul>

      <h2>结果输出</h2>

      <h3>漏洞信息</h3>
      <pre><code>[+] Vulnerability Found
Host: 192.168.1.1:8080
POC: CVE-2021-44228
Severity: Critical
Payload: \${jndi:ldap://...}
Verify: DNSLog received</code></pre>

      <h2>设计权衡</h2>

      <h3>为什么不集成 Xray/Nuclei？</h3>
      <ul>
        <li>✅ 内置 POC 更快</li>
        <li>✅ 可以精确控制</li>
        <li>✅ 减少依赖</li>
        <li>❌ 缺点：POC 数量少</li>
      </ul>

      <h3>为什么默认不执行 POC？</h3>
      <ul>
        <li>✅ POC 有风险</li>
        <li>✅ 增加扫描时间</li>
        <li>✅ 用户主动选择更安全</li>
      </ul>
      <p>提供 <code>--poc</code> 参数启用 POC 检测</p>
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

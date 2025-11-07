<template>
  <div class="max-w-7xl mx-auto px-6">
    <!-- 页面标题区 -->
    <div class="mb-10 text-center py-12">
      <div class="inline-flex items-center justify-center p-4 rounded-full mb-6 bg-primary/10">
        <Icon icon="mdi:console-line" class="text-5xl text-primary" />
      </div>
      <h1 class="text-5xl font-bold mb-4">Fscan 参数构建器</h1>
      <p class="mt-4 text-xl max-w-3xl mx-auto text-muted-foreground">
        交互式选择扫描参数，构建自定义 Fscan 命令
      </p>
    </div>

    <!-- 扫描模式选择器 -->
    <Card class="mb-8">
      <CardContent class="p-8">
        <div class="text-center mb-6">
          <h2 class="text-2xl font-bold mb-2">选择扫描模式</h2>
          <p class="text-sm text-muted-foreground">
            三种扫描模式互斥，请选择一种模式进行配置
          </p>
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <!-- 主机扫描模式 -->
          <button
            type="button"
            class="group relative overflow-hidden rounded-xl border-2 p-6 transition-all hover:scale-105"
            :class="
              scanMode === 'host'
                ? 'border-primary bg-primary/10'
                : 'border-border bg-background hover:border-primary/50'
            "
            @click="switchScanMode('host')"
          >
            <div class="flex flex-col items-center gap-3">
              <Icon
                icon="mdi:lan"
                class="text-5xl"
                :class="scanMode === 'host' ? 'text-primary' : 'text-muted-foreground'"
              />
              <div>
                <h3 class="text-xl font-bold" :class="scanMode === 'host' ? 'text-primary' : ''">
                  主机扫描
                </h3>
                <p class="mt-1 text-sm text-muted-foreground">网络主机扫描</p>
              </div>
              <div class="mt-2 text-xs text-muted-foreground">
                使用 -h 参数
              </div>
            </div>
            <div
              v-if="scanMode === 'host'"
              class="absolute right-3 top-3"
            >
              <Icon icon="mdi:check-circle" class="text-2xl text-primary" />
            </div>
          </button>

          <!-- Web扫描模式 -->
          <button
            type="button"
            class="group relative overflow-hidden rounded-xl border-2 p-6 transition-all hover:scale-105"
            :class="
              scanMode === 'web'
                ? 'border-primary bg-primary/10'
                : 'border-border bg-background hover:border-primary/50'
            "
            @click="switchScanMode('web')"
          >
            <div class="flex flex-col items-center gap-3">
              <Icon
                icon="mdi:web"
                class="text-5xl"
                :class="scanMode === 'web' ? 'text-primary' : 'text-muted-foreground'"
              />
              <div>
                <h3 class="text-xl font-bold" :class="scanMode === 'web' ? 'text-primary' : ''">
                  Web 扫描
                </h3>
                <p class="mt-1 text-sm text-muted-foreground">Web URL 扫描</p>
              </div>
              <div class="mt-2 text-xs text-muted-foreground">
                使用 -u 参数
              </div>
            </div>
            <div
              v-if="scanMode === 'web'"
              class="absolute right-3 top-3"
            >
              <Icon icon="mdi:check-circle" class="text-2xl text-primary" />
            </div>
          </button>

          <!-- 本地扫描模式 -->
          <button
            type="button"
            class="group relative overflow-hidden rounded-xl border-2 p-6 transition-all hover:scale-105"
            :class="
              scanMode === 'local'
                ? 'border-primary bg-primary/10'
                : 'border-border bg-background hover:border-primary/50'
            "
            @click="switchScanMode('local')"
          >
            <div class="flex flex-col items-center gap-3">
              <Icon
                icon="mdi:desktop-tower"
                class="text-5xl"
                :class="scanMode === 'local' ? 'text-primary' : 'text-muted-foreground'"
              />
              <div>
                <h3 class="text-xl font-bold" :class="scanMode === 'local' ? 'text-primary' : ''">
                  本地扫描
                </h3>
                <p class="mt-1 text-sm text-muted-foreground">本地信息收集</p>
              </div>
              <div class="mt-2 text-xs text-muted-foreground">
                使用 -local 参数
              </div>
            </div>
            <div
              v-if="scanMode === 'local'"
              class="absolute right-3 top-3"
            >
              <Icon icon="mdi:check-circle" class="text-2xl text-primary" />
            </div>
          </button>
        </div>
      </CardContent>
    </Card>

    <!-- 空白区域，为悬浮的命令预览提供间距 -->
    <div class="h-24"></div>

    <!-- 命令预览组件（始终显示） -->
    <CommandPreview
      :params="params"
      :has-targets="hasTargets"
      @reset="resetCommand"
      @copy="copyCommand"
    />

    <!-- 目标参数组件 - 仅在主机扫描模式显示 -->
    <TargetParams
      v-if="scanMode === 'host'"
      v-model:params="params"
      :port-presets="portPresets"
      @add-target="addTarget"
      @remove-target="removeTarget"
      @apply-port-preset="applyPortPreset"
    />

    <!-- Web扫描组件 - 仅在Web扫描模式显示 -->
    <WebScanParams v-if="scanMode === 'web'" v-model:params="params" />

    <!-- 扫描控制组件 -->
    <ScanControlParams
      v-model:params="params"
      :scan-mode="scanMode"
      :scan-control-options="scanControlOptions"
      @toggle-option="toggleOption"
    />

    <!-- 认证参数组件 - 不在本地模式显示 -->
    <AuthParams v-if="scanMode !== 'local'" v-model:params="params" />

    <!-- POC测试组件 -->
    <PocParams v-model:params="params" :poc-options="pocOptions" @toggle-option="toggleOption" />

    <!-- 输出控制组件 -->
    <OutputParams
      v-model:params="params"
      :output-options="outputOptions"
      @toggle-option="toggleOption"
    />

    <!-- 命令详情组件 -->
    <CommandDetails
      :params="params"
      :has-targets="hasTargets"
      :enabled-options="getEnabledOptions()"
    />

    <!-- 悬浮操作按钮 -->
    <div v-if="hasTargets" class="fixed bottom-6 right-6 flex flex-col space-y-3">
      <button
        class="p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        :class="
          isDark
            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            : 'bg-white text-gray-700 hover:bg-gray-100'
        "
        @click="scrollToTop"
      >
        <Icon icon="mdi:arrow-up" class="text-xl" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, inject, provide, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import CommandPreview from './CommandPreview.vue'
import TargetParams from './TargetParams.vue'
import ScanControlParams from './ScanControlParams.vue'
import AuthParams from './AuthParams.vue'
import WebScanParams from './WebScanParams.vue'
import PocParams from './PocParams.vue'
import OutputParams from './OutputParams.vue'
import CommandDetails from './CommandDetails.vue'

// 从父组件获取暗黑模式状态
const isDark = inject('isDark', ref(false))
// 向子组件提供暗黑模式状态
provide('isDark', isDark)

// 复制成功状态
const showCopySuccess = ref(false)
provide('showCopySuccess', showCopySuccess)

// 目标输入框
const targetInput = ref('')
provide('targetInput', targetInput)

// 扫描模式状态：'host', 'web', 'local'
const scanMode = ref('host')

// 端口预设
const portPresets = [
  { name: '常用', value: '21,22,80,443,3306,6379,8080,8443', icon: 'mdi:star' },
  { name: '全端口', value: '1-65535', icon: 'mdi:dots-horizontal' },
  { name: 'Web', value: '80,443,8080-8090', icon: 'mdi:web' },
  { name: '数据库', value: '1433,1521,3306,5432,6379,27017', icon: 'mdi:database' },
]

// 检查是否有目标
const hasTargets = computed(() => {
  return params.h.length > 0 || params.u || params.uf || params.hf
})

// 命令参数状态 - 按照参数分类组织
const params = reactive({
  // 目标配置参数
  h: [], // 目标地址，可多个
  eh: '', // 要排除的主机
  ehf: '', // 排除主机文件
  p: '21,22,80,443,3306,6379,8080,8443', // 端口
  ep: '', // 排除端口
  hf: '', // 主机文件
  pf: '', // 端口文件

  // 扫描控制参数
  m: 'all', // 扫描模式
  t: 600, // 扫描线程数 (fscan 默认值)
  time: 3, // 超时时间
  mt: 20, // 模块线程数 (fscan 默认值)
  gt: 180, // 全局超时时间
  local: '', // 本地插件名称
  retry: 3, // 最大重试次数

  // 认证与凭据参数
  user: '', // 默认用户名
  pwd: '', // 默认密码
  usera: '', // 附加用户名
  pwda: '', // 附加密码
  userf: '', // 用户名文件
  pwdf: '', // 密码文件
  upf: '', // 用户密码对文件
  hashf: '', // hash文件
  hash: '', // hash值
  domain: '', // 域名
  sshkey: '', // SSH密钥路径

  // Redis利用参数
  rf: '', // Redis利用目标文件
  rs: '', // Redis反弹Shell命令
  noredis: false, // 禁用Redis利用测试
  rwp: '', // Redis文件写入路径
  rwc: '', // Redis文件写入内容
  rwf: '', // Redis写入的源文件

  // Web扫描参数
  u: '', // 目标URL
  uf: '', // URLs文件
  cookie: '', // Cookie
  wt: 5, // Web超时
  'max-redirect': 10, // 最大重定向次数
  proxy: '', // HTTP代理
  socks5: '', // Socks5代理

  // POC测试参数
  pocpath: '', // POC路径
  pocname: '', // POC名称
  num: 20, // POC线程数
  nopoc: false,

  // 发包频率控制参数
  rate: 0, // 发包速率限制 (每分钟最大发包数，0表示无限制)
  maxpkts: 0, // 整个程序最大发包总数 (0表示无限制)

  // 输出与显示控制参数
  o: 'result.txt', // 输出文件
  f: 'txt', // 输出格式
  log: 'SUCCESS', // 日志级别

  // 本地插件配置参数
  rsh: '', // reverseshell 反弹Shell目标
  'start-socks5': 0, // socks5proxy 代理监听端口
  'fsh-port': 4444, // forwardshell 正向Shell监听端口
  'keylog-output': 'keylog.txt', // keylogger 输出文件
  'download-url': '', // downloader 下载URL
  'download-path': '', // downloader 保存路径
  'persistence-file': '', // 持久化插件目标文件
})

// 扫描控制选项
const scanControlOptions = reactive({
  np: {
    name: '禁用Ping',
    description: '禁用存活探测，对所有目标执行扫描',
    param: 'np',
    enabled: false,
    icon: 'mdi:access-point-network-off',
    detail: '禁用Ping存活探测，对所有目标执行扫描',
  },
  ao: {
    name: '仅存活主机',
    description: '仅输出存活主机，不进行端口扫描',
    param: 'ao',
    enabled: false,
    icon: 'mdi:check-network',
    detail: '仅进行主机存活探测并输出存活主机，不执行端口扫描和其他检测',
  },
  nobr: {
    name: '禁用暴力破解',
    description: '关闭所有暴力破解功能',
    param: 'nobr',
    enabled: false,
    icon: 'mdi:shield-lock',
    detail: '完全禁用暴力破解模块，提高扫描速度并减少对目标系统的影响',
  },
})

// POC测试选项
const pocOptions = reactive({
  nopoc: {
    name: '不使用POC扫描',
    description: '禁用所有POC扫描功能',
    param: 'nopoc',
    enabled: false,
    icon: 'mdi:shield-off',
    detail: '完全禁用所有POC扫描过程，仅执行其他类型的检测',
  },
  full: {
    name: '完整POC测试',
    description: '使用所有可用POC进行测试',
    param: 'full',
    enabled: false,
    icon: 'mdi:shield-bug',
    detail: '使用所有可用的POC对目标进行完整测试',
  },
  dns: {
    name: '启用DNS Log',
    description: '使用DNS Log技术检测漏洞',
    param: 'dns',
    enabled: false,
    icon: 'mdi:dns',
    detail: '启用DNS Log技术辅助检测漏洞',
  },
})

// 输出控制选项
const outputOptions = reactive({
  no: {
    name: '禁用结果保存',
    description: '不保存扫描结果到文件',
    param: 'no',
    enabled: false,
    icon: 'mdi:content-save-off',
    detail: '不将扫描结果保存到文件中，仅在控制台显示',
  },
  silent: {
    name: '静默模式',
    description: '静默模式，完全不输出Banner和提示信息',
    param: 'silent',
    enabled: false,
    icon: 'mdi:volume-off',
    detail: '静默模式下完全跳过Banner显示和提示信息，只输出扫描结果',
  },
  nocolor: {
    name: '禁用彩色输出',
    description: '禁用控制台彩色输出',
    param: 'nocolor',
    enabled: false,
    icon: 'mdi:palette-outline',
    detail: '禁用控制台的彩色文本输出，适用于不支持ANSI颜色的终端',
  },
  nopg: {
    name: '禁用进度条',
    description: '禁用扫描进度条显示',
    param: 'nopg',
    enabled: false,
    icon: 'mdi:progress-close',
    detail: '禁用扫描过程中的进度条显示',
  },
})

// 构建完整命令用于复制
const builtCommand = computed(() => {
  let cmd = './fscan'

  // 添加目标
  if (params.h.length > 0) {
    cmd += ` -h ${params.h.join(',')}`
  }

  // 添加其他参数
  for (const [key, value] of Object.entries(params)) {
    if (key === 'h') continue // 已处理
    if (value && value !== '') {
      if (typeof value === 'boolean') {
        if (value) cmd += ` -${key}`
      } else {
        cmd += ` -${key} ${value}` // 确保参数和值之间有空格
      }
    }
  }

  return cmd
})

// 获取已启用的选项
const getEnabledOptions = () => {
  const enabled = []

  // 合并所有选项
  const allOptions = {
    ...scanControlOptions,
    ...pocOptions,
    ...outputOptions,
  }

  for (const option of Object.values(allOptions)) {
    if (option.enabled) {
      enabled.push(option)
    }
  }

  return enabled
}

// 添加目标
const addTarget = () => {
  const target = targetInput.value.trim()
  if (target !== '' && !params.h.includes(target)) {
    params.h.push(target)
    targetInput.value = ''

    // 如果添加第一个目标，滚动到顶部查看命令预览
    if (params.h.length === 1) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)
    }
  }
}

// 移除目标
const removeTarget = index => {
  params.h.splice(index, 1)
}

// 应用端口预设
const applyPortPreset = portValue => {
  params.p = portValue
}

// 切换选项
const toggleOption = (key, option) => {
  option.enabled = !option.enabled

  if (option.enabled) {
    // 启用选项
    if (option.paramValue) {
      // 有值的参数
      params[option.param] = option.paramValue
    } else {
      // 布尔标志参数
      params[option.param] = true
    }
  } else {
    // 禁用选项 - 确保完全删除
    delete params[option.param]
  }
}

// 复制命令
const copyCommand = async () => {
  if (!hasTargets.value) {
    alert('请先添加目标地址再复制命令')
    return
  }

  try {
    await navigator.clipboard.writeText(builtCommand.value)
    showCopySuccess.value = true
    setTimeout(() => {
      showCopySuccess.value = false
    }, 2000)
  } catch (err) {
    console.error('复制失败: ', err)
    alert('复制失败，请手动复制命令')
  }
}

// 重置命令
const resetCommand = () => {
  // 重置目标
  params.h = []
  targetInput.value = ''

  // 目标配置参数
  params.eh = ''
  params.ehf = ''
  params.p = '21,22,80,443,3306,6379,8080,8443'
  params.ep = ''
  params.hf = ''
  params.pf = ''

  // 扫描控制参数
  params.m = 'all'
  params.t = 600 // fscan 默认值
  params.time = 3
  params.mt = 20 // fscan 默认值
  params.gt = 180
  params.local = ''
  params.retry = 3

  // 认证与凭据参数
  params.user = ''
  params.pwd = ''
  params.usera = ''
  params.pwda = ''
  params.userf = ''
  params.pwdf = ''
  params.upf = ''
  params.hashf = ''
  params.hash = ''
  params.domain = ''
  params.sshkey = ''

  // Redis利用参数
  params.rf = ''
  params.rs = ''
  params.noredis = false
  params.rwp = ''
  params.rwc = ''
  params.rwf = ''

  // Web扫描参数
  params.u = ''
  params.uf = ''
  params.cookie = ''
  params.wt = 5
  params['max-redirect'] = 10
  params.proxy = ''
  params.socks5 = ''

  // POC测试参数
  params.pocpath = ''
  params.pocname = ''
  params.num = 20

  // 发包频率控制参数
  params.rate = 0
  params.maxpkts = 0

  // 输出与显示控制参数
  params.o = 'result.txt'
  params.f = 'txt'
  params.log = 'SUCCESS'

  // 本地插件配置参数
  params.rsh = ''
  params['start-socks5'] = 0
  params['fsh-port'] = 4444
  params['keylog-output'] = 'keylog.txt'
  params['download-url'] = ''
  params['download-path'] = ''
  params['persistence-file'] = ''

  // 重置所有选项
  for (const key in scanControlOptions) {
    scanControlOptions[key].enabled = false
    delete params[scanControlOptions[key].param]
  }

  for (const key in pocOptions) {
    pocOptions[key].enabled = false
    delete params[pocOptions[key].param]
  }

  for (const key in outputOptions) {
    outputOptions[key].enabled = false
    delete params[outputOptions[key].param]
  }
}

// 滚动到顶部
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 切换扫描模式
const switchScanMode = newMode => {
  if (scanMode.value === newMode) return

  const oldMode = scanMode.value
  scanMode.value = newMode

  // 根据新模式清空互斥参数
  if (newMode === 'host') {
    // 切换到主机模式：清空Web和Local参数
    params.u = ''
    params.uf = ''
    params.local = ''
  } else if (newMode === 'web') {
    // 切换到Web模式：清空主机和Local参数
    params.h = []
    params.hf = ''
    params.local = ''
    targetInput.value = ''
  } else if (newMode === 'local') {
    // 切换到本地模式：清空主机和Web参数
    params.h = []
    params.hf = ''
    params.u = ''
    params.uf = ''
    targetInput.value = ''
  }
}

// 自动检测当前扫描模式
const detectScanMode = () => {
  if (params.local) {
    return 'local'
  } else if (params.u || params.uf) {
    return 'web'
  } else if (params.h.length > 0 || params.hf) {
    return 'host'
  }
  return scanMode.value // 默认保持当前模式
}

// 添加点击和键盘事件，在有目标时允许快速复制
onMounted(() => {
  window.addEventListener('keydown', e => {
    // Ctrl+C 或 Command+C (Mac)
    if ((e.ctrlKey || e.metaKey) && e.key === 'c' && hasTargets.value) {
      // 检查是否在输入框中
      const activeElement = document.activeElement
      if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault()
        copyCommand()
      }
    }
  })

  // 初始化时检测扫描模式
  scanMode.value = detectScanMode()
})
</script>

<style scoped>
/* 平滑过渡效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

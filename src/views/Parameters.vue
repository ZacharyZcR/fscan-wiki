<template>
  <div class="max-w-7xl mx-auto px-6">
    <!-- 页面标题区 -->
    <div class="mb-10 text-center py-12">
      <div
        class="inline-flex items-center justify-center p-4 rounded-full mb-6 bg-opacity-10"
        :class="isDark ? 'bg-blue-500' : 'bg-blue-100'"
      >
        <Icon
          icon="mdi:console-line"
          class="text-5xl"
          :class="isDark ? 'text-blue-400' : 'text-blue-600'"
        />
      </div>
      <h1
        class="text-5xl font-bold transition-colors duration-300 mb-4"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        Fscan 参数构建器
      </h1>
      <p
        class="mt-4 text-xl transition-colors duration-300 max-w-3xl mx-auto"
        :class="isDark ? 'text-gray-400' : 'text-gray-600'"
      >
        交互式选择扫描参数，构建自定义 Fscan 命令
      </p>
    </div>

    <!-- 空白区域，为悬浮的命令预览提供间距 -->
    <div class="h-24"></div>

    <!-- 命令预览组件（始终显示） -->
    <CommandPreview
      :params="params"
      :has-targets="hasTargets"
      @reset="resetCommand"
      @copy="copyCommand"
    />

    <!-- 目标参数组件 -->
    <TargetParams
      v-model:params="params"
      :port-presets="portPresets"
      @add-target="addTarget"
      @remove-target="removeTarget"
      @apply-port-preset="applyPortPreset"
    />

    <!-- 扫描控制组件 -->
    <ScanControlParams
      v-model:params="params"
      :scan-control-options="scanControlOptions"
      @toggle-option="toggleOption"
    />

    <!-- 认证参数组件 -->
    <AuthParams v-model:params="params" />

    <!-- Web扫描组件 -->
    <WebScanParams v-model:params="params" />

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
  p: '21,22,80,443,3306,6379,8080,8443', // 端口
  ep: '',
  hf: '', // 主机文件
  pf: '', // 端口文件

  // 扫描控制参数
  m: 'all', // 扫描模式
  t: 10, // 扫描线程数
  time: 3, // 超时时间
  mt: 10, // 模块线程数
  gt: 180, // 全局超时时间
  top: 10, // 存活优先扫描数量
  retry: 3,

  // 认证与凭据参数
  user: '', // 默认用户名
  pwd: '', // 默认密码
  usera: '', // 附加用户名
  pwda: '', // 附加密码
  userf: '', // 用户名文件
  pwdf: '', // 密码文件
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
  proxy: '', // HTTP代理
  socks5: '', // Socks5代理

  // POC测试参数
  pocpath: '', // POC路径
  pocname: '', // POC名称
  num: 20, // POC线程数
  nopoc: false,

  // 输出与显示控制参数
  o: 'result.txt', // 输出文件
  f: 'txt', // 输出格式
  log: 'SUCCESS', // 日志级别
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
  ping: {
    name: '使用Ping',
    description: '使用系统Ping命令进行存活探测',
    param: 'ping',
    enabled: false,
    icon: 'mdi:access-point-network',
    detail: '使用系统Ping命令进行主机存活探测',
  },
  fingerprint: {
    name: '启用指纹识别',
    description: '对开放端口进行指纹识别',
    param: 'fingerprint',
    enabled: false,
    icon: 'mdi:fingerprint',
    detail: '启用对开放端口的服务指纹识别',
  },
  local: {
    name: '本地模式',
    description: '本地模式，不使用互联网检测',
    param: 'local',
    enabled: false,
    icon: 'mdi:desktop-classic',
    detail: '以本地模式运行，不使用互联网进行辅助检测',
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
    description: 'ICMP探测过程不输出信息',
    param: 'silent',
    enabled: false,
    icon: 'mdi:volume-off',
    detail: '在ICMP探测过程中不输出信息，减少控制台输出',
  },
  nocolor: {
    name: '禁用彩色输出',
    description: '禁用控制台彩色输出',
    param: 'nocolor',
    enabled: false,
    icon: 'mdi:palette-outline',
    detail: '禁用控制台的彩色文本输出，适用于不支持ANSI颜色的终端',
  },
  pg: {
    name: '显示进度条',
    description: '显示扫描进度条',
    param: 'pg',
    enabled: false,
    icon: 'mdi:progress-helper',
    detail: '在控制台显示扫描过程的进度条',
  },
  sp: {
    name: '显示扫描计划',
    description: '扫描前显示详细的扫描计划',
    param: 'sp',
    enabled: false,
    icon: 'mdi:clipboard-list',
    detail: '在开始扫描前显示详细的扫描计划',
  },
  slow: {
    name: '慢速日志输出',
    description: '使用慢速日志输出模式',
    param: 'slow',
    enabled: false,
    icon: 'mdi:timer-sand',
    detail: '使用慢速日志输出模式，减轻屏幕刷新压力',
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

  for (const [key, option] of Object.entries(allOptions)) {
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
  params.p = '21,22,80,443,3306,6379,8080,8443'
  params.hf = ''
  params.pf = ''

  // 扫描控制参数
  params.m = 'all'
  params.t = 10
  params.time = 3
  params.mt = 10
  params.gt = 180
  params.top = 10

  // 认证与凭据参数
  params.user = ''
  params.pwd = ''
  params.usera = ''
  params.pwda = ''
  params.userf = ''
  params.pwdf = ''
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
  params.proxy = ''
  params.socks5 = ''

  // POC测试参数
  params.pocpath = ''
  params.pocname = ''
  params.num = 20

  // 输出与显示控制参数
  params.o = 'result.txt'
  params.f = 'txt'
  params.log = 'success'

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

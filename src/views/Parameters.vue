<template>
  <div class="max-w-7xl mx-auto px-6">
    <!-- 页面标题区 - 更大气的标题设计 -->
    <div class="mb-16 text-center py-12">
      <div class="inline-flex items-center justify-center p-4 rounded-full mb-6 bg-opacity-10"
           :class="isDark ? 'bg-blue-500' : 'bg-blue-100'">
        <Icon icon="mdi:console-line" class="text-5xl" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
      </div>
      <h1 class="text-5xl font-bold transition-colors duration-300 mb-4"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        Fscan 参数构建器
      </h1>
      <p class="mt-4 text-xl transition-colors duration-300 max-w-3xl mx-auto"
         :class="isDark ? 'text-gray-400' : 'text-gray-600'">
        交互式选择扫描参数，构建自定义 Fscan 命令
      </p>
    </div>

    <!-- 命令预览框 - 更宽更突出 -->
    <div class="mb-16 sticky top-6 z-10">
      <div class="rounded-xl overflow-hidden shadow-xl transition-all duration-300 border"
           :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
        <div class="px-8 py-6 border-b flex justify-between items-center"
             :class="isDark ? 'border-gray-700 bg-gray-800/80' : 'border-gray-200 bg-gray-50'">
          <div class="flex items-center">
            <Icon icon="mdi:console" class="mr-3 text-2xl" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
            <span class="font-medium text-xl" :class="isDark ? 'text-gray-200' : 'text-gray-700'">命令预览</span>
          </div>
          <div class="flex items-center space-x-4">
            <button @click="resetCommand"
                    class="text-sm px-5 py-3 rounded-lg transition-all duration-200 flex items-center hover:scale-105"
                    :class="isDark ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'">
              <Icon icon="mdi:refresh" class="mr-2 text-base" />
              重置
            </button>
            <button @click="copyCommand"
                    class="text-sm px-5 py-3 rounded-lg transition-all duration-200 flex items-center hover:scale-105"
                    :class="isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'">
              <Icon icon="mdi:content-copy" class="mr-2 text-base" />
              复制命令
            </button>
          </div>
        </div>
        <div class="relative">
          <!-- 命令预览区域 - 更宽敞 -->
          <div class="p-8 overflow-x-auto font-mono text-base whitespace-pre-wrap break-all min-h-[80px]"
               :class="isDark ? 'text-gray-300 bg-gray-800' : 'text-gray-800 bg-white'">
            <span v-if="params.h.length === 0" class="text-gray-500 italic">添加目标地址后，命令将显示在这里</span>
            <template v-else>
              <span class="text-green-500 dark:text-green-400">./fscan</span>
              <span v-for="(part, index) in formattedCommand" :key="index"
                    :class="part.type === 'param' ? 'text-blue-600 dark:text-blue-400' :
                           part.type === 'value' ? 'text-yellow-600 dark:text-yellow-400' : ''">
                {{ part.text }}
              </span>
            </template>
          </div>

          <!-- 复制成功提示 -->
          <Transition name="fade">
            <div v-if="showCopySuccess"
                 class="absolute bottom-4 right-4 py-2 px-4 rounded-full text-sm font-medium flex items-center shadow-lg"
                 :class="isDark ? 'bg-green-600/90 text-white' : 'bg-green-100 text-green-800 border border-green-200'">
              <Icon icon="mdi:check-circle" class="mr-2 text-base" />
              <span>复制成功!</span>
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <!-- 基础参数卡片 - 占据整行 -->
    <div class="mb-16 rounded-xl border overflow-hidden shadow-lg transition-colors duration-300"
         :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
      <div class="px-8 py-6 border-b flex items-center"
           :class="isDark ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'">
        <Icon icon="mdi:tune-vertical" class="mr-3 text-2xl" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
        <h2 class="font-medium text-xl" :class="isDark ? 'text-gray-200' : 'text-gray-700'">基础参数</h2>
      </div>
      <div class="p-8">
        <!-- 目标参数区域 -->
        <div class="mb-10">
          <label class="block mb-3 text-lg font-medium"
                 :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            目标地址
          </label>
          <div class="flex">
            <input type="text" v-model="targetInput" @keyup.enter="addTarget"
                   placeholder="IP/域名/IP段 (例如: 192.168.1.1/24)"
                   class="flex-1 px-4 py-3 text-base rounded-l-lg border outline-none transition-colors duration-200"
                   :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
            <button @click="addTarget"
                    class="px-6 py-3 rounded-r-lg text-white text-base transition-all duration-200 flex items-center hover:shadow-md"
                    :class="isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'">
              <Icon icon="mdi:plus" class="mr-2 text-lg" />
              添加
            </button>
          </div>

          <!-- 目标标签 -->
          <div v-if="params.h.length > 0" class="mt-5 flex flex-wrap gap-2">
            <div v-for="(target, index) in params.h" :key="index"
                 class="text-sm px-3 py-2 rounded-full flex items-center group transition-all duration-200"
                 :class="isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'">
              <span class="mr-2">{{ target }}</span>
              <button @click="removeTarget(index)" class="text-sm p-0.5 rounded-full group-hover:bg-red-500/20">
                <Icon icon="mdi:close-circle" class="text-base transition-colors duration-200"
                      :class="isDark ? 'text-gray-400 group-hover:text-red-400' : 'text-gray-500 group-hover:text-red-500'" />
              </button>
            </div>
          </div>
        </div>

        <!-- 端口和线程设置区域 - 横向布局 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <!-- 端口参数 -->
          <div>
            <label class="block mb-3 text-lg font-medium"
                   :class="isDark ? 'text-gray-300' : 'text-gray-700'">
              扫描端口
            </label>
            <div class="flex">
              <input type="text" v-model="params.p" placeholder="端口 (例如: 80,443,8080)"
                     class="w-full px-4 py-3 text-base rounded-lg border outline-none transition-colors duration-200"
                     :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
            </div>
            <div class="mt-3 flex flex-wrap gap-2">
              <button v-for="preset in portPresets" :key="preset.name"
                      @click="applyPortPreset(preset.value)"
                      class="text-sm px-3 py-2 rounded-lg transition-all duration-200 flex items-center hover:scale-105"
                      :class="isDark ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'">
                <Icon :icon="preset.icon" class="mr-2 text-base" :class="isDark ? 'text-gray-400' : 'text-gray-500'" />
                {{ preset.name }}
              </button>
            </div>
          </div>

          <!-- 线程和超时设置 -->
          <div>
            <div class="mb-6">
              <label class="block mb-3 text-lg font-medium flex justify-between"
                     :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                <span>线程数</span>
                <span class="text-sm" :class="isDark ? 'text-gray-500' : 'text-gray-500'">1-2000</span>
              </label>
              <div class="flex items-center">
                <button @click="decrementNum"
                        class="px-4 py-3 rounded-l-lg border border-r-0 transition-colors duration-200"
                        :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400 hover:text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-700'">
                  <Icon icon="mdi:minus" class="text-lg" />
                </button>
                <input type="number" v-model.number="params.num" min="1" max="2000"
                       class="w-full px-4 py-3 text-base border text-center outline-none transition-colors duration-200"
                       :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
                <button @click="incrementNum"
                        class="px-4 py-3 rounded-r-lg border border-l-0 transition-colors duration-200"
                        :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400 hover:text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-700'">
                  <Icon icon="mdi:plus" class="text-lg" />
                </button>
              </div>
            </div>

            <!-- 超时设置 -->
            <div>
              <label class="block mb-3 text-lg font-medium flex justify-between"
                     :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                <span>超时时间</span>
                <span :class="isDark ? 'text-gray-400' : 'text-gray-600'">{{ params.timeout }} 秒</span>
              </label>
              <input type="range" v-model.number="params.timeout" min="1" max="60" step="1"
                     class="w-full h-3 rounded-lg appearance-none cursor-pointer transition-all duration-200"
                     :class="isDark ? 'bg-gray-700' : 'bg-gray-200'" />
            </div>
          </div>
        </div>

        <!-- 输出文件和UA设置 - 横向布局 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- 输出文件 -->
          <div>
            <label class="block mb-3 text-lg font-medium"
                   :class="isDark ? 'text-gray-300' : 'text-gray-700'">
              输出文件
            </label>
            <div class="flex items-center">
              <div class="flex-shrink-0 px-4 py-3 text-base border-y border-l rounded-l-lg"
                   :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-600'">
                <Icon icon="mdi:file-document-outline" class="text-lg" />
              </div>
              <input type="text" v-model="params.o" placeholder="结果输出文件名"
                     class="flex-1 px-4 py-3 text-base border rounded-r-lg outline-none transition-colors duration-200"
                     :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
            </div>
          </div>

          <!-- 自定义UA -->
          <div>
            <label class="block mb-3 text-lg font-medium"
                   :class="isDark ? 'text-gray-300' : 'text-gray-700'">
              自定义 User-Agent
            </label>
            <div class="flex items-center">
              <div class="flex-shrink-0 px-4 py-3 text-base border-y border-l rounded-l-lg"
                   :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-600'">
                <Icon icon="mdi:web" class="text-lg" />
              </div>
              <input type="text" v-model="params.ua" placeholder="自定义 User-Agent"
                     class="flex-1 px-4 py-3 text-base border rounded-r-lg outline-none transition-colors duration-200"
                     :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 扫描模式卡片 - 整行布局 -->
    <div class="mb-16 rounded-xl border overflow-hidden shadow-lg transition-colors duration-300"
         :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
      <div class="px-8 py-6 border-b flex items-center"
           :class="isDark ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'">
        <Icon icon="mdi:radar" class="mr-3 text-2xl" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
        <h2 class="font-medium text-xl" :class="isDark ? 'text-gray-200' : 'text-gray-700'">扫描模式</h2>
      </div>
      <div class="p-8">
        <!-- 扫描模式选项 - 网格布局 -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div v-for="(option, key) in scanModeOptions" :key="key"
               class="flex items-center justify-between p-5 rounded-xl transition-all duration-200 hover:shadow-md"
               :class="[option.enabled ?
                       (isDark ? 'bg-blue-900/30 border border-blue-500/20' : 'bg-blue-50 border border-blue-100') :
                       (isDark ? 'bg-gray-750 border border-gray-700' : 'bg-gray-50 border border-gray-200')]">
            <div class="flex-1">
              <div class="font-medium text-base flex items-center"
                   :class="isDark ? 'text-gray-200' : 'text-gray-700'">
                <Icon :icon="option.icon" class="mr-2 text-xl"
                      :class="option.enabled ? (isDark ? 'text-blue-400' : 'text-blue-600') : (isDark ? 'text-gray-500' : 'text-gray-400')" />
                {{ option.name }}
              </div>
              <div class="text-sm mt-1.5 ml-7"
                   :class="isDark ? 'text-gray-400' : 'text-gray-500'">
                {{ option.description }}
              </div>
            </div>
            <!-- 开关样式 -->
            <button @click="toggleOption(key, option)" class="flex-shrink-0 ml-4">
              <div class="w-14 h-7 rounded-full transition-colors duration-200 flex items-center px-0.5"
                   :class="option.enabled ? 'bg-blue-600' : (isDark ? 'bg-gray-600' : 'bg-gray-300')">
                <div class="w-6 h-6 rounded-full bg-white transform transition-transform duration-200 shadow-md"
                     :class="option.enabled ? 'translate-x-7' : 'translate-x-0'"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 高级选项卡片 - 整行布局 -->
    <div class="mb-16 rounded-xl border overflow-hidden shadow-lg transition-colors duration-300"
         :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
      <div class="px-8 py-6 border-b flex items-center"
           :class="isDark ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'">
        <Icon icon="mdi:cog" class="mr-3 text-2xl" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
        <h2 class="font-medium text-xl" :class="isDark ? 'text-gray-200' : 'text-gray-700'">高级选项</h2>
      </div>
      <div class="p-8">
        <!-- 高级选项 - 网格布局 -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          <div v-for="(option, key) in advancedOptions" :key="key"
               class="flex items-center justify-between p-5 rounded-xl transition-all duration-200 hover:shadow-md"
               :class="[option.enabled ?
                       (isDark ? 'bg-blue-900/30 border border-blue-500/20' : 'bg-blue-50 border border-blue-100') :
                       (isDark ? 'bg-gray-750 border border-gray-700' : 'bg-gray-50 border border-gray-200')]">
            <div class="flex-1">
              <div class="font-medium text-base flex items-center"
                   :class="isDark ? 'text-gray-200' : 'text-gray-700'">
                <Icon :icon="option.icon" class="mr-2 text-xl"
                      :class="option.enabled ? (isDark ? 'text-blue-400' : 'text-blue-600') : (isDark ? 'text-gray-500' : 'text-gray-400')" />
                {{ option.name }}
              </div>
              <div class="text-sm mt-1.5 ml-7"
                   :class="isDark ? 'text-gray-400' : 'text-gray-500'">
                {{ option.description }}
              </div>
            </div>
            <!-- 开关样式 -->
            <button @click="toggleOption(key, option)" class="flex-shrink-0 ml-4">
              <div class="w-14 h-7 rounded-full transition-colors duration-200 flex items-center px-0.5"
                   :class="option.enabled ? 'bg-blue-600' : (isDark ? 'bg-gray-600' : 'bg-gray-300')">
                <div class="w-6 h-6 rounded-full bg-white transform transition-transform duration-200 shadow-md"
                     :class="option.enabled ? 'translate-x-7' : 'translate-x-0'"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 命令详情部分 - 更宽敞的布局 -->
    <div class="rounded-xl border overflow-hidden shadow-lg transition-colors duration-300 mb-16"
         :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
      <div class="px-8 py-6 border-b flex items-center"
           :class="isDark ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'">
        <Icon icon="mdi:information-outline" class="mr-3 text-2xl" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
        <h2 class="font-medium text-xl" :class="isDark ? 'text-gray-200' : 'text-gray-700'">命令详情</h2>
      </div>
      <div class="p-8">
        <div :class="isDark ? 'text-gray-300' : 'text-gray-700'">
          <p class="text-2xl font-medium mb-8">当前命令将执行以下操作：</p>

          <!-- 未添加目标时的提示 -->
          <div v-if="params.h.length === 0"
               class="p-8 rounded-lg mb-8 flex items-center border text-center"
               :class="isDark ? 'bg-red-900/10 text-red-300 border-red-800/20' : 'bg-red-50 text-red-600 border-red-100'">
            <Icon icon="mdi:alert-circle-outline" class="text-3xl mr-5 flex-shrink-0" />
            <p class="text-lg">请添加目标地址以开始构建命令。您可以添加单个IP、域名或CIDR格式的IP段（例如：192.168.1.1/24）。</p>
          </div>

          <!-- 已添加目标时的详情列表 -->
          <div v-else>
            <ul class="space-y-6 mb-8">
              <li class="flex items-start p-6 rounded-xl transition-colors duration-200 hover:bg-opacity-50"
                  :class="isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'">
                <div class="p-3 rounded-xl mr-5 flex-shrink-0 mt-0.5"
                     :class="isDark ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-50 text-blue-600'">
                  <Icon icon="mdi:target" class="text-2xl" />
                </div>
                <div>
                  <div class="font-medium text-xl">扫描目标</div>
                  <div class="text-lg mt-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                    {{ params.h.join(', ') }}
                    <span v-if="params.h.length > 1" class="text-sm ml-2 opacity-70">(多个目标)</span>
                  </div>
                </div>
              </li>

              <li v-if="params.p" class="flex items-start p-6 rounded-xl transition-colors duration-200 hover:bg-opacity-50"
                  :class="isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'">
                <div class="p-3 rounded-xl mr-5 flex-shrink-0 mt-0.5"
                     :class="isDark ? 'bg-purple-900/20 text-purple-400' : 'bg-purple-50 text-purple-600'">
                  <Icon icon="mdi:lan-connect" class="text-2xl" />
                </div>
                <div>
                  <div class="font-medium text-xl">扫描端口</div>
                  <div class="text-lg mt-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                    {{ params.p }}
                  </div>
                </div>
              </li>

              <li class="flex items-start p-6 rounded-xl transition-colors duration-200 hover:bg-opacity-50"
                  :class="isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'">
                <div class="p-3 rounded-xl mr-5 flex-shrink-0 mt-0.5"
                     :class="isDark ? 'bg-green-900/20 text-green-400' : 'bg-green-50 text-green-600'">
                  <Icon icon="mdi:speedometer" class="text-2xl" />
                </div>
                <div>
                  <div class="font-medium text-xl">扫描性能</div>
                  <div class="text-lg mt-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                    使用 <span class="font-medium">{{ params.num }}</span> 个线程进行扫描，超时时间设置为 <span class="font-medium">{{ params.timeout }}</span> 秒
                  </div>
                </div>
              </li>

              <li v-if="params.o" class="flex items-start p-6 rounded-xl transition-colors duration-200 hover:bg-opacity-50"
                  :class="isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'">
                <div class="p-3 rounded-xl mr-5 flex-shrink-0 mt-0.5"
                     :class="isDark ? 'bg-amber-900/20 text-amber-400' : 'bg-amber-50 text-amber-600'">
                  <Icon icon="mdi:file-document-outline" class="text-2xl" />
                </div>
                <div>
                  <div class="font-medium text-xl">结果输出</div>
                  <div class="text-lg mt-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                    扫描结果将保存到 <span class="font-medium">{{ params.o }}</span> 文件中
                  </div>
                </div>
              </li>

              <!-- 已启用的特殊选项 -->
              <li v-for="(option, key) in getEnabledOptions()" :key="key"
                  class="flex items-start p-6 rounded-xl transition-colors duration-200 hover:bg-opacity-50"
                  :class="isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'">
                <div class="p-3 rounded-xl mr-5 flex-shrink-0 mt-0.5"
                     :class="isDark ? 'bg-indigo-900/20 text-indigo-400' : 'bg-indigo-50 text-indigo-600'">
                  <Icon :icon="option.icon || 'mdi:check-circle'" class="text-2xl" />
                </div>
                <div>
                  <div class="font-medium text-xl">{{ option.name }}</div>
                  <div class="text-lg mt-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                    {{ option.detail }}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- 提示信息 - 更宽敞 -->
          <div class="p-8 rounded-xl border border-dashed"
               :class="isDark ? 'border-gray-700 bg-gray-700/30' : 'border-gray-300 bg-gray-50'">
            <div class="flex items-start">
              <div class="p-3 rounded-full mr-5 flex-shrink-0"
                   :class="isDark ? 'bg-yellow-900/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600'">
                <Icon icon="mdi:lightbulb-outline" class="text-2xl" />
              </div>
              <div>
                <p class="font-medium mb-4 text-xl">安全使用提示</p>
                <p class="text-lg leading-relaxed" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                  Fscan 是一款内网综合扫描工具，支持端口扫描、服务识别、漏洞检测等功能。在高安全环境下使用时，请合理设置线程数和超时时间，避免触发安全设备告警。建议在非生产环境先行测试，确保扫描不会对目标系统造成负面影响。详细使用方法请参考 <router-link to="/documents" class="text-blue-500 hover:underline">文档中心</router-link>。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, inject } from 'vue';
import { Icon } from '@iconify/vue';

// 从父组件获取暗黑模式状态
const isDark = inject('isDark', ref(false));

// 复制成功状态
const showCopySuccess = ref(false);

// 目标输入框
const targetInput = ref('');

// 端口预设
const portPresets = [
  { name: '常用', value: '21,22,80,443,3306,6379,8080,8443', icon: 'mdi:star' },
  { name: '全端口', value: '1-65535', icon: 'mdi:dots-horizontal' },
  { name: 'Web', value: '80,443,8080-8090', icon: 'mdi:web' },
  { name: '数据库', value: '1433,1521,3306,5432,6379,27017', icon: 'mdi:database' }
];

// 命令参数状态
const params = reactive({
  h: [], // 目标地址，可多个
  p: '21,22,80,443,3306,6379,8080,8443', // 端口
  num: 200, // 线程数
  timeout: 3, // 超时
  o: 'result.txt', // 输出文件
  ua: '', // 自定义UA
  // 其他参数将动态添加
});

// 扫描模式选项
const scanModeOptions = reactive({
  'ping': {
    name: '主机发现',
    description: '使用 Ping 方式检测目标是否存活',
    param: 'ping',
    enabled: false,
    icon: 'mdi:access-point-network',
    detail: '执行主机发现，使用 ICMP 检测目标存活状态'
  },
  'sp': {
    name: '跳过端口扫描',
    description: '跳过端口扫描阶段，直接进行漏洞检测',
    param: 'sp',
    enabled: false,
    icon: 'mdi:skip-next',
    detail: '跳过端口扫描步骤，直接执行漏洞扫描和其他检测'
  },
  'proxy': {
    name: 'Socks5代理',
    description: '使用 Socks5 代理进行扫描',
    param: 'proxy',
    paramValue: '127.0.0.1:7890',
    enabled: false,
    icon: 'mdi:network-outline',
    detail: '通过 Socks5 代理 (127.0.0.1:7890) 执行扫描'
  },
  'pa': {
    name: '全端口指纹识别',
    description: '对所有开放端口进行指纹识别',
    param: 'pa',
    enabled: false,
    icon: 'mdi:fingerprint',
    detail: '对所有开放端口执行服务指纹识别'
  },
  'nobr': {
    name: '禁用爆破',
    description: '禁用默认的弱口令爆破功能',
    param: 'nobr',
    enabled: false,
    icon: 'mdi:lock-outline',
    detail: '禁用弱口令爆破模块，减小扫描影响'
  },
});

// 高级选项
const advancedOptions = reactive({
  'nopoc': {
    name: '禁用漏洞检测',
    description: '禁用漏洞扫描和利用模块',
    param: 'nopoc',
    enabled: false,
    icon: 'mdi:shield-off-outline',
    detail: '禁用所有漏洞检测功能，只执行端口扫描和服务识别'
  },
  'np': {
    name: '禁用Ping',
    description: '禁用存活探测，全部IP都做端口扫描',
    param: 'np',
    enabled: false,
    icon: 'mdi:lan-disconnect',
    detail: '禁用主机存活检测，对所有目标执行完整扫描'
  },
  'debug': {
    name: '调试模式',
    description: '启用调试模式，输出详细信息',
    param: 'debug',
    enabled: false,
    icon: 'mdi:bug-outline',
    detail: '启用调试模式，输出详细的扫描过程信息'
  },
  'silent': {
    name: '静默模式',
    description: '不显示扫描进度条',
    param: 'silent',
    enabled: false,
    icon: 'mdi:volume-off',
    detail: '静默执行扫描，不显示扫描进度信息'
  },
});

// 完全重写，用格式化文本片段表示命令
const formattedCommand = computed(() => {
  const parts = [];

  // 添加目标
  if (params.h.length > 0) {
    parts.push({ type: 'param', text: ' -h' });
    parts.push({ type: 'value', text: ' ' + params.h.join(',') });
  }

  // 添加其他参数
  for (const [key, value] of Object.entries(params)) {
    if (key === 'h') continue; // 已处理
    if (value && value !== '') {
      if (typeof value === 'boolean') {
        if (value) parts.push({ type: 'param', text: ' -' + key });
      } else {
        parts.push({ type: 'param', text: ' -' + key });
        parts.push({ type: 'value', text: ' ' + value });
      }
    }
  }

  return parts;
});

// 同时修复命令生成逻辑，确保复制出的命令也有正确空格
const builtCommand = computed(() => {
  let cmd = './fscan';

  // 添加目标
  if (params.h.length > 0) {
    cmd += ` -h ${params.h.join(',')}`;
  }

  // 添加其他参数
  for (const [key, value] of Object.entries(params)) {
    if (key === 'h') continue; // 已处理
    if (value && value !== '') {
      if (typeof value === 'boolean') {
        if (value) cmd += ` -${key}`;
      } else {
        cmd += ` -${key} ${value}`;  // 确保参数和值之间有空格
      }
    }
  }

  return cmd;
});

// 获取已启用的选项
const getEnabledOptions = () => {
  const enabled = {};

  // 合并所有选项
  for (const [key, option] of Object.entries({...scanModeOptions, ...advancedOptions})) {
    if (option.enabled) {
      enabled[key] = option;
    }
  }

  return enabled;
};

// 添加目标
const addTarget = () => {
  const target = targetInput.value.trim();
  if (target !== '' && !params.h.includes(target)) {
    params.h.push(target);
    targetInput.value = '';
  }
};

// 移除目标
const removeTarget = (index) => {
  params.h.splice(index, 1);
};

// 应用端口预设
const applyPortPreset = (portValue) => {
  params.p = portValue;
};

// 切换选项 - 完全修复
const toggleOption = (key, option) => {
  option.enabled = !option.enabled;

  if (option.enabled) {
    // 启用选项
    if (option.paramValue) {
      // 有值的参数
      params[option.param] = option.paramValue;
    } else {
      // 布尔标志参数
      params[option.param] = true;
    }
  } else {
    // 禁用选项 - 确保完全删除
    delete params[option.param];
  }
};

// 线程数控制
const incrementNum = () => {
  if (params.num < 2000) {
    params.num++;
  }
};

const decrementNum = () => {
  if (params.num > 1) {
    params.num--;
  }
};

// 复制命令
const copyCommand = async () => {
  if (params.h.length === 0) {
    alert('请先添加目标地址再复制命令');
    return;
  }

  try {
    await navigator.clipboard.writeText(builtCommand.value);
    showCopySuccess.value = true;
    setTimeout(() => {
      showCopySuccess.value = false;
    }, 2000);
  } catch (err) {
    console.error('复制失败: ', err);
    alert('复制失败，请手动复制命令');
  }
};

// 重置命令
const resetCommand = () => {
  // 重置目标
  params.h = [];
  targetInput.value = '';

  // 重置其他基本参数
  params.p = '21,22,80,443,3306,6379,8080,8443';
  params.num = 200;
  params.timeout = 3;
  params.o = 'result.txt';
  params.ua = '';

  // 重置扫描模式选项
  for (const key in scanModeOptions) {
    scanModeOptions[key].enabled = false;
    delete params[scanModeOptions[key].param];
  }

  // 重置高级选项
  for (const key in advancedOptions) {
    advancedOptions[key].enabled = false;
    delete params[advancedOptions[key].param];
  }
};
</script>

<style scoped>
/* 滑块样式 */
input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #3b82f6;
  cursor: pointer;
  transition: all 0.2s ease;
}

input[type="range"]::-webkit-slider-thumb:hover {
  background: #2563eb;
  transform: scale(1.1);
}

.dark input[type="range"]::-webkit-slider-thumb {
  background: #3b82f6;
  box-shadow: 0 0 4px rgba(59, 130, 246, 0.6);
}

/* 淡入淡出动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 防止长命令溢出 */
pre {
  white-space: pre-wrap;
  word-break: break-all;
}

/* 修复 input number 箭头样式 */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
</style>
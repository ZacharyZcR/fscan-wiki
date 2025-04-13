<template>
  <div class="mb-16 rounded-xl border overflow-hidden shadow-lg transition-colors duration-300"
       :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
    <div class="px-8 py-6 border-b flex items-center"
         :class="isDark ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'">
      <Icon icon="mdi:key" class="mr-3 text-2xl" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
      <h2 class="font-medium text-xl" :class="isDark ? 'text-gray-200' : 'text-gray-700'">认证与凭据参数</h2>
    </div>
    <div class="p-8">
      <!-- 标准认证参数 -->
      <div class="mb-10">
        <h3 class="text-xl font-medium mb-4"
            :class="isDark ? 'text-gray-300' : 'text-gray-700'">
          <Icon icon="mdi:account-key" class="mr-2 text-xl inline-block"
                :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
          标准认证参数
        </h3>

        <!-- 用户名和密码 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label class="block mb-3 text-lg font-medium"
                   :class="isDark ? 'text-gray-300' : 'text-gray-700'">
              默认用户名 (-user)
            </label>
            <div class="flex items-center">
              <div class="flex-shrink-0 px-4 py-3 text-base border-y border-l rounded-l-lg"
                   :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-600'">
                <Icon icon="mdi:account" class="text-lg" />
              </div>
              <input type="text" v-model="params.user" placeholder="设置默认用户名"
                     class="flex-1 px-4 py-3 text-base border rounded-r-lg outline-none transition-colors duration-200"
                     :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
            </div>
          </div>

          <div>
            <label class="block mb-3 text-lg font-medium"
                   :class="isDark ? 'text-gray-300' : 'text-gray-700'">
              默认密码 (-pwd)
            </label>
            <div class="flex items-center">
              <div class="flex-shrink-0 px-4 py-3 text-base border-y border-l rounded-l-lg"
                   :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-600'">
                <Icon icon="mdi:key-variant" class="text-lg" />
              </div>
              <input type="text" v-model="params.pwd" placeholder="设置默认密码"
                     class="flex-1 px-4 py-3 text-base border rounded-r-lg outline-none transition-colors duration-200"
                     :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
            </div>
          </div>
        </div>

        <!-- 附加的用户名和密码 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label class="block mb-3 text-lg font-medium"
                   :class="isDark ? 'text-gray-300' : 'text-gray-700'">
              附加用户名 (-usera)
            </label>
            <input type="text" v-model="params.usera" placeholder="添加的用户名，逗号分隔"
                   class="w-full px-4 py-3 text-base rounded-lg border outline-none transition-colors duration-200"
                   :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
          </div>

          <div>
            <label class="block mb-3 text-lg font-medium"
                   :class="isDark ? 'text-gray-300' : 'text-gray-700'">
              附加密码 (-pwda)
            </label>
            <input type="text" v-model="params.pwda" placeholder="添加的密码，逗号分隔"
                   class="w-full px-4 py-3 text-base rounded-lg border outline-none transition-colors duration-200"
                   :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
          </div>
        </div>

        <!-- 用户名和密码文件 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block mb-3 text-lg font-medium"
                   :class="isDark ? 'text-gray-300' : 'text-gray-700'">
              用户名文件 (-userf)
            </label>
            <div class="flex items-center">
              <div class="flex-shrink-0 px-4 py-3 text-base border-y border-l rounded-l-lg"
                   :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-600'">
                <Icon icon="mdi:file-account" class="text-lg" />
              </div>
              <input type="text" v-model="params.userf" placeholder="用户名字典文件路径"
                     class="flex-1 px-4 py-3 text-base border rounded-r-lg outline-none transition-colors duration-200"
                     :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
            </div>
          </div>

          <div>
            <label class="block mb-3 text-lg font-medium"
                   :class="isDark ? 'text-gray-300' : 'text-gray-700'">
              密码文件 (-pwdf)
            </label>
            <div class="flex items-center">
              <div class="flex-shrink-0 px-4 py-3 text-base border-y border-l rounded-l-lg"
                   :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-600'">
                <Icon icon="mdi:file-key" class="text-lg" />
              </div>
              <input type="text" v-model="params.pwdf" placeholder="密码字典文件路径"
                     class="flex-1 px-4 py-3 text-base border rounded-r-lg outline-none transition-colors duration-200"
                     :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
            </div>
          </div>
        </div>
      </div>

      <!-- 特殊认证选项 -->
      <div class="mb-10">
        <h3 class="text-xl font-medium mb-4"
            :class="isDark ? 'text-gray-300' : 'text-gray-700'">
          <Icon icon="mdi:shield-key" class="mr-2 text-xl inline-block"
                :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
          特殊认证选项
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block mb-3 text-lg font-medium"
                   :class="isDark ? 'text-gray-300' : 'text-gray-700'">
              域名 (-domain)
            </label>
            <div class="flex items-center">
              <div class="flex-shrink-0 px-4 py-3 text-base border-y border-l rounded-l-lg"
                   :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-600'">
                <Icon icon="mdi:domain" class="text-lg" />
              </div>
              <input type="text" v-model="params.domain" placeholder="SMB扫描用域名"
                     class="flex-1 px-4 py-3 text-base border rounded-r-lg outline-none transition-colors duration-200"
                     :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
            </div>
          </div>

          <div>
            <label class="block mb-3 text-lg font-medium"
                   :class="isDark ? 'text-gray-300' : 'text-gray-700'">
              SSH密钥路径 (-sshkey)
            </label>
            <div class="flex items-center">
              <div class="flex-shrink-0 px-4 py-3 text-base border-y border-l rounded-l-lg"
                   :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-600'">
                <Icon icon="mdi:file-key-outline" class="text-lg" />
              </div>
              <input type="text" v-model="params.sshkey" placeholder="SSH密钥文件路径"
                     class="flex-1 px-4 py-3 text-base border rounded-r-lg outline-none transition-colors duration-200"
                     :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
            </div>
          </div>
        </div>
      </div>

      <!-- Redis利用选项 -->
      <div>
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-medium"
              :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            <Icon icon="mdi:database" class="mr-2 text-xl inline-block"
                  :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
            Redis利用选项
          </h3>

          <!-- Redis禁用开关 -->
          <div class="flex items-center">
            <span class="mr-3 text-base" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
              禁用Redis利用 (-noredis)
            </span>
            <button @click="toggleRedisDisable" class="flex-shrink-0">
              <div class="w-14 h-7 rounded-full transition-colors duration-200 flex items-center px-0.5"
                   :class="params.noredis ? 'bg-blue-600' : (isDark ? 'bg-gray-600' : 'bg-gray-300')">
                <div class="w-6 h-6 rounded-full bg-white transform transition-transform duration-200 shadow-md"
                     :class="params.noredis ? 'translate-x-7' : 'translate-x-0'"></div>
              </div>
            </button>
          </div>
        </div>

        <!-- Redis选项表单字段 -->
        <div :class="{ 'opacity-50 pointer-events-none': params.noredis }">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label class="block mb-3 text-lg font-medium"
                     :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                Redis利用目标文件 (-rf)
              </label>
              <div class="flex items-center">
                <div class="flex-shrink-0 px-4 py-3 text-base border-y border-l rounded-l-lg"
                     :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-600'">
                  <Icon icon="mdi:file-document-outline" class="text-lg" />
                </div>
                <input type="text" v-model="params.rf" placeholder="Redis利用的目标文件路径"
                       class="flex-1 px-4 py-3 text-base border rounded-r-lg outline-none transition-colors duration-200"
                       :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
              </div>
            </div>

            <div>
              <label class="block mb-3 text-lg font-medium"
                     :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                Redis反弹Shell命令 (-rs)
              </label>
              <div class="flex items-center">
                <div class="flex-shrink-0 px-4 py-3 text-base border-y border-l rounded-l-lg"
                     :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-600'">
                  <Icon icon="mdi:console" class="text-lg" />
                </div>
                <input type="text" v-model="params.rs" placeholder="Redis反弹Shell命令"
                       class="flex-1 px-4 py-3 text-base border rounded-r-lg outline-none transition-colors duration-200"
                       :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label class="block mb-3 text-lg font-medium"
                     :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                Redis文件写入路径 (-rwp)
              </label>
              <div class="flex items-center">
                <div class="flex-shrink-0 px-4 py-3 text-base border-y border-l rounded-l-lg"
                     :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-600'">
                  <Icon icon="mdi:folder-outline" class="text-lg" />
                </div>
                <input type="text" v-model="params.rwp" placeholder="Redis文件写入的目标路径"
                       class="flex-1 px-4 py-3 text-base border rounded-r-lg outline-none transition-colors duration-200"
                       :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
              </div>
            </div>

            <div>
              <label class="block mb-3 text-lg font-medium"
                     :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                Redis写入内容 (-rwc)
              </label>
              <div class="flex items-center">
                <div class="flex-shrink-0 px-4 py-3 text-base border-y border-l rounded-l-lg"
                     :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-600'">
                  <Icon icon="mdi:text-box-edit-outline" class="text-lg" />
                </div>
                <input type="text" v-model="params.rwc" placeholder="Redis写入的文件内容"
                       class="flex-1 px-4 py-3 text-base border rounded-r-lg outline-none transition-colors duration-200"
                       :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
              </div>
            </div>
          </div>

          <div>
            <label class="block mb-3 text-lg font-medium"
                   :class="isDark ? 'text-gray-300' : 'text-gray-700'">
              Redis写入源文件 (-rwf)
            </label>
            <div class="flex items-center">
              <div class="flex-shrink-0 px-4 py-3 text-base border-y border-l rounded-l-lg"
                   :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-600'">
                <Icon icon="mdi:file-upload-outline" class="text-lg" />
              </div>
              <input type="text" v-model="params.rwf" placeholder="Redis写入的源文件路径"
                     class="flex-1 px-4 py-3 text-base border rounded-r-lg outline-none transition-colors duration-200"
                     :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
            </div>
          </div>

          <!-- Redis使用提示信息 -->
          <div class="mt-4 p-4 rounded-lg border text-sm"
               :class="isDark ? 'bg-blue-900/10 border-blue-800/20 text-blue-300' : 'bg-blue-50 border-blue-100 text-blue-700'">
            <div class="flex items-start">
              <Icon icon="mdi:information-outline" class="text-lg mr-2 mt-0.5" />
              <div>
                <p class="font-medium mb-1">Redis利用说明</p>
                <ul class="list-disc list-inside space-y-1 ml-1">
                  <li>Redis利用可用于测试Redis数据库的安全性</li>
                  <li>可以通过文件写入、反弹Shell等方式检测Redis漏洞</li>
                  <li>使用前请确保有合法授权，避免违规操作</li>
                  <li>使用<code class="px-1 py-0.5 rounded"
                                :class="isDark ? 'bg-gray-700' : 'bg-gray-200'">-noredis</code>
                    可禁用所有Redis利用功能</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {inject, ref} from 'vue';
import {Icon} from '@iconify/vue';

const props = defineProps({
  params: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['update:params']);

const isDark = inject('isDark');

// 切换Redis禁用状态
const toggleRedisDisable = () => {
  props.params.noredis = !props.params.noredis;
};
</script>
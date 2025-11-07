# Fscan 扫描模式和插件配置参数

## 扫描模式互斥关系

Fscan 有三种互斥的扫描模式（参考 `main.go:25-56`）：

### 1. 主机扫描模式 (Host Scan)
- **触发参数**：`-h` 或 `-hf`
- **描述**：网络主机扫描，对目标主机和端口进行扫描
- **使用场景**：内网渗透、主机发现、端口扫描、服务识别
- **互斥关系**：不能与 `-u` 和 `-local` 同时使用

### 2. Web 扫描模式 (Web Scan)
- **触发参数**：`-u` 或 `-uf`
- **描述**：Web URL扫描，对目标URL进行Web漏洞扫描
- **使用场景**：Web应用扫描、POC测试
- **互斥关系**：不能与 `-h` 和 `-local` 同时使用

### 3. 本地扫描模式 (Local Scan)
- **触发参数**：`-local`
- **描述**：本地信息收集和后渗透操作
- **使用场景**：本地主机信息收集、权限维持、后渗透工具
- **互斥关系**：不能与 `-h` 和 `-u` 同时使用

## 本地插件配置参数映射

### 1. reverseshell - 反弹Shell
**独有参数**：
- `-rsh <target>`: 反弹Shell目标地址（必需）
  - 示例：`-rsh 192.168.1.100:4444`
  - 格式：`IP:PORT`

### 2. socks5proxy - SOCKS5代理服务器
**独有参数**：
- `-start-socks5 <port>`: SOCKS5代理监听端口（必需）
  - 示例：`-start-socks5 1080`
  - 默认值：0（未设置）
  - 范围：1-65535

### 3. forwardshell - 正向Shell
**独有参数**：
- `-fsh-port <port>`: 正向Shell监听端口
  - 示例：`-fsh-port 4444`
  - 默认值：4444
  - 范围：1-65535

### 4. keylogger - 键盘记录
**独有参数**：
- `-keylog-output <file>`: 键盘记录输出文件
  - 示例：`-keylog-output keylog.txt`
  - 默认值：`keylog.txt`

### 5. downloader - 文件下载器
**独有参数**：
- `-download-url <url>`: 下载文件的URL（必需）
  - 示例：`-download-url http://example.com/file.exe`
- `-download-path <path>`: 下载文件保存路径（必需）
  - 示例：`-download-path /tmp/file.exe`

### 6. 持久化插件组
**适用插件**：
- winregistry - Windows注册表持久化
- winschtask - Windows计划任务
- winservice - Windows服务持久化
- winstartup - Windows启动项持久化
- winwmi - Windows WMI持久化
- ldpreload - LD_PRELOAD持久化
- systemdservice - Systemd服务持久化
- crontask - 计划任务持久化

**独有参数**：
- `-persistence-file <file>`: 持久化目标文件
  - 示例：`-persistence-file /tmp/backdoor.sh`
  - 用于指定要持久化执行的文件路径

### 7. Windows PE相关插件
**独有参数**：
- `-win-pe <file>`: Windows PE文件路径
  - 示例：`-win-pe /tmp/payload.exe`

### 8. 无独有参数的本地插件
以下插件无需额外配置参数：
- **avdetect** - AV/EDR 检测
- **dcinfo** - 域控信息收集
- **envinfo** - 环境信息收集
- **fileinfo** - 文件信息收集
- **systeminfo** - 系统信息收集
- **cleaner** - 清理痕迹
- **shellenv** - Shell环境设置
- **minidump** - 内存转储

## 前端实现要求

### 扫描模式互斥实现
1. 在 `Parameters.vue` 中添加 `scanMode` 状态管理
2. 三种模式：`'host'`, `'web'`, `'local'`
3. 切换模式时：
   - 清空其他模式的目标参数
   - 显示/隐藏对应的参数配置组件
   - 更新命令预览

### 插件配置参数UI实现
1. 在 `ScanControlParams.vue` 中添加插件配置区域
2. 当选择本地插件时，动态显示对应的配置参数
3. 参数验证：
   - reverseshell: 验证 IP:PORT 格式
   - socks5proxy/forwardshell: 验证端口范围 1-65535
   - downloader: URL 和路径必填
   - 持久化插件: 文件路径必填

### 命令构建逻辑
1. 根据扫描模式添加基础参数：
   - Host: `-h <targets>`
   - Web: `-u <url>`
   - Local: `-local <plugin>`
2. 添加插件独有参数（如果已配置）
3. 添加通用参数（超时、线程等）

## 参数优先级

1. **扫描模式参数**（-h/-u/-local）- 最高优先级，互斥
2. **插件独有参数** - 仅在对应插件选中时有效
3. **通用参数** - 所有模式下都可用

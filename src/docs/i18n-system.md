<h2>核心设计：Manager单例</h2>
      <p>独立的i18n包（<code>common/i18n/</code>），提供运行时语言切换：</p>
      <ul>
        <li><strong>manager.go</strong> - 国际化管理器</li>
        <li><strong>init.go</strong> - 初始化和语言数据</li>
      </ul>

      <h2>Manager结构（<code>i18n/manager.go:36</code>）</h2>

      <pre><code>type Manager struct {
    mu               sync.RWMutex
    currentLanguage  string
    fallbackLanguage string
    messages         map[string]map[string]string  // lang -> key -> text
    enabled          bool
}

var globalManager = NewManager()

func GetText(key string) string {
    return globalManager.GetText(key)
}

func GetTextF(key string, args ...interface{}) string {
    text := globalManager.GetText(key)
    return fmt.Sprintf(text, args...)
}</code></pre>

      <h2>语言数据：Go代码硬编码</h2>

      <h3>不用JSON文件的原因</h3>
      <pre><code>// init.go 中直接定义
func init() {
    globalManager.RegisterMessages("zh", map[string]string{
        "scan_start": "开始扫描",
        "scan_complete": "扫描完成 %d/%d",
        "error_network": "网络错误: %v",
    })

    globalManager.RegisterMessages("en", map[string]string{
        "scan_start": "Start scanning",
        "scan_complete": "Scan complete %d/%d",
        "error_network": "Network error: %v",
    })
}</code></pre>

      <h3>优势</h3>
      <ul>
        <li>✅ 无需运行时读取文件</li>
        <li>✅ 编译期检查翻译键</li>
        <li>✅ 无embed开销</li>
        <li>✅ 单文件部署</li>
      </ul>

      <h2>语言切换（<code>i18n/manager.go:62</code>）</h2>

      <pre><code>func SetLanguage(lang string) {
    globalManager.SetLanguage(lang)
}

// 从命令行参数
if common.Language == "zh" {
    i18n.SetLanguage("zh")
} else {
    i18n.SetLanguage("en")
}</code></pre>

      <h3>回退机制</h3>
      <pre><code>func (m *Manager) GetText(key string) string {
    // 1. 尝试当前语言
    if text, ok := m.messages[m.currentLanguage][key]; ok {
        return text
    }

    // 2. 回退到fallback语言（英文）
    if text, ok := m.messages[m.fallbackLanguage][key]; ok {
        return text
    }

    // 3. 返回key本身
    return key
}</code></pre>

      <h2>使用示例</h2>

      <pre><code>// 简单文本
common.LogBase(i18n.GetText("scan_start"))

// 带参数的文本
common.LogInfo(i18n.GetTextF("scan_complete", completed, total))

// 错误信息
common.LogError(i18n.GetTextF("error_network", err))</code></pre>

      <h2>设计权衡</h2>

      <h3>默认中文的原因</h3>
      <pre><code>const (
    DefaultLanguage  = "zh"  // 默认中文
    FallbackLanguage = "en"  // 回退英文
)</code></pre>
      <ul>
        <li>fscan主要面向中文用户</li>
        <li>减少中文用户的配置成本</li>
        <li>英文用户可以通过<code>-lang en</code>切换</li>
      </ul>

      <h3>不支持复数和时间格式化的原因</h3>
      <ul>
        <li>fscan的文本很简单，不需要复杂的i18n特性</li>
        <li>fmt.Sprintf已经足够</li>
        <li>保持简单，避免引入复杂库</li>
      </ul>
<h2>核心实现：正则+MD5</h2>
      <p>Web指纹识别（<code>webscan/fingerprint_scanner.go</code>），使用简单直接的规则匹配：</p>
      <ul>
        <li><strong>正则匹配</strong> - 匹配Header和Body内容</li>
        <li><strong>MD5指纹</strong> - 匹配响应体MD5哈希</li>
      </ul>

      <h2>InfoCheck函数（<code>fingerprint_scanner.go:19</code>）</h2>

      <pre><code>func InfoCheck(Url string, CheckData *[]CheckDatas) []string {
    var matchedInfos []string

    for _, data := range *CheckData {
        // 正则规则匹配
        matchedInfos = append(matchedInfos, matchByRegex(data)...)

        // MD5指纹匹配
        if md5Name := matchByMd5(data.Body); md5Name != "" {
            matchedInfos = append(matchedInfos, md5Name)
        }
    }

    // 去重
    matchedInfos = removeDuplicateElement(matchedInfos)

    return matchedInfos
}</code></pre>

      <h2>正则匹配（<code>fingerprint_scanner.go:46</code>）</h2>

      <h3>指纹规则结构</h3>
      <pre><code>type RuleData struct {
    Name  string  // 指纹名称
    Type  string  // "code"（Body）或 "header"
    Rule  string  // 正则表达式
}

// 示例指纹规则
{
    Name: "WordPress",
    Type: "code",
    Rule: "wp-content"
}</code></pre>

      <h3>匹配逻辑</h3>
      <pre><code>func matchByRegex(data CheckDatas) []string {
    var matched []string

    for _, rule := range fingerprint.RuleDatas {
        var isMatch bool
        switch rule.Type {
        case "code":
            isMatch, _ = regexp.MatchString(rule.Rule, string(data.Body))
        default:
            isMatch, _ = regexp.MatchString(rule.Rule, data.Headers)
        }

        if isMatch {
            matched = append(matched, rule.Name)
        }
    }
    return matched
}</code></pre>

      <h2>MD5指纹（<code>fingerprint_scanner.go:75</code>）</h2>

      <h3>用MD5的原因</h3>
      <pre><code>func matchByMd5(body []byte) string {
    contentMd5 := fmt.Sprintf("%x", md5.Sum(body))

    for _, md5Info := range fingerprint.Md5Datas {
        if contentMd5 == md5Info.Md5Str {
            return md5Info.Name
        }
    }
    return ""
}</code></pre>

      <ul>
        <li>✅ 快速匹配（哈希查表）</li>
        <li>✅ 唯一性高（整个Body的哈希）</li>
        <li>✅ 常用于静态资源指纹（如favicon）</li>
        <li>⚠️ MD5仅用于指纹识别，非加密用途</li>
      </ul>

      <h2>指纹库（<code>webscan/fingerprint/</code>）</h2>

      <pre><code>// RuleDatas - 正则规则数据库
var RuleDatas = []RuleData{
    {Name: "WordPress", Type: "code", Rule: "wp-content"},
    {Name: "Joomla", Type: "code", Rule: "/components/com_"},
    {Name: "Drupal", Type: "header", Rule: "X-Drupal-Cache"},
    // ...
}

// Md5Datas - MD5指纹数据库
var Md5Datas = []Md5Data{
    {Name: "Apache Tomcat", Md5Str: "4644f2d45601037b8423d45e13194c93"},
    // ...
}</code></pre>

      <h2>设计权衡</h2>

      <h3>不用加权匹配的原因</h3>
      <ul>
        <li>简单的规则匹配已经足够准确</li>
        <li>加权匹配增加复杂性但收益有限</li>
        <li>去重处理避免重复指纹</li>
      </ul>

      <h3>不用MurmurHash的原因</h3>
      <ul>
        <li>MD5已经满足指纹识别需求</li>
        <li>Go标准库自带MD5（crypto/md5）</li>
        <li>指纹库使用MD5，保持兼容</li>
      </ul>
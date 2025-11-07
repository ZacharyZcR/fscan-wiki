# Fscan 插件列表对比

## 实际存在的插件（Plugins/services/ 目录）

基于 `ls -la Plugins/services/` 的输出：

1. activemq
2. cassandra
3. elasticsearch
4. findnet
5. ftp
6. kafka
7. ldap
8. memcached
9. mongodb
10. ms17010
11. mssql
12. mysql
13. neo4j
14. netbios
15. oracle
16. postgresql
17. rabbitmq
18. rdp
19. redis
20. rsync
21. smb
22. smb2
23. smbghost
24. smbinfo
25. smtp
26. snmp
27. ssh
28. telnet
29. vnc

## ❌ 前端需要删除的插件（fscan 中不存在）

1. **imap** - services 目录中没有 imap.go
2. **pop3** - services 目录中没有 pop3.go
3. **modbus** - services 目录中没有 modbus.go
4. **webtitle** - 不是单独的插件，是 web 扫描的一部分
5. **webpoc** - 不是单独的插件，是 POC 扫描功能
6. **localinfo** - 不存在
7. **dcinfo** - 不存在
8. **minidump** - 不存在

## ➕ 前端需要添加的插件（fscan 有但前端没有）

1. **smbghost** - SMB Ghost 漏洞扫描
2. **smbinfo** - SMB 信息收集

## 📋 正确的插件列表（按分组）

### 网络服务（Network Services）
- ftp (21)
- ssh (22, 2222)
- telnet (23)
- findnet (135) - Windows网络发现
- netbios (139)
- smb (445)
- smb2 (445)
- smbghost (445) - SMB Ghost漏洞
- smbinfo (445) - SMB信息收集
- ldap (389, 636)
- smtp (25, 465, 587)
- snmp (161, 162)
- rsync (873)
- rdp (3389)
- vnc (5900-5902)

### 数据库服务（Database Services）
- mssql (1433, 1434)
- oracle (1521, 1522, 1526)
- mysql (3306, 3307, 13306, 33306)
- postgresql (5432, 5433)
- redis (6379, 6380, 16379)
- memcached (11211)
- mongodb (27017, 27018)
- cassandra (9042)
- neo4j (7687)
- elasticsearch (9200, 9300)

### 消息队列（Message Queue）
- rabbitmq (5672, 5671, 15672, 15671)
- kafka (9092, 9093)
- activemq (61613)

### 漏洞扫描（Vulnerability）
- ms17010 (445) - 永恒之蓝

## 📝 扫描模式说明

根据 fscan README.md：

```
-m all                  # 全部扫描（默认）
-m icmp                 # 仅存活探测
-m <plugin_name>        # 指定插件，如: -m ssh,mysql,redis
```

**注意**：
1. `all` 是默认模式，会扫描所有插件
2. `icmp` 是特殊模式，仅进行存活探测
3. 可以指定多个插件，用逗号分隔
4. **没有** `webtitle`, `webpoc` 这样的独立插件
5. **没有** `localinfo`, `dcinfo`, `minidump` 这些本地插件（在 `local/` 目录中，不是扫描插件）

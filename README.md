## 达人易

#### 技术栈

- vue3
- typescript
- pinia
- uniapp

#### 使用

```bash
# 如果没有pnpm 项目使用pnpm，commit自动校验都是用pnpm,请使用pnpm启动项目
npm install pnpm -g

pnpm install

pnpm dev:weapp
```

#### vscode setting

> 正常情况会根据.vscode下的extendsions提示安装插件,没有的话重新打开项目或手动安装配置

- vscode 插件
  - Prettier - Code formatter
  - eslint
  - volar

```json
{
  // 开启自动修复
  "editor.codeActionsOnSave": {
    "source.fixAll": false,
    "source.fixAll.eslint": true
  },
  // 保存的时候自动格式化
  "editor.formatOnSave": true,
  // 默认格式化工具选择prettier
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

#### TODO

- [x] uni脚手架初始化
- [x] 环境变量
- [x] eslint + prettier + husky
- [ ] commit cz

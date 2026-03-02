# 作品集页面

文件位置：`portfolio/index.html`

## 本地查看

方式1：直接在资源管理器双击 `portfolio/index.html`。

方式2：在项目目录启动简单静态服务：

```bash
python -m http.server 8080
```

然后访问：`http://localhost:8080/portfolio/`

## 你可以优先替换的内容

- 首页主标题与简介（`index.html` 顶部 hero 区）
- 精选项目 3 张卡片（`#projects`）
- 工作经历时间线（`Experience`）
- 联系方式与外链

## 后续升级建议

- 加 `cases/` 子页面展示每个项目的架构图与截图
- 接入 GA / Plausible 做访问统计
- 迁移到 Next.js 并部署到 Vercel

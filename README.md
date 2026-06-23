# Annova Interactive

Annova × MMT 互動測驗網頁 — 5 題找出對應的花精輕霧，導購到官網 annova.com.tw。

部署網址：<https://te-chun-liu.github.io/annova-interactive/>

## 開發

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # 輸出到 ./dist
npm run preview # 本機預覽 build 結果
```

## 改測驗內容

- 題目：`src/data/quiz.ts`
- 產品資料／URL／文案：`src/data/products.ts`
- 樣式（品牌色、字型）：`src/styles/global.css`
- 整個頁面結構：`src/pages/index.astro`

題目和產品都是 TypeScript 物件，改完存檔 dev server 會熱更新。

## 部署到 GitHub Pages（首次設定）

1. 在 GitHub 新建 repo `annova-interactive`（public）。
2. 本機推上去：
   ```bash
   git remote add origin https://github.com/<USERNAME>/annova-interactive.git
   git branch -M main
   git push -u origin main
   ```
3. GitHub repo 設定 → Pages → Source 選 **GitHub Actions**。
4. push 到 main 自動 build + deploy（看 Actions 頁籤）。

之後改完 push 上去就自動更新。

## 改 repo 名稱怎麼辦

`astro.config.mjs` 的 `base` 要跟 repo 名一致：

```js
base: '/annova-interactive',  // ← repo 改名要同步改這裡
```

如果之後接 custom domain（如 `interactive.annova.com.tw`）就把 `base` 拿掉。

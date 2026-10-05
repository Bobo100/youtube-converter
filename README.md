# SideProject-Youtube-To-Your-Format

目的：為了不太會用電腦的家人，寫一個簡單的桌面程式，讓他可以抓 YouTube 影片並轉檔。

## 功能

- **網址模式**:貼上 YouTube 網址，下載成 MP3 或 MP4
- **搜尋模式**:用 YouTube Data API 搜尋影片(要在「設定」填自己申請的 API 金鑰)
- **轉換工具**:把本機的影音檔轉成其他格式
- 深色 / 亮色模式、中文 / English

## 開發與打包

需要 Node.js 22 以上(Electron 44)。

```bash
npm install          # postinstall 會下載 ffmpeg 到 resources/ffmpeg
npm run dev          # Next.js dev server + Electron 視窗
npm run lint
npm run build        # next build(靜態輸出到 out/)+ electron-builder 打包 Windows 安裝檔到 dist/
```

技術:Electron(主程序在 `main/`,內建 Express API 在 3001 port)、Next.js 16 靜態輸出(`src/`)、React 19、Redux Toolkit、Tailwind、yt-dlp + ffmpeg。

## 維護：更新 yt-dlp

YouTube 經常改版，舊版 yt-dlp 會無法下載(例如出現 `The page needs to be reloaded`)。程式不會自己更新，要定期:

1. 到 [yt-dlp releases](https://github.com/yt-dlp/yt-dlp/releases/latest) 下載 `yt-dlp.exe`,用同一頁的 `SHA2-256SUMS` 驗證
2. 覆蓋 `resources/yt-dlp/yt-dlp.exe`,用 `yt-dlp.exe --version` 確認版本
3. `npm run build` 重新打包，在家人的電腦上重裝

遇到需要登入才能看的影片，可以把瀏覽器匯出的 `cookies.txt` 放到 `~/cookies.txt` 或 `~/.config/yt-cookies/cookies.txt`。

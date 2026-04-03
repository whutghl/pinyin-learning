import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import 'virtual:uno.css'
// 导入拼音文楷轻体
import pinyinFontUrl from './assets/fonts/pinyin-wenkai-light.woff2'

// 动态创建字体定义
const fontStyle = document.createElement('style')
fontStyle.textContent = `
  @font-face {
    font-family: 'PinyinWenkai';
    src: url('${pinyinFontUrl}') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`
document.head.appendChild(fontStyle)

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')

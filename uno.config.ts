import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  theme: {
    colors: {
      // 卡通配色方案
      primary: '#FF9F43',      // 明亮橙色 - 主按钮
      success: '#2ECC71',      // 草绿色 - 正确
      error: '#FF6B6B',        // 珊瑚红 - 错误
      accent: '#54A0FF',       // 天蓝色 - 强调色
      warning: '#FECA57',      // 明黄色 - 警告
      background: '#FFF9E6',   // 浅黄色背景
      card: '#FFFFFF',         // 卡片白色
      text: '#2C3E50',         // 深灰文字
      textLight: '#7F8C8D',    // 浅灰文字
    },
  },
  shortcuts: {
    // 卡通按钮样式
    'cartoon-btn': 'rounded-2xl shadow-lg transition-all duration-200 active:scale-95 cursor-pointer',
    'cartoon-btn-primary': 'cartoon-btn bg-primary text-white hover:bg-orange-500',
    'cartoon-btn-success': 'cartoon-btn bg-success text-white hover:bg-green-600',
    'cartoon-btn-accent': 'cartoon-btn bg-accent text-white hover:bg-blue-600',
    
    // 卡通卡片样式
    'cartoon-card': 'bg-card rounded-3xl shadow-xl p-6',
    
    // 通用布局
    'center-flex': 'flex items-center justify-center',
    'center-col': 'flex flex-col items-center justify-center',
  },
})

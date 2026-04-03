<template>
  <div class="min-h-screen bg-gradient-to-br from-background to-orange-100 center-col p-6">
    <!-- 右上角历史按钮 -->
    <button
      @click="goToHistory"
      class="absolute top-4 right-4 sm:top-6 sm:right-6 cartoon-btn-accent px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-bold flex items-center gap-1 sm:gap-2 whitespace-nowrap"
    >
      <span>📚</span>
      <span class="hidden sm:inline">历史考试</span>
      <span class="sm:hidden">历史</span>
    </button>

    <!-- 主标题 -->
    <div class="mt-20 mb-12 text-center">
      <h1 class="text-5xl md:text-6xl font-bold text-text mb-4">
        🎓 拼音学习乐园
      </h1>
      <p class="text-xl text-textLight">快乐学习，轻松掌握拼音！</p>
    </div>

    <!-- 卡通装饰 -->
    <div class="mb-12 text-8xl animate-bounce">
      📖
    </div>

    <!-- 开始考试按钮 -->
    <button
      @click="startExam"
      class="cartoon-btn-primary px-12 py-6 text-2xl md:text-3xl font-bold mb-8 transform hover:scale-105"
    >
      🚀 开始游戏
    </button>

    <!-- 说明文字 -->
    <div class="cartoon-card max-w-md text-center">
      <h3 class="text-xl font-bold text-text mb-3">考试说明</h3>
      <ul class="text-textLight space-y-2 text-left">
        <li>✨ 每次游戏 10 道题</li>
        <li>✨ 选择正确的拼音答案</li>
        <li>✨ 答对自动进入下一题</li>
        <li>✨ 答错会显示正确答案</li>
        <li>✨ 考试结束查看成绩和错题</li>
      </ul>
    </div>

    <!-- 底部装饰 -->
    <div class="mt-12 flex gap-4 text-4xl">
      <span>🌟</span>
      <span>🎈</span>
      <span>🌈</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useExamStore } from '../stores/exam'

const router = useRouter()
const examStore = useExamStore()

function startExam() {
  // 重置之前的考试状态
  examStore.resetExam()
  // 开始新考试
  examStore.startExam(10)
  // 跳转到考试页面
  router.push('/exam')
}

function goToHistory() {
  router.push('/history')
}
</script>

<style scoped>
/* 添加一些额外的动画效果 */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-bounce {
  animation: float 2s ease-in-out infinite;
}
</style>

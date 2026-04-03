<template>
  <div class="min-h-screen bg-gradient-to-br from-background to-orange-100 p-6">
    <div class="max-w-3xl mx-auto">
      <!-- 成绩卡片 -->
      <div class="cartoon-card text-center mb-8">
        <div class="text-6xl mb-4">
          {{ score >= 80 ? '🎉' : score >= 60 ? '👍' : '💪' }}
        </div>
        
        <h1 class="text-4xl font-bold text-text mb-4">游戏完成！</h1>
        
        <!-- 分数显示 -->
        <div class="my-8">
          <div class="text-7xl font-bold mb-2" :class="scoreColor">
            {{ score }}分
          </div>
          <p class="text-xl text-textLight">
            答对 {{ correctCount }} 题，答错 {{ wrongCount }} 题
          </p>
        </div>

        <!-- 鼓励语 -->
        <p class="text-lg text-text mb-6">
          {{ encouragementText }}
        </p>

        <!-- 操作按钮 -->
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
            @click="restartExam"
            class="cartoon-btn-primary px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl font-bold whitespace-nowrap"
          >
            🔄 再玩一次
          </button>
          <button
            @click="goHome"
            class="cartoon-btn-accent px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl font-bold whitespace-nowrap"
          >
            🏠 返回首页
          </button>
        </div>
      </div>

      <!-- 答题详情 -->
      <div class="cartoon-card">
        <h2 class="text-2xl font-bold text-text mb-6 flex items-center gap-2">
          <span>📝</span>
          <span>答题详情（{{ totalQuestions }} 题）</span>
        </h2>

        <div class="space-y-4">
          <div
            v-for="(answer, index) in answers"
            :key="index"
            :class="[
              'rounded-2xl p-4 border-2',
              answer.isCorrect 
                ? 'bg-green-50 border-success' 
                : 'bg-red-50 border-error',
            ]"
          >
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <span class="text-sm text-textLight">第 {{ answer.questionIndex + 1 }} 题</span>
                <span class="text-4xl font-bold text-text">{{ answer.hanzi }}</span>
              </div>
              <span class="text-2xl">
                {{ answer.isCorrect ? '✅' : '❌' }}
              </span>
            </div>
            
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="text-success font-bold">✓ 正确答案：</span>
                <span class="text-lg text-text pinyin-text">{{ answer.correctPinyin }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-textLight font-bold">你的答案：</span>
                <span 
                  class="text-lg pinyin-text"
                  :class="answer.isCorrect ? 'text-success' : 'text-error'"
                >
                  {{ answer.userAnswer }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useExamStore } from '../stores/exam'
import type { AnswerRecord } from '../stores/exam'

const router = useRouter()
const examStore = useExamStore()

// 计算属性
const score = computed(() => examStore.score)
const correctCount = computed(() => examStore.correctCount)
const wrongCount = computed(() => examStore.wrongCount)
const totalQuestions = computed(() => examStore.totalQuestions)
const answers = computed<AnswerRecord[]>(() => examStore.answers)

// 分数颜色
const scoreColor = computed(() => {
  if (score.value >= 80) return 'text-success'
  if (score.value >= 60) return 'text-warning'
  return 'text-error'
})

// 鼓励语
const encouragementText = computed(() => {
  if (score.value === 100) {
    return '完美！你真棒！继续保持！'
  } else if (score.value >= 80) {
    return '很好！再接再厉！'
  } else if (score.value >= 60) {
    return '不错哦！再多练习会更好！'
  } else {
    return '加油！多练习就能进步！'
  }
})

// 重新游戏
function restartExam() {
  examStore.resetExam()
  examStore.startExam(10)
  router.push('/exam')
}

// 返回首页
function goHome() {
  examStore.resetExam()
  router.push('/')
}

// 组件挂载时检查是否有游戏结果
onMounted(() => {
  if (!examStore.isFinished) {
    // 没有完成的考试，返回首页
    router.push('/')
  }
})
</script>

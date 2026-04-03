<template>
  <div class="min-h-screen bg-gradient-to-br from-background to-orange-100 p-6">
    <div class="max-w-4xl mx-auto">
      <!-- 顶部导航 -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 class="text-2xl sm:text-3xl font-bold text-text flex items-center gap-2">
          <span>📚</span>
          <span>历史游戏记录</span>
        </h1>
        <button
          @click="goHome"
          class="cartoon-btn-accent px-5 py-2.5 sm:px-6 sm:py-3 text-base sm:text-lg font-bold whitespace-nowrap"
        >
          🏠 返回首页
        </button>
      </div>

      <!-- 加载状态 -->
      <div v-if="loading" class="center-col mt-20">
        <div class="text-6xl mb-4 animate-spin">⏳</div>
        <p class="text-xl text-textLight">加载中...</p>
      </div>

      <!-- 空状态 -->
      <div v-else-if="records.length === 0" class="cartoon-card text-center mt-8">
        <div class="text-6xl mb-4">📭</div>
        <h2 class="text-2xl font-bold text-text mb-2">还没有游戏记录</h2>
        <p class="text-textLight mb-6">快去开始你的第一次考试吧！</p>
        <button
          @click="startExam"
          class="cartoon-btn-primary px-8 py-4 text-xl font-bold"
        >
          🚀 开始考试
        </button>
      </div>

      <!-- 记录列表 -->
      <div v-else class="space-y-4">
        <div
          v-for="record in records"
          :key="record.id"
          class="cartoon-card hover:shadow-2xl transition-shadow cursor-pointer"
          @click="toggleDetail(record.id!)"
        >
          <!-- 记录摘要 -->
          <div class="flex justify-between items-center">
            <div class="flex-1">
              <div class="flex items-center gap-4 mb-2">
                <span class="text-3xl">
                  {{ record.score >= 80 ? '🎉' : record.score >= 60 ? '👍' : '💪' }}
                </span>
                <div>
                  <p class="text-sm text-textLight">
                    {{ formatTime(record.timestamp) }}
                  </p>
                  <p class="text-lg font-bold text-text">
                    {{ record.correctCount }} / {{ record.totalQuestions }} 题正确
                  </p>
                </div>
              </div>
            </div>
            
            <div class="text-right">
              <div
                class="text-4xl font-bold mb-1"
                :class="getScoreColor(record.score)"
              >
                {{ record.score }}分
              </div>
              <p class="text-sm text-textLight">
                错题: {{ record.wrongCount }} 题
              </p>
            </div>
          </div>

          <!-- 展开的错题详情 -->
          <div v-if="expandedId === record.id && record.wrongAnswers.length > 0" class="mt-4 pt-4 border-t-2 border-gray-200">
            <h3 class="text-lg font-bold text-text mb-3">错题详情：</h3>
            <div class="space-y-3">
              <div
                v-for="(wrong, index) in record.wrongAnswers"
                :key="index"
                class="bg-red-50 rounded-xl p-3 border-2 border-error"
              >
                <div class="flex items-center justify-between mb-2">
                  <span class="text-3xl font-bold text-text">{{ wrong.hanzi }}</span>
                </div>
                <div class="space-y-1 text-sm">
                  <div class="flex items-center gap-2">
                    <span class="text-success font-bold">✓</span>
                    <span class="text-text pinyin-text">{{ wrong.correctPinyin }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-error font-bold">✗</span>
                    <span class="text-text pinyin-text">{{ wrong.userAnswer }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 全对提示 -->
          <div v-if="expandedId === record.id && record.wrongAnswers.length === 0" class="mt-4 pt-4 border-t-2 border-gray-200 text-center">
            <p class="text-success font-bold text-lg">🌟 这次考试全对！太棒了！</p>
          </div>

          <!-- 展开/收起提示 -->
          <div class="mt-3 text-center text-textLight text-sm">
            {{ expandedId === record.id ? '点击收起' : '点击查看详情' }}
          </div>
        </div>

        <!-- 清空记录按钮 -->
        <div class="text-center mt-8">
          <button
            @click="clearRecords"
            class="cartoon-btn bg-error text-white px-5 py-2.5 sm:px-6 sm:py-3 text-base sm:text-lg font-bold hover:bg-red-600 whitespace-nowrap"
          >
            🗑️ <span class="hidden sm:inline">清空所有游戏记录</span><span class="sm:hidden">清空记录</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { ExamRecord } from '../utils/db'
import { getAllExamRecords, clearAllRecords } from '../utils/db'
import { useExamStore } from '../stores/exam'

const router = useRouter()
const examStore = useExamStore()

// 状态
const loading = ref(true)
const records = ref<ExamRecord[]>([])
const expandedId = ref<number | null>(null)

// 获取分数颜色
function getScoreColor(score: number) {
  if (score >= 80) return 'text-success'
  if (score >= 60) return 'text-warning'
  return 'text-error'
}

// 格式化时间
function formatTime(timestamp: number) {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${year}-${month}-${day} ${hours}:${minutes}`
}

// 切换详情显示
function toggleDetail(id: number) {
  expandedId.value = expandedId.value === id ? null : id
}

// 返回首页
function goHome() {
  router.push('/')
}

// 开始考试
function startExam() {
  examStore.resetExam()
  examStore.startExam(20)
  router.push('/exam')
}

// 清空记录
async function clearRecords() {
  if (confirm('确定要清空所有考试记录吗？此操作不可恢复！')) {
    await clearAllRecords()
    records.value = []
    expandedId.value = null
  }
}

// 加载记录
onMounted(async () => {
  try {
    loading.value = true
    records.value = await getAllExamRecords()
  } catch (error) {
    console.error('加载历史记录失败:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>

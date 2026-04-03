<template>
  <div class="min-h-screen bg-gradient-to-br from-background to-orange-100 p-6">
    <!-- 顶部进度条 -->
    <div class="max-w-2xl mx-auto mb-6">
      <div class="flex justify-between items-center mb-2">
        <span class="text-lg font-bold text-text">
          第 {{ currentQuestionIndex + 1 }} / {{ totalQuestions }} 题
        </span>
        <span class="text-lg font-bold text-accent">
          已答: {{ answeredCount }} / {{ totalQuestions }}
        </span>
      </div>
      <div class="w-full bg-white rounded-full h-4 shadow-inner">
        <div
          class="bg-gradient-to-r from-primary to-orange-500 h-4 rounded-full transition-all duration-300"
          :style="{ width: progressPercent + '%' }"
        ></div>
      </div>
    </div>

    <!-- 题目卡片 -->
    <div v-if="currentQuestion" class="max-w-2xl mx-auto">
      <div class="cartoon-card text-center">
        <!-- 汉字显示 -->
        <div class="mb-8">
          <p class="text-textLight text-lg mb-4">请选择正确的拼音：</p>
          <div class="text-9xl font-bold text-text my-8">
            {{ currentQuestion.hanzi }}
          </div>
        </div>

        <!-- 选项按钮 -->
        <div class="grid grid-cols-2 gap-4 mt-8">
          <button
            v-for="(option, index) in currentQuestion.options"
            :key="index"
            @click="handleAnswer(option)"
            :class="[
              'cartoon-btn px-6 py-4 text-2xl font-bold pinyin-text',
              getOptionClass(option),
            ]"
            style="font-family: 'PinyinWenkai', cursive;"
          >
            {{ option }}
          </button>
        </div>

        <!-- 题目快捷跳转按钮 -->
        <div class="mt-8 pt-6 border-t-2 border-gray-200">
          <p class="text-textLight text-sm mb-3">快捷跳转到：</p>
          <div class="flex flex-wrap justify-center gap-2">
            <button
              v-for="n in totalQuestions"
              :key="n"
              @click="jumpToQuestion(n - 1)"
              :class="[
                'w-10 h-10 rounded-xl text-sm font-bold transition-all duration-200',
                n - 1 === currentQuestionIndex
                  ? 'bg-primary text-white scale-110 shadow-lg'
                  : isQuestionAnswered(n - 1)
                    ? 'bg-green-100 text-green-600 border-2 border-green-300 hover:bg-green-200'
                    : 'bg-white text-textLight border-2 border-gray-200 hover:bg-gray-50'
              ]"
            >
              {{ n }}
            </button>
          </div>
        </div>

        <!-- 导航按钮 -->
        <div class="flex justify-between items-center mt-8 gap-2 sm:gap-4">
          <button
            @click="handlePrevQuestion"
            :disabled="currentQuestionIndex === 0"
            :class="[
              'cartoon-btn px-3 py-3 sm:px-6 sm:py-4 text-base sm:text-lg font-bold flex-1 whitespace-nowrap flex items-center justify-center gap-1 sm:gap-2',
              currentQuestionIndex === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'cartoon-btn-accent hover:scale-105',
            ]"
          >
            <span class="text-xl sm:text-2xl">👈</span>
            <span>上一题</span>
          </button>
          
          <button
            v-if="currentQuestionIndex < totalQuestions - 1"
            @click="handleNextQuestion"
            class="cartoon-btn-primary px-3 py-3 sm:px-6 sm:py-4 text-base sm:text-lg font-bold flex-1 whitespace-nowrap flex items-center justify-center gap-1 sm:gap-2 hover:scale-105"
          >
            <span>下一题</span>
            <span class="text-xl sm:text-2xl">👉</span>
          </button>
          <button
            v-else
            @click="handleFinishExam"
            class="cartoon-btn-success px-3 py-3 sm:px-6 sm:py-4 text-base sm:text-lg font-bold flex-1 whitespace-nowrap flex items-center justify-center gap-1 sm:gap-2 hover:scale-105"
          >
            <span class="text-xl sm:text-2xl">🏆</span>
            <span>完成游戏</span>
          </button>
        </div>

        <!-- 答题状态提示 -->
        <div v-if="hasAnswered" class="mt-4 text-textLight">
          ✓ 已作答
        </div>
      </div>
    </div>

    <!-- 回到首页按钮 -->
    <div v-if="currentQuestion" class="max-w-2xl mx-auto mt-6">
      <button
        @click="goHome"
        class="cartoon-btn-accent w-full px-6 py-3 text-base sm:text-lg font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
      >
        <span class="text-xl">🏠</span>
        <span>回到首页</span>
      </button>
    </div>

    <!-- 加载中提示 -->
    <div v-else class="center-col mt-20">
      <div class="text-6xl mb-4">⏳</div>
      <p class="text-xl text-textLight">加载中...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useExamStore } from '../stores/exam'

const router = useRouter()
const examStore = useExamStore()

// 状态
const selectedOption = ref<string>('')

// 计算属性
const currentQuestion = computed(() => examStore.currentQuestion)
const currentQuestionIndex = computed(() => examStore.currentQuestionIndex)
const totalQuestions = computed(() => examStore.totalQuestions)

const progressPercent = computed(() => {
  if (totalQuestions.value === 0) return 0
  return ((currentQuestionIndex.value + 1) / totalQuestions.value) * 100
})

// 已答题数量
const answeredCount = computed(() => {
  return examStore.answers.length
})

// 当前题是否已作答
const hasAnswered = computed(() => {
  return examStore.answers.some(
    (a) => a.questionIndex === currentQuestionIndex.value
  )
})

// 获取当前题的答案
const currentAnswer = computed(() => {
  return examStore.answers.find(
    (a) => a.questionIndex === currentQuestionIndex.value
  )
})

// 处理答题
function handleAnswer(option: string) {
  if (!currentQuestion.value) return

  // 如果已经答过这道题，更新答案
  const existingAnswerIndex = examStore.answers.findIndex(
    (a) => a.questionIndex === currentQuestionIndex.value
  )

  if (existingAnswerIndex !== -1) {
    // 更新已有答案
    examStore.answers[existingAnswerIndex] = {
      questionIndex: currentQuestionIndex.value,
      hanzi: currentQuestion.value.hanzi,
      correctPinyin: currentQuestion.value.correctPinyin,
      userAnswer: option,
      isCorrect: option === currentQuestion.value.correctPinyin,
    }
  } else {
    // 新答案
    examStore.submitAnswer(option)
  }

  selectedOption.value = option

  // 自动跳转到下一题（延迟 500ms 让用户看到选择结果）
  setTimeout(() => {
    if (currentQuestionIndex.value < totalQuestions.value - 1) {
      // 不是最后一题，自动跳转
      handleNextQuestion()
    }
    // 最后一题不自动跳转，让用户点击"完成游戏"
  }, 500)
}

// 上一题
function handlePrevQuestion() {
  examStore.prevQuestion()
  selectedOption.value = ''
}

// 下一题
function handleNextQuestion() {
  examStore.nextQuestion()
  selectedOption.value = ''
}

// 跳转到指定题目
function jumpToQuestion(index: number) {
  examStore.jumpToQuestion(index)
  selectedOption.value = ''
}

// 回到首页
function goHome() {
  if (confirm('确定要退出游戏吗？进度将不会保存。')) {
    examStore.resetExam()
    router.push('/')
  }
}

// 检查某题是否已作答
function isQuestionAnswered(index: number): boolean {
  return examStore.answers.some((a) => a.questionIndex === index)
}

// 完成考试
async function handleFinishExam() {
  // 保存考试记录
  const { saveExamRecord } = await import('../utils/db')
  
  await saveExamRecord({
    timestamp: Date.now(),
    score: examStore.score,
    totalQuestions: examStore.totalQuestions,
    correctCount: examStore.correctCount,
    wrongCount: examStore.wrongCount,
    wrongAnswers: examStore.wrongAnswers,
  })

  // 结束考试
  examStore.finishExam()
  
  // 跳转到结果页面
  router.push('/result')
}

// 获取选项样式类
function getOptionClass(option: string) {
  // 如果这道题已经答过，显示已选中的样式
  if (currentAnswer.value) {
    if (option === currentAnswer.value.userAnswer) {
      return 'bg-primary text-white border-2 border-primary'
    }
    return 'bg-white text-text hover:bg-blue-50 border-2 border-gray-200'
  }
  
  // 未答题时的样式
  return 'bg-white text-text hover:bg-blue-50 border-2 border-gray-200'
}

// 组件挂载时检查是否有考试在进行
onMounted(() => {
  if (!examStore.isExamining || examStore.questions.length === 0) {
    // 没有进行中的考试，返回首页
    router.push('/')
  }
})
</script>

<style scoped>
/* 样式已通过 UnoCSS 处理 */
</style>

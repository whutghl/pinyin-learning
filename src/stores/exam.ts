import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { HanziItem } from '../data/hanzi'
import { getRandomQuestions } from '../data/hanzi'
import type { WrongAnswer } from '../utils/db'

export interface AnswerRecord {
  questionIndex: number
  hanzi: string
  correctPinyin: string
  userAnswer: string
  isCorrect: boolean
}

export const useExamStore = defineStore('exam', () => {
  // State
  const questions = ref<HanziItem[]>([])
  const currentQuestionIndex = ref(0)
  const answers = ref<AnswerRecord[]>([])
  const isFinished = ref(false)
  const isExamining = ref(false)

  // Getters
  const currentQuestion = computed(() => {
    if (questions.value.length === 0) return null
    return questions.value[currentQuestionIndex.value]
  })

  const totalQuestions = computed(() => questions.value.length)

  const correctCount = computed(() => {
    return answers.value.filter((a) => a.isCorrect).length
  })

  const wrongCount = computed(() => {
    return answers.value.filter((a) => !a.isCorrect).length
  })

  const score = computed(() => {
    if (questions.value.length === 0) return 0
    return Math.round((correctCount.value / questions.value.length) * 100)
  })

  const wrongAnswers = computed<WrongAnswer[]>(() => {
    return answers.value
      .filter((a) => !a.isCorrect)
      .map((a) => ({
        hanzi: a.hanzi,
        correctPinyin: a.correctPinyin,
        userAnswer: a.userAnswer,
      }))
  })

  // Actions
  function startExam(questionCount: number = 20) {
    // 随机抽取题目
    questions.value = getRandomQuestions(questionCount)
    currentQuestionIndex.value = 0
    answers.value = []
    isFinished.value = false
    isExamining.value = true
  }

  function submitAnswer(selectedPinyin: string) {
    const question = currentQuestion.value
    if (!question) return

    const isCorrect = selectedPinyin === question.correctPinyin

    // 记录答案（不自动跳转）
    answers.value.push({
      questionIndex: currentQuestionIndex.value,
      hanzi: question.hanzi,
      correctPinyin: question.correctPinyin,
      userAnswer: selectedPinyin,
      isCorrect,
    })
  }

  function nextQuestion() {
    if (currentQuestionIndex.value < questions.value.length - 1) {
      currentQuestionIndex.value++
    } else {
      // 考试结束
      finishExam()
    }
  }

  function prevQuestion() {
    if (currentQuestionIndex.value > 0) {
      currentQuestionIndex.value--
    }
  }

  function jumpToQuestion(index: number) {
    if (index >= 0 && index < questions.value.length) {
      currentQuestionIndex.value = index
    }
  }

  function finishExam() {
    isFinished.value = true
    isExamining.value = false
  }

  function resetExam() {
    questions.value = []
    currentQuestionIndex.value = 0
    answers.value = []
    isFinished.value = false
    isExamining.value = false
  }

  return {
    // State
    questions,
    currentQuestionIndex,
    answers,
    isFinished,
    isExamining,
    // Getters
    currentQuestion,
    totalQuestions,
    correctCount,
    wrongCount,
    score,
    wrongAnswers,
    // Actions
    startExam,
    submitAnswer,
    nextQuestion,
    prevQuestion,
    jumpToQuestion,
    finishExam,
    resetExam,
  }
})

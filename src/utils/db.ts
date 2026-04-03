import { openDB, type IDBPDatabase } from 'idb'

export interface WrongAnswer {
  hanzi: string
  correctPinyin: string
  userAnswer: string
}

export interface ExamRecord {
  id?: number
  timestamp: number
  score: number
  totalQuestions: number
  correctCount: number
  wrongCount: number
  wrongAnswers: WrongAnswer[]
}

const DB_NAME = 'pinyin-exam-db'
const STORE_NAME = 'exam-records'
const DB_VERSION = 1

let dbPromise: Promise<IDBPDatabase> | null = null

function getDB() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const store = db.createObjectStore(STORE_NAME, {
            keyPath: 'id',
            autoIncrement: true,
          })
          // 创建索引，方便按时间查询
          store.createIndex('timestamp', 'timestamp')
        }
      },
    })
  }
  return dbPromise
}

// 保存考试记录
export async function saveExamRecord(record: Omit<ExamRecord, 'id'>): Promise<number> {
  const db = await getDB()
  const id = await db.add(STORE_NAME, record as ExamRecord)
  return id as number
}

// 获取所有考试记录（按时间倒序）
export async function getAllExamRecords(): Promise<ExamRecord[]> {
  const db = await getDB()
  const records = await db.getAll(STORE_NAME)
  // 按时间戳倒序排列
  return records.sort((a, b) => b.timestamp - a.timestamp)
}

// 获取最近的 N 条记录
export async function getRecentExamRecords(limit: number = 10): Promise<ExamRecord[]> {
  const db = await getDB()
  const records = await db.getAllFromIndex(STORE_NAME, 'timestamp')
  // 倒序并限制数量
  return records.reverse().slice(0, limit)
}

// 删除某条记录
export async function deleteExamRecord(id: number): Promise<void> {
  const db = await getDB()
  await db.delete(STORE_NAME, id)
}

// 清空所有记录
export async function clearAllRecords(): Promise<void> {
  const db = await getDB()
  await db.clear(STORE_NAME)
}

// 获取记录总数
export async function getRecordCount(): Promise<number> {
  const db = await getDB()
  return await db.count(STORE_NAME)
}

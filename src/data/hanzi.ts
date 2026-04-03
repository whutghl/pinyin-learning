export interface HanziItem {
  hanzi: string
  correctPinyin: string
  options: string[]
}

// 幼儿园最基础汉字题库 - 超简单常用字
export const hanziDatabase: HanziItem[] = [
  // 人物类
  { hanzi: '人', correctPinyin: 'rén', options: ['rén', 'kǒu', 'dà', 'xiǎo'] },
  { hanzi: '口', correctPinyin: 'kǒu', options: ['kǒu', 'rén', 'shǒu', 'mù'] },
  { hanzi: '手', correctPinyin: 'shǒu', options: ['shǒu', 'zú', 'tóu', 'ěr'] },
  { hanzi: '目', correctPinyin: 'mù', options: ['mù', 'kǒu', 'ěr', 'shǒu'] },
  { hanzi: '耳', correctPinyin: 'ěr', options: ['ěr', 'mù', 'kǒu', 'shǒu'] },
  { hanzi: '头', correctPinyin: 'tóu', options: ['tóu', 'shǒu', 'zú', 'ěr'] },
  { hanzi: '足', correctPinyin: 'zú', options: ['zú', 'shǒu', 'tóu', 'ěr'] },

  // 大小类
  { hanzi: '大', correctPinyin: 'dà', options: ['dà', 'xiǎo', 'duō', 'shǎo'] },
  { hanzi: '小', correctPinyin: 'xiǎo', options: ['xiǎo', 'dà', 'cháng', 'duǎn'] },
  { hanzi: '多', correctPinyin: 'duō', options: ['duō', 'shǎo', 'dà', 'xiǎo'] },
  { hanzi: '少', correctPinyin: 'shǎo', options: ['shǎo', 'duō', 'dà', 'xiǎo'] },
  { hanzi: '长', correctPinyin: 'cháng', options: ['cháng', 'duǎn', 'dà', 'xiǎo'] },

  // 方向类
  { hanzi: '上', correctPinyin: 'shàng', options: ['shàng', 'xià', 'zuǒ', 'yòu'] },
  { hanzi: '下', correctPinyin: 'xià', options: ['xià', 'shàng', 'qián', 'hòu'] },
  { hanzi: '左', correctPinyin: 'zuǒ', options: ['zuǒ', 'yòu', 'shàng', 'xià'] },
  { hanzi: '右', correctPinyin: 'yòu', options: ['yòu', 'zuǒ', 'shàng', 'xià'] },
  { hanzi: '前', correctPinyin: 'qián', options: ['qián', 'hòu', 'shàng', 'xià'] },
  { hanzi: '后', correctPinyin: 'hòu', options: ['hòu', 'qián', 'zuǒ', 'yòu'] },

  // 自然类
  { hanzi: '天', correctPinyin: 'tiān', options: ['tiān', 'dì', 'rì', 'yuè'] },
  { hanzi: '地', correctPinyin: 'dì', options: ['dì', 'tiān', 'shān', 'shuǐ'] },
  { hanzi: '日', correctPinyin: 'rì', options: ['rì', 'yuè', 'tiān', 'dì'] },
  { hanzi: '月', correctPinyin: 'yuè', options: ['yuè', 'rì', 'tiān', 'dì'] },
  { hanzi: '山', correctPinyin: 'shān', options: ['shān', 'shuǐ', 'tiān', 'dì'] },
  { hanzi: '水', correctPinyin: 'shuǐ', options: ['shuǐ', 'huǒ', 'shān', 'tiān'] },
  { hanzi: '火', correctPinyin: 'huǒ', options: ['huǒ', 'shuǐ', 'shān', 'tiān'] },
  { hanzi: '土', correctPinyin: 'tǔ', options: ['tǔ', 'shí', 'shān', 'shuǐ'] },
  { hanzi: '木', correctPinyin: 'mù', options: ['mù', 'huǒ', 'shuǐ', 'tǔ'] },
  { hanzi: '石', correctPinyin: 'shí', options: ['shí', 'tǔ', 'mù', 'huǒ'] },

  // 天气类
  { hanzi: '云', correctPinyin: 'yún', options: ['yún', 'yǔ', 'fēng', 'tiān'] },
  { hanzi: '雨', correctPinyin: 'yǔ', options: ['yǔ', 'yún', 'fēng', 'shuǐ'] },
  { hanzi: '风', correctPinyin: 'fēng', options: ['fēng', 'yǔ', 'yún', 'tiān'] },
  { hanzi: '雪', correctPinyin: 'xuě', options: ['xuě', 'yǔ', 'yún', 'fēng'] },

  // 动物类
  { hanzi: '马', correctPinyin: 'mǎ', options: ['mǎ', 'niú', 'yáng', 'niǎo'] },
  { hanzi: '牛', correctPinyin: 'niú', options: ['niú', 'mǎ', 'yáng', 'niǎo'] },
  { hanzi: '羊', correctPinyin: 'yáng', options: ['yáng', 'niú', 'mǎ', 'niǎo'] },
  { hanzi: '鸟', correctPinyin: 'niǎo', options: ['niǎo', 'yú', 'mǎ', 'niú'] },
  { hanzi: '鱼', correctPinyin: 'yú', options: ['yú', 'niǎo', 'niú', 'mǎ'] },

  // 家庭类
  { hanzi: '爸', correctPinyin: 'bà', options: ['bà', 'mā', 'gē', 'jiě'] },
  { hanzi: '妈', correctPinyin: 'mā', options: ['mā', 'bà', 'gē', 'jiě'] },
  { hanzi: '哥', correctPinyin: 'gē', options: ['gē', 'dì', 'jiě', 'mèi'] },
  { hanzi: '姐', correctPinyin: 'jiě', options: ['jiě', 'mèi', 'gē', 'dì'] },
  { hanzi: '弟', correctPinyin: 'dì', options: ['dì', 'gē', 'mèi', 'jiě'] },
  { hanzi: '妹', correctPinyin: 'mèi', options: ['mèi', 'jiě', 'dì', 'gē'] },

  // 学习用品类
  { hanzi: '书', correctPinyin: 'shū', options: ['shū', 'běn', 'dāo', 'huā'] },
  { hanzi: '本', correctPinyin: 'běn', options: ['běn', 'shū', 'dāo', 'cǎo'] },
  { hanzi: '刀', correctPinyin: 'dāo', options: ['dāo', 'shū', 'běn', 'huā'] },

  // 植物类
  { hanzi: '花', correctPinyin: 'huā', options: ['huā', 'cǎo', 'shù', 'yè'] },
  { hanzi: '草', correctPinyin: 'cǎo', options: ['cǎo', 'huā', 'shù', 'mù'] },
]

// 随机打乱数组
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// 从题库中随机抽取指定数量的题目，并随机打乱选项位置
export function getRandomQuestions(count: number = 10): HanziItem[] {
  const shuffled = shuffleArray(hanziDatabase)
  return shuffled.slice(0, count).map(item => {
    // 复制并打乱选项顺序，使正确答案位置随机
    const shuffledOptions = shuffleArray(item.options)
    return {
      ...item,
      options: shuffledOptions
    }
  })
}

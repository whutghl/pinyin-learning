export interface HanziItem {
  hanzi: string
  correctPinyin: string
  options: string[]
}

// 基础常用汉字题库 - 适合幼儿园学习
export const hanziDatabase: HanziItem[] = [
  {
    hanzi: '人',
    correctPinyin: 'rén',
    options: ['rén', 'kǒu', 'shǒu', 'dà'],
  },
  {
    hanzi: '口',
    correctPinyin: 'kǒu',
    options: ['kǒu', 'rén', 'mù', 'ěr'],
  },
  {
    hanzi: '手',
    correctPinyin: 'shǒu',
    options: ['shǒu', 'zú', 'tóu', 'xīn'],
  },
  {
    hanzi: '大',
    correctPinyin: 'dà',
    options: ['dà', 'xiǎo', 'duō', 'shǎo'],
  },
  {
    hanzi: '小',
    correctPinyin: 'xiǎo',
    options: ['xiǎo', 'dà', 'gāo', 'ǎi'],
  },
  {
    hanzi: '上',
    correctPinyin: 'shàng',
    options: ['shàng', 'xià', 'zuǒ', 'yòu'],
  },
  {
    hanzi: '下',
    correctPinyin: 'xià',
    options: ['xià', 'shàng', 'qián', 'hòu'],
  },
  {
    hanzi: '左',
    correctPinyin: 'zuǒ',
    options: ['zuǒ', 'yòu', 'shàng', 'xià'],
  },
  {
    hanzi: '右',
    correctPinyin: 'yòu',
    options: ['yòu', 'zuǒ', 'lǐ', 'wài'],
  },
  {
    hanzi: '中',
    correctPinyin: 'zhōng',
    options: ['zhōng', 'dà', 'xiǎo', 'cháng'],
  },
  {
    hanzi: '天',
    correctPinyin: 'tiān',
    options: ['tiān', 'dì', 'rì', 'yuè'],
  },
  {
    hanzi: '地',
    correctPinyin: 'dì',
    options: ['dì', 'tiān', 'shān', 'shuǐ'],
  },
  {
    hanzi: '日',
    correctPinyin: 'rì',
    options: ['rì', 'yuè', 'xīng', 'chén'],
  },
  {
    hanzi: '月',
    correctPinyin: 'yuè',
    options: ['yuè', 'rì', 'fēng', 'yún'],
  },
  {
    hanzi: '水',
    correctPinyin: 'shuǐ',
    options: ['shuǐ', 'huǒ', 'tǔ', 'mù'],
  },
  {
    hanzi: '火',
    correctPinyin: 'huǒ',
    options: ['huǒ', 'shuǐ', 'jīn', 'shí'],
  },
  {
    hanzi: '山',
    correctPinyin: 'shān',
    options: ['shān', 'chuān', 'tián', 'dì'],
  },
  {
    hanzi: '石',
    correctPinyin: 'shí',
    options: ['shí', 'tǔ', 'shā', 'ní'],
  },
  {
    hanzi: '田',
    correctPinyin: 'tián',
    options: ['tián', 'dì', 'tǔ', 'shān'],
  },
  {
    hanzi: '土',
    correctPinyin: 'tǔ',
    options: ['tǔ', 'shí', 'shā', 'mù'],
  },
  {
    hanzi: '木',
    correctPinyin: 'mù',
    options: ['mù', 'huǒ', 'jīn', 'shuǐ'],
  },
  {
    hanzi: '禾',
    correctPinyin: 'hé',
    options: ['hé', 'mù', 'cǎo', 'huā'],
  },
  {
    hanzi: '米',
    correctPinyin: 'mǐ',
    options: ['mǐ', 'miàn', 'dòu', 'gǔ'],
  },
  {
    hanzi: '竹',
    correctPinyin: 'zhú',
    options: ['zhú', 'mù', 'cǎo', 'yè'],
  },
  {
    hanzi: '门',
    correctPinyin: 'mén',
    options: ['mén', 'chuāng', 'qiáng', 'wū'],
  },
  {
    hanzi: '马',
    correctPinyin: 'mǎ',
    options: ['mǎ', 'niú', 'yáng', 'zhū'],
  },
  {
    hanzi: '鸟',
    correctPinyin: 'niǎo',
    options: ['niǎo', 'yú', 'chóng', 'shòu'],
  },
  {
    hanzi: '羊',
    correctPinyin: 'yáng',
    options: ['yáng', 'niú', 'mǎ', 'quǎn'],
  },
  {
    hanzi: '牛',
    correctPinyin: 'niú',
    options: ['niú', 'mǎ', 'yáng', 'zhū'],
  },
  {
    hanzi: '鱼',
    correctPinyin: 'yú',
    options: ['yú', 'niǎo', 'xiā', 'bèi'],
  },
  {
    hanzi: '虫',
    correctPinyin: 'chóng',
    options: ['chóng', 'niǎo', 'yú', 'shòu'],
  },
  {
    hanzi: '云',
    correctPinyin: 'yún',
    options: ['yún', 'yǔ', 'fēng', 'léi'],
  },
  {
    hanzi: '风',
    correctPinyin: 'fēng',
    options: ['fēng', 'yǔ', 'yún', 'xuě'],
  },
  {
    hanzi: '雨',
    correctPinyin: 'yǔ',
    options: ['yǔ', 'fēng', 'yún', 'xuě'],
  },
  {
    hanzi: '电',
    correctPinyin: 'diàn',
    options: ['diàn', 'guāng', 'léi', 'yǐng'],
  },
  {
    hanzi: '车',
    correctPinyin: 'chē',
    options: ['chē', 'chuán', 'fēi', 'mǎ'],
  },
  {
    hanzi: '船',
    correctPinyin: 'chuán',
    options: ['chuán', 'chē', 'fēi', 'pǎo'],
  },
  {
    hanzi: '花',
    correctPinyin: 'huā',
    options: ['huā', 'cǎo', 'shù', 'yè'],
  },
  {
    hanzi: '草',
    correctPinyin: 'cǎo',
    options: ['cǎo', 'huā', 'shù', 'mù'],
  },
  {
    hanzi: '树',
    correctPinyin: 'shù',
    options: ['shù', 'huā', 'cǎo', 'yè'],
  },
  {
    hanzi: '叶',
    correctPinyin: 'yè',
    options: ['yè', 'huā', 'cǎo', 'shù'],
  },
  {
    hanzi: '果',
    correctPinyin: 'guǒ',
    options: ['guǒ', 'huā', 'cǎo', 'zǐ'],
  },
  {
    hanzi: '爸',
    correctPinyin: 'bà',
    options: ['bà', 'mā', 'gē', 'jiě'],
  },
  {
    hanzi: '妈',
    correctPinyin: 'mā',
    options: ['mā', 'bà', 'jiě', 'dì'],
  },
  {
    hanzi: '哥',
    correctPinyin: 'gē',
    options: ['gē', 'dì', 'jiě', 'mèi'],
  },
  {
    hanzi: '姐',
    correctPinyin: 'jiě',
    options: ['jiě', 'mèi', 'gē', 'dì'],
  },
  {
    hanzi: '弟',
    correctPinyin: 'dì',
    options: ['dì', 'gē', 'mèi', 'jiě'],
  },
  {
    hanzi: '妹',
    correctPinyin: 'mèi',
    options: ['mèi', 'jiě', 'dì', 'gē'],
  },
  {
    hanzi: '爷',
    correctPinyin: 'yé',
    options: ['yé', 'nǎi', 'bà', 'mā'],
  },
  {
    hanzi: '奶',
    correctPinyin: 'nǎi',
    options: ['nǎi', 'yé', 'mā', 'bà'],
  },
  {
    hanzi: '书',
    correctPinyin: 'shū',
    options: ['shū', 'bǐ', 'zhǐ', 'bāo'],
  },
  {
    hanzi: '包',
    correctPinyin: 'bāo',
    options: ['bāo', 'shū', 'bǐ', 'chǐ'],
  },
  {
    hanzi: '尺',
    correctPinyin: 'chǐ',
    options: ['chǐ', 'bǐ', 'dāo', 'shū'],
  },
  {
    hanzi: '笔',
    correctPinyin: 'bǐ',
    options: ['bǐ', 'shū', 'zhǐ', 'dāo'],
  },
  {
    hanzi: '刀',
    correctPinyin: 'dāo',
    options: ['dāo', 'bǐ', 'chǐ', 'shū'],
  },
  {
    hanzi: '衣',
    correctPinyin: 'yī',
    options: ['yī', 'mào', 'xié', 'wà'],
  },
  {
    hanzi: '帽',
    correctPinyin: 'mào',
    options: ['mào', 'yī', 'xié', 'wà'],
  },
  {
    hanzi: '鞋',
    correctPinyin: 'xié',
    options: ['xié', 'wà', 'yī', 'mào'],
  },
  {
    hanzi: '袜',
    correctPinyin: 'wà',
    options: ['wà', 'xié', 'yī', 'mào'],
  },
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

// 从题库中随机抽取指定数量的题目
export function getRandomQuestions(count: number = 20): HanziItem[] {
  const shuffled = shuffleArray(hanziDatabase)
  return shuffled.slice(0, count)
}

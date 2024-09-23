export type SkillType = {
  name: string
  attack: number
  healing: number
  criticalChance: number
  dodgeChance: number
  img?: string
}

export type UserCharacterType = {
  name: string
  photo: string
  hp: number
  defaultGif: string
  audio?: string
  skillGif? : string
  skills: SkillType[]
}

export type CharacterStatsType = {
  hp: number
  hpPercentage: number
}

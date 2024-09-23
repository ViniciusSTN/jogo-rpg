import { atom } from 'recoil'
import { UserCharacterType } from '../../Types/fighters'

export const selecCharactersAtom = atom<boolean>({
  key: 'selectCharacters',
  default: true,
})

export const userCharacterAtom = atom<UserCharacterType | null>({
  key: 'userCharacter',
  default: null,
})

export const cpuCharacterAtom = atom<UserCharacterType | null>({
  key: 'cpuCharacter',
  default: null,
})

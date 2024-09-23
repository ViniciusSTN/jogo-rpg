import { useRecoilState, useSetRecoilState } from "recoil"
import { cpuCharacterAtom, selecCharactersAtom, userCharacterAtom } from "../states"
import { useEffect, useState } from "react"
import { SkillType, CharacterStatsType, UserCharacterType } from "../Types/fighters"
import { toast } from "react-toastify"

export const Fight = () => {
  const [userCharacter, setUserCharacter] = useRecoilState(userCharacterAtom)
  const [cpuCharacter, setCpuCharacter] = useRecoilState(cpuCharacterAtom)
  const setSelecCharacters = useSetRecoilState(selecCharactersAtom)

  const [currentUserStats, setCurrentUserStats] = useState<CharacterStatsType>({
    hp: userCharacter?.hp ?? 0,
    hpPercentage: 100,
  })

  const [currentCpuStats, setCurrentCpuStats] = useState<CharacterStatsType>({
    hp: cpuCharacter?.hp ?? 0,
    hpPercentage: 100,
  })

  const [currentTurn, setCurrentTurn] = useState<"user" | "cpu">("user")
  const [winner, setWinner] = useState<UserCharacterType | null>(null)

  const [userSkillImage, setUserSkillImage] = useState<string>('')
  const [cpuSkillImage, setCpuSkillImage] = useState<string>('')

  const [userHealingImg, setUserHealingImg] = useState<boolean>(false)
  const [cpuHealingImg, setCpuHealingImg] = useState<boolean>(false)

  const [skillUsed, setSkillUsed] = useState<boolean>(false)

  const [userSkillGif, setUserSkillGif] = useState<boolean>(false)
  const [cpuSkillGif, setCpuSkillGif] = useState<boolean>(false)

  function calculateHealthPercentage(currentHp: number, totalHp: number): number {
    if (totalHp === 0) return 0
    return Math.min((currentHp / totalHp) * 100, 100)
  }

  function switchTurn() {
    setCurrentTurn(prevTurn => (prevTurn === "user" ? "cpu" : "user"))
    setSkillUsed(false)
  }

  function calculateDamage(attacker: { attack: number, dodgeChance: number, criticalChance: number }, opponentName: string): number {
    const randomDodge = Math.random() * 100
    const randomCritical = Math.random() * 100

    if (randomDodge < attacker.dodgeChance) {
      toast.success(`${opponentName} desviou do ataque!`)
      return 0
    } else {
      if (randomCritical < attacker.criticalChance) {
        const criticalDamage = attacker.attack * 1.1
        toast.success(`Crítico! ${opponentName} recebeu ${Math.floor(criticalDamage)} de dano!`)
        return criticalDamage
      }
      return attacker.attack
    }
  }

  useEffect(() => {
    if (winner) {
      const timer = setTimeout(() => {
        setSelecCharacters(true)
        setUserCharacter(null)
        setCpuCharacter(null)
        setWinner(null)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [winner, setSelecCharacters, setUserCharacter, setCpuCharacter])

  useEffect(() => {
    if (currentUserStats.hp === 0) setWinner(cpuCharacter)
    else if (currentCpuStats.hp === 0) setWinner(userCharacter)
  }, [currentUserStats, currentCpuStats, cpuCharacter, userCharacter])

  useEffect(() => {
    const timer = setTimeout(() => {
      setUserSkillImage('')
    }, 1800)
    
    return () => clearTimeout(timer)
  }, [userSkillImage])

  useEffect(() => {
    if (userSkillGif) {
      const timer = setTimeout(() => {
        setUserSkillGif(false)
      }, 2100)
      return () => clearTimeout(timer)
    }
  }, [userSkillGif])

  useEffect(() => {
    if (cpuSkillGif) {
      const timer = setTimeout(() => {
        setCpuSkillGif(false)
      }, 2100)
      return () => clearTimeout(timer)
    }
  }, [cpuSkillGif])

  useEffect(() => {
    const timer = setTimeout(() => {
      setCpuSkillImage('')
    }, 1800)
    
    return () => clearTimeout(timer)
  }, [cpuSkillImage])

  useEffect(() => {
    if (userHealingImg) {
      const timer = setTimeout(() => {
        setUserHealingImg(false)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [userHealingImg])

  useEffect(() => {
    if (cpuHealingImg) {
      const timer = setTimeout(() => {
        setCpuHealingImg(false)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [cpuHealingImg])

  useEffect(() => {
    if (currentTurn === "cpu") cpuAttack()

    async function castSkill(skill: SkillType) {
      if (winner || skillUsed) return
  
      if (currentTurn === "user") {
        const damage = calculateDamage({ 
          attack: skill.attack, 
          dodgeChance: skill.dodgeChance, 
          criticalChance: skill.criticalChance 
        }, cpuCharacter?.name ?? '')
  
        const currentHp = Math.max(currentCpuStats.hp - damage, 0)
        const currentHpPercentage = calculateHealthPercentage(currentHp, cpuCharacter?.hp ?? 0)
        setCurrentCpuStats((prevState) => ({ ...prevState, hp: currentHp, hpPercentage: currentHpPercentage }))
  
        setUserSkillImage(skill.img ?? '')

        if (userCharacter?.skillGif) setUserSkillGif(true)
  
        if (skill.healing > 0) {
          const newUserHp = Math.min(currentUserStats.hp + skill.healing, userCharacter?.hp ?? 0)
          const newHpPercentage = calculateHealthPercentage(newUserHp, userCharacter?.hp ?? 0)
          setCurrentUserStats({ hp: newUserHp, hpPercentage: newHpPercentage })
        }

        setSkillUsed(true)

        setTimeout(() => {
          switchTurn()
        }, 3000)
      }
    }

    async function cpuAttack() {
      if (winner || skillUsed) return

      if (currentTurn === "cpu" && cpuCharacter && userCharacter) {
        const randomSkillIndex = Math.floor(Math.random() * cpuCharacter.skills.length)

        const skill = cpuCharacter.skills[randomSkillIndex]

        if (randomSkillIndex >= 0 && randomSkillIndex <= 2) {
          if (skill.img) setCpuSkillImage(skill.img)
          
          if (cpuCharacter.skillGif) setCpuSkillGif(true)
  
          const damage = calculateDamage({ 
            attack: skill.attack, 
            dodgeChance: skill.dodgeChance, 
            criticalChance: skill.criticalChance 
          }, userCharacter.name)
  
          const currentHp = Math.max(currentUserStats.hp - damage, 0)
          const currentHpPercentage = calculateHealthPercentage(currentHp, userCharacter.hp)
          setCurrentUserStats((prevState) => ({ ...prevState, hp: currentHp, hpPercentage: currentHpPercentage }))

          if (skill.healing > 0) {
            const newCpuHp = Math.min(currentCpuStats.hp + skill.healing, cpuCharacter.hp)
            const newHpPercentage = calculateHealthPercentage(newCpuHp, cpuCharacter.hp)
            setCurrentCpuStats((prevState) => ({ ...prevState, hp: newCpuHp, hpPercentage: newHpPercentage }))
          }

          setSkillUsed(true)

          setTimeout(() => {
            switchTurn()
          }, 3000)
        } else {
          await applyPotion(skill)
        }
      }
    }

    async function applyPotion(skill: SkillType) {
      if (winner || skillUsed) return

      if (currentTurn === "user") {
        setUserHealingImg(true)
        setCurrentUserStats((prevState) => {
          const newHp = Math.min(prevState.hp + skill.healing, userCharacter?.hp ?? 0)
          return {
            ...prevState,
            hp: newHp,
            hpPercentage: calculateHealthPercentage(newHp, userCharacter?.hp ?? 0),
          }
        })

        setSkillUsed(true)

        setTimeout(() => {
          switchTurn()
        }, 3000)
      } else {
        setCpuHealingImg(true)
        setCurrentCpuStats((prevState) => {
          const newHp = Math.min(prevState.hp + skill.healing, cpuCharacter?.hp ?? 0)
          return {
            ...prevState,
            hp: newHp,
            hpPercentage: calculateHealthPercentage(newHp, cpuCharacter?.hp ?? 0),
          }
        })

        setSkillUsed(true)

        setTimeout(() => {
          switchTurn()
        }, 3000)
      }
    }
  
    const handleKeyPress = async (event: KeyboardEvent) => {
      if (currentTurn === "user" && userCharacter && !skillUsed) {
        switch (event.key) {
          case "q":
            await castSkill(userCharacter.skills[0])
            break
          case "w":
            await castSkill(userCharacter.skills[1])
            break
          case "e":
            await castSkill(userCharacter.skills[2])
            break
          case "r":
            await applyPotion(userCharacter.skills[3])
            break
        }
      }
    }
  
    window.addEventListener("keydown", handleKeyPress)
  
    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [cpuCharacter, currentCpuStats, currentTurn, userCharacter, currentUserStats, winner, skillUsed])

  return (
    <div className="h-vh-header-footer w-full border flex justify-between relative">
      {winner && <p className="absolute z-10 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl text-center p-10 font-semibold text-orange-500">{winner.name} venceu!</p>}

      <div className="absolute flex items-center w-full p-2">
        <div className="grow flex items-center">
          <img src={userCharacter?.photo} alt={userCharacter?.name} className="h-24 w-24 rounded-full border-2 border-yellow-500 relative top-0 left-2" />
          <div className="w-full border-4 border-yellow-500 rounded-r-full overflow-hidden flex flex-row-reverse">
            <div
              className="bg-red-600 h-8 transition-all duration-300"
              style={{ width: `${currentUserStats.hpPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="w-28 text-6xl flex items-center justify-center">∞</div>

        <div className="grow flex items-center">
          <div className="w-full border-4 border-yellow-500 rounded-l-full overflow-hidden">
            <div
              className="bg-red-600 h-8 transition-all duration-300 rounded-l-full"
              style={{ width: `${currentCpuStats.hpPercentage}%` }}
            ></div>
          </div>
          <img src={cpuCharacter?.photo} alt={cpuCharacter?.name} className="h-24 w-24 rounded-full border-2 border-yellow-500 relative top-0 right-2" />
        </div>
      </div>

      <div className="flex justify-center">
        <img src={userSkillGif ? userCharacter?.skillGif : userCharacter?.defaultGif} alt={userCharacter?.name} className="w-[50%] h-[100%] object-cover" />
        {
          userSkillImage.length > 0 && (
            <div className="user-skill">
              <img src={userSkillImage} alt="golpe" />
            </div>
          )
        }

        {
          userHealingImg && (
            <div className="absolute top-1/2 -translate-y-1/2 healing">
              <img src="https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/cura.png?alt=media&token=4613553d-d791-438e-a00f-a7ea95f02616" alt="cura" />
            </div>
          )
        }
      </div>

      <div className="flex justify-center">
        <img src={cpuSkillGif ? cpuCharacter?.skillGif : cpuCharacter?.defaultGif} alt={cpuCharacter?.name} className="w-[50%] h-[100%] object-cover scale-x-[-1]" />
        {
          cpuSkillImage.length > 0 && (
            <div className="cpu-skill">
              <img src={cpuSkillImage} alt="golpe" />
            </div>
          )
        }

        {
          cpuHealingImg && (
            <div className="absolute top-1/2 -translate-y-1/2 healing">
              <img src="https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/cura.png?alt=media&token=4613553d-d791-438e-a00f-a7ea95f02616" alt="cura" />
            </div>
          )
        }

        <div className="bg-[#dddee2] absolute bottom-10 left-14 px-4 py-2 rounded-xl shadow-xl">
          <img src="https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/buttons.webp?alt=media&token=00ff12a4-fd40-4c88-8981-a402e29fce81" alt="bottons" className="w-36" />
        </div>
      </div>
    </div>
  )
}

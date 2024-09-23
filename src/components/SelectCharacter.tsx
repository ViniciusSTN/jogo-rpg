import { useRecoilState, useSetRecoilState } from "recoil"
import { fighters } from "../mocks/fighters"
import { UserCharacterType } from "../Types/fighters"
import { cpuCharacterAtom, selecCharactersAtom, userCharacterAtom } from "../states"
import { useEffect } from "react"

export const SelectCharacters = () => {
  const [userCharacter, setUserCharacter] = useRecoilState(userCharacterAtom)
  const [cpuCharacter, setCpuCharacter] = useRecoilState(cpuCharacterAtom)

  const setSelecCharacters = useSetRecoilState(selecCharactersAtom)

  function handleSelecCharacter(character: UserCharacterType) {
    if (!userCharacter) setUserCharacter(character)
    else if (!cpuCharacter) setCpuCharacter(character)
  }

  function handleChracterReset() {
    setUserCharacter(null)
    setCpuCharacter(null)
  }

  function getRandomNumber(max: number) {
    return Math.floor(Math.random() * (max + 1))
  }

  function handleRandomSelect() {
    const random = getRandomNumber(fighters.length - 1)

    if (userCharacter && userCharacter.name === fighters[random].name) {
      handleRandomSelect()
      return
    } else if (!userCharacter) {
      setUserCharacter(fighters[random])
    } else if (!cpuCharacter) {
      setCpuCharacter(fighters[random])
    }
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && userCharacter && cpuCharacter) {
        setSelecCharacters(false)
      }
    }

    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    }
  }, [userCharacter, cpuCharacter, setSelecCharacters])

  useEffect(() => {
    if (userCharacter?.audio) {
      const audio = new Audio(userCharacter?.audio)
      audio.volume = 0.3
      audio.play()
    }
  }, [userCharacter])

  useEffect(() => {
    if (cpuCharacter?.audio) {
      const audio = new Audio(cpuCharacter?.audio)
      audio.volume = 0.3
      audio.play()
    }
  }, [cpuCharacter])

  return (
    <div className="bg-indigo-600 bg-select-character-bg bg-no-repeat bg-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center p-9 w-[944px] h-[564px] rounded-2xl shadow-2xl bg-opacity-80">
      {
        userCharacter && cpuCharacter && (
          <p className="absolute text-white text-2xl blink">Pressione Enter para Começar</p>
        )
      }

      <div className="flex items-center w-full justify-between mb-7">
        <div className="flex flex-col">
          {userCharacter ? (
            <>
              <img src={userCharacter.photo} alt={userCharacter.name} className="w-60 h-60" />
              <h3 className="text-white text-3xl">{userCharacter.name}</h3>
            </>
          ) : (
            <>
              <div className="w-60 h-60"></div>
              <div className="h-9"></div>
            </>
          )}
        </div>

        {
          userCharacter && (
            <div>
              <button onClick={handleChracterReset} className="text-orange-600 text-xl">Resetar</button>
            </div>
          )
        }

        <div className="flex flex-col">
          {cpuCharacter ? (
            <>
              <img src={cpuCharacter.photo} alt={cpuCharacter.name} className="w-60 h-60" />
              <h3 className="text-white text-3xl">{cpuCharacter.name}</h3>
            </>
          ) : (
            <>
              <div className="w-60 h-60"></div>
              <div className="h-9"></div>
            </>
          )}
        </div>
      </div>
      
      <h2 className="text-4xl text-orange-600 mb-3 uppercase font-semibold">Selecione os candidatos</h2>

      <div className="flex gap-14">
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-white text-3xl w-10 text-center">1P</h4>
          {
            userCharacter && (
              <>
                <img src="https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/bandeira.webp?alt=media&token=bd839a81-bf72-46f1-8ee3-e3c1527807ca" alt="brasil" className="w-10" />
                <p className="text-white">Brasil</p>
              </>
            )
          }
        </div>

        <ul className="grid grid-cols-5 bg-white gap-1 p-1">
          {
            fighters.map(f => (
              <li className="h-32 w-32 flex justify-center items-center" key={f.name}>
                <button onClick={() => handleSelecCharacter(f)}>
                  <img src={f.photo} alt={f.name} />
                </button>
              </li>
            ))
          }
          <li className="h-32 w-32">
            <button onClick={handleRandomSelect}>
              <img src="https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/random.png?alt=media&token=8074d409-a5f9-4b44-b962-7d8df20430a8" alt="random" className="w-full h-full" />
            </button>
          </li>
        </ul>

        <div className="flex flex-col items-center gap-2">
          <h4 className="text-white text-3xl">CPU</h4>
          {
            cpuCharacter && (
              <>
                <img src="https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/bandeira.webp?alt=media&token=bd839a81-bf72-46f1-8ee3-e3c1527807ca" alt="brasil" className="w-10" />
                <p className="text-white">Brasil</p>
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}

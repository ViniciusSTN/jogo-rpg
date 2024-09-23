import { SelectCharacters } from "./SelectCharacter"
import { useRecoilState } from "recoil"
import { selecCharactersAtom } from "../states"
import { Fight } from "./Fight"
import { useEffect } from "react"

export default function PrincipalSection() {
  const [selecCharacters] = useRecoilState(selecCharactersAtom)

  useEffect(() => {
    function handleUserInteraction() {
      const audio = new Audio('public/music.mp3')
      audio.volume = 0.02
      audio.loop = true
      audio.play().catch((error) => {
        console.error("Falha ao reproduzir o áudio:", error)
      })
      window.removeEventListener('click', handleUserInteraction)
    }

    window.addEventListener('click', handleUserInteraction)

    return () => {
      window.removeEventListener('click', handleUserInteraction)
    }
  }, [])
  
  return (
    <main>
      <section className="min-h-vh-header-footer bg-custom-background bg-cover bg-bottom bg-no-repeat relative overflow-hidden">
        <div>
          {
            selecCharacters ? <SelectCharacters /> : <Fight />
          }
        </div>
      </section>
    </main>
  )
}

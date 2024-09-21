export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center bg-slate-400 h-24">
      <h2>Selecione os personagens</h2>

      <div className="flex gap-8">
        <div>
          <p>Meu personagem</p>
          <select name="principal">
            <option value="bolsonaro">Bolsonaro</option>
            <option value="lula">Lula</option>
            <option value="dilma">Dilma</option>
            <option value="datena">Datena</option>
            <option value="pablo">Pablo Marçal</option>
          </select>
        </div>
  
        <div>
          <p>Computador</p>
          <select name="principal">
            <option value="bolsonaro">Bolsonaro</option>
            <option value="lula">Lula</option>
            <option value="dilma">Dilma</option>
            <option value="datena">Datena</option>
            <option value="pablo">Pablo Marçal</option>
          </select>
        </div>
      </div>
    </header>
  )
}

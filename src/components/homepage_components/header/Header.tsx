import './header.css'

export function Header() {
  return (
    <header className='header'>
      <img className='hdr-logo' src="Logo.png"/>

      <ul className='hdr-list'>
        <li className="hdr-text"><a href=''>Início</a></li>
        <li className="hdr-text"><a href=''>Nossa Equipe</a></li>
        <li className="hdr-text"><a href=''>Serviços</a></li>
        <li className="hdr-text"><a href=''> Notícias</a></li>
        <li className="hdr-text"><a href=''>Contato</a></li>
        <li>
          <button className="hdr-button">
            Login
          </button>
          </li>
        <li>
          <button className="hdr-button">
            Cadastro
          </button>
        </li>
      </ul>
    </header>
  )
}
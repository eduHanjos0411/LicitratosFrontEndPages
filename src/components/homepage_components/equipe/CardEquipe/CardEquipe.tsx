import './card.css'

export interface CardProps {
  nome: string
  desc: string
  cargo: string
  img: string
}

export default function CardEquipe({nome, desc, cargo, img}: CardProps) {
  return (
    <div className="card">
  <div className="card-info">
    <h2>{nome}</h2>
    <p>
      {desc}
    </p>

    <div className='card-bottom'>
      <span className="cargo">{cargo}</span>

      <div className="social">
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram"/></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn"/></a>
      </div>
    </div>
    
  </div>

  <div className="card-photo">
    <img src={img} alt="foto"/>
  </div>
</div>

  )
}
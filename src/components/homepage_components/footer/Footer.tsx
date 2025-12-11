import './footer.css'

export function Footer() {
  return (
    <footer className="footer">
  <div className="footer-container">

    <div className="footer-column">
      <img
        src="logoFooter.png"
        alt="Licitratos Logo"
        className="footer-logo"
      />
    </div>

    <div className="footer-column">
      <h4>Contatos</h4>
      <p>(61) 99999-9999</p>
      <p>licitratos@gmail.com</p>

      <div className="footer-social">
        <a href="#"><img src="URL-ICON-INSTAGRAM" alt="Instagram" /></a>
        <a href="#"><img src="URL-ICON-LINKEDIN" alt="LinkedIn" /></a>
      </div>
    </div>

    <div className="footer-column">
      <h4>Endereço</h4>
      <p>IFB, Campus Brasília</p>
      <p>SGAN Quadra 610 Módulos D, E, F, G</p>
      <p>Asa Norte, Brasília - DF</p>
      <p>CEP: 70830-450</p>
    </div>

    <div className="footer-column">
      <h4>Informações</h4>
      <a href="#" className="footer-link">Política de Privacidade</a>

      <p className="footer-copy">
        Copyright © 2025 LICITRATOS<br />
        Todos os Direitos Reservados<br />
        Desenvolvido por Eduardo, Maria Fernanda, Artur Espindula e Calebe
      </p>
    </div>

  </div>
</footer>

  )
}
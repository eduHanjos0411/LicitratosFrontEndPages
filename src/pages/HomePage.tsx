import { Contato } from "../components/homepage_components/contato/Contato";
import { Equipe } from "../components/homepage_components/equipe/Equipe";
import { Footer } from "../components/homepage_components/footer/Footer";
import { Header } from "../components/homepage_components/header/Header";
import { Hero } from "../components/homepage_components/hero/Hero";
import { Noticias } from "../components/homepage_components/noticias/Noticias";
import { Servicos } from "../components/homepage_components/servicos/Servicos";

export function HomePage() {
  return (
    <>
    
    <Header/>
    <Hero/>
    <Equipe/>
    <Servicos/>
    <Noticias/>
    <Contato/>
    <Footer/>
    </>
  )
}
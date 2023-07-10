import { useState } from 'react';
import './App.css';
import dospredios from "./assets/Dos predios.jpg";
import espelho from "./assets/espelho infinito.jpg";
import nadacomo from "./assets/nada como um dia apos o outro dia.jpg";
import HTE from "./assets/happier than ever.jpg";
import DL from "./assets/doka language.webp";
import VNSDN from "./assets/voce nao sabe de nada.webp";
import play from "./assets/play.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='global'>
        <div className='tituloPagina'>
          <h1 className='tituloPagina'>Meus álbuns favoritos</h1>
        </div>
        <div className='containers'>
          <div className='container'>
            <h2 className='nomeAlbum'>Dos prédios</h2>
            <h2 className='artistaBanda'>Veigh</h2>
            <img src={dospredios} alt='Dos prédios'/>
            <h3 className='ano'>2022</h3>
            <h3 className='gravadora'>Supernova</h3>
            <h4 className='duracao'>39 minutos e 5 segundos</h4>
            <a href="https://open.spotify.com/intl-pt/album/7ARyKbobUo0oE30Arwe67d?si=g0sQexYRR1q_41_TG-b23Q"><button className="custom-btn btn-10"><img src={play} alt='botao de play'/></button></a>
          </div>
          <div className='container'>
            <h2 className='nomeAlbum'>Espelho Infinito '^</h2>
            <h2 className='artistaBanda'>Sidoka</h2>
            <img src={espelho} alt='Espelho Infinito'/>
            <h3 className='ano'>2020</h3>
            <h3 className='gravadora'>Intactoz</h3>
            <h4 className='duracao'>43 minutos e 47 segundos</h4>
            <a href="https://open.spotify.com/intl-pt/album/2TUAj58Gvujxuc1MMpqVsY?si=Py46DkrdSwqizXGOwLg6ag"><button className="custom-btn btn-10"><img src={play} alt='botao de play'/></button></a>
          </div>
          <div className='container'>
            <h2 className='nomeAlbum'>Nada Como um Dia</h2>
            <h2 className='artistaBanda'>Racionais MC's</h2>
            <img src={nadacomo} alt='Nada Como um Dia Após o Outro Dia'/>
            <h3 className='ano'>2002</h3>
            <h3 className='gravadora'>Cosa Nostra Fonográfica</h3>
            <h4 className='duracao'>1 hora e 50 minutos</h4>
            <a href="https://open.spotify.com/intl-pt/album/4HcPzKyKVtcZCwJgesoZWn?si=Jp0J5JI7ShSPaIqh1j023w"><button className="custom-btn btn-10"><img src={play} alt='botao de play'/></button></a>
          </div>
          <div className='container'>
            <h2 className='nomeAlbum'>Happier Than Ever</h2>
            <h2 className='artistaBanda'>Billie Eilish</h2>
            <img src={HTE} alt='Happier Than Ever'/>
            <h3 className='ano'>2022</h3>
            <h3 className='gravadora'>Interscope Records</h3>
            <h4 className='duracao'>56 minutos e 15 segundos</h4>
            <a href="https://open.spotify.com/intl-pt/album/0JGOiO34nwfUdDrD612dOp?si=vzpwefuLT72TwTwwrI06JA"><button className="custom-btn btn-10"><img src={play} alt='botao de play'/></button></a>
          </div>
          <div className='container'>
            <h2 className='nomeAlbum'>Doka Language</h2>
            <h2 className='artistaBanda'>Sidoka</h2>
            <img src={DL} alt='Doka Language'/>
            <h3 className='ano'>2019</h3>
            <h3 className='gravadora'>Sidoka</h3>
            <h4 className='duracao'>40 minutos e 1 segundo</h4>
            <a href="https://open.spotify.com/intl-pt/album/4y7lYLaNRtK7cBfDUtCuNH?si=HPa0DhocTFaGqWsGEeiI0w"><button className="custom-btn btn-10"><img src={play} alt='botao de play'/></button></a>
          </div>
          <div className='container'>
            <h2 className='nomeAlbum'>Você Não Sabe de Nada</h2>
            <h2 className='artistaBanda'>O grilo</h2>
            <img className='imagens' src={VNSDN} alt='Você Não Sabe de Nada'/>
            <h3 className='ano'>2021</h3>
            <h3 className='gravadora'>Rockambole</h3>
            <h4 className='duracao'>37 minutos e 52 segundos</h4>
            <a href="https://open.spotify.com/intl-pt/album/0I7bofr4iucY3LXUPKv9cz?si=BmjvJkUwRyiiSUnlzos2Aw"><button className="custom-btn btn-10"><img src={play} alt='botao de play'/></button></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

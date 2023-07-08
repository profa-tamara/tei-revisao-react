import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ttf from './assets/ttf.jpg';
import vino1 from './assets/237.jpg';
import mad from './assets/m.a.d.jpg';
import callzone from './assets/callzone.jpg';
import predio from './assets/predios.jpg';
import mpfb from './assets/mpfb.jpg';
import botao from 'https://unpkg.com/css.gg@2.0.0/icons/css/play-button-o.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='titulo'>
      <h1 className='tituloPagina'>Nossos álbuns favoritos</h1>
    </div>
    <div className="containers"> 
        <div className='container'>
          <h1 className='nomeAlbum'>TTF</h1>
          <h2 className='nomeArtista'>Derek</h2>
          <img src={ttf}/>
          <h3 className='ano'>2022</h3>
          <h3 className='gravadora'>Trap The Fato</h3>
          <h3 className='duracao'>1h e 34min</h3>
          <a href="https://open.spotify.com/intl-pt/album/2Gb9tOJBTIkiXfdQq1cLgo?si=977dc83e3a7e4aec" className="gg-play-button-o"></a>
        </div>
        <div className='container'>
          <h1 className='nomeAlbum'>237</h1>
          <h2 className='nomeArtista'>Yunk Vino</h2>
          <img src={vino1}/>
          <h3 className='ano'>2020</h3>
          <h3 className='gravadora'>Nagalli e Celo</h3>
          <h3 className='duracao'>46min</h3>
          <a href="https://open.spotify.com/intl-pt/album/3VGvkH5X8bhjIV0rSohaVU?si=060279b056b54e97" className="gg-play-button-o"></a>
        </div>
        <div className='container'>
          <h1 className='nomeAlbum'>M.A.D</h1>
          <h2 className='nomeArtista'>Yunk Vino</h2>
          <img src={mad}/>
          <h3 className='ano'>2023</h3>
          <h3 className='gravadora'>Nagalli e Celo</h3>
          <h3 className='duracao'>31min</h3>
          <a href="https://open.spotify.com/intl-pt/album/681qRc7HzASc5cALLkOFLO?si=Zos3q0iwT9WEaCqD-YNQHA" className="gg-play-button-o"></a>
        </div>
        <div className='container'>
          <h1 className='nomeAlbum'>Callzone Tapes 3</h1>
          <h2 className='nomeArtista'>Recayd Mob</h2>
          <img src={callzone}/>
          <h3 className='ano'>2021</h3>
          <h3 className='gravadora'>Recayd Mob</h3>
          <h3 className='duracao'>1h e 22min</h3>
          <a href="https://open.spotify.com/intl-pt/album/5ka0HFmEwwvDjxOy0t9VnC?si=33bc02e4c5344a08" className="gg-play-button-o"></a>
        </div>
        <div className='container'>
          <h1 className='nomeAlbum'>Dos Prédios</h1>
          <h2 className='nomeArtista'>Veigh</h2>
          <img src={predio}/>
          <h3 className='ano'>2022</h3>
          <h3 className='gravadora'>Supernova</h3>
          <h3 className='duracao'>39min</h3>
          <a href="https://open.spotify.com/intl-pt/album/7ARyKbobUo0oE30Arwe67d?si=f9e46858b9204f9c" className="gg-play-button-o"></a>
        </div>
        <div className='container'>
          <h1 className='nomeAlbum'>MPFB</h1>
          <h2 className='nomeArtista'>Derxan</h2>
          <img src={mpfb}/>
          <h3 className='ano'>2023</h3>
          <h3 className='gravadora'>Pineapple StormTV</h3>
          <h3 className='duracao'>33min</h3>
          <a href="https://open.spotify.com/intl-pt/album/2zBsNCMQxokxViSI9kiaQX?si=813da220498a457e" className="gg-play-button-o"></a>
        </div>
      </div>
    </>
  )
}

export default App
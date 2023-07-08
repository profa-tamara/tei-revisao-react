import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Icon } from '@iconify/react';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="titulo">Álbuns Favoritos da Sofia Pereira e Stella Maris</h1>
      <div class="conteiner">
        <p>ANTI</p>
        <p>RIHANNA</p>
        <a href=""><img src="data:image/jpeg;base64,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" alt="" srcset="" /></a>
        <p>Lançamento: 2016 </p>
        <p>Gravadora: Westbury Road Entertainment</p>
        <p>Duração: 51 minutos </p>
        <a href="https://open.spotify.com/album/4UlGauD7ROb3YbVOFMgW5u?si=NmToR1V2T--cFX1Xmapdsg" target="_blank"><Icon icon="ion:play-outline" width="20" /></a>
      </div>

      <div class="conteiner">
        <p>Nossa Missão</p>
        <p>Natiruts</p>
        <a href=""><img src="https://i.scdn.co/image/ab67616d0000b273363821552f65adc2ad9f453d" alt="" srcset="" /></a>
        <p>Lançamento: 2005</p>
        <p>Gravadora: Sony Music Entertainment</p>
        <p>Duração: 47 minutos</p>
        <a href="https://open.spotify.com/album/4LmMyp43Je9hrs7WTFQkjE?si=GTBdirTASwaV1ocTfjvoVA" target="_blank"><Icon icon="ion:play-outline" width="20" /></a>
      </div >

      <div class="conteiner">
        <p>Lost On You</p>
        <p>LP</p>
        <a href=""><img src="https://upload.wikimedia.org/wikipedia/pt/f/f3/Capa_de_Lost_on_You_%28vers%C3%A3o_internacional%29.png" alt="" srcset="" /></a>
        <p>Lançamento: 2017</p>
        <p>Gravadora: Vagrant Records</p>
        <p>Duração: 50 minutos</p>
        <a href="https://open.spotify.com/album/0dYi4VGov4Dl4AED2eVwPw?si=TWtqAaTUQjWlJB7U6mNTsQ" target="_blank"><Icon icon="ion:play-outline" width="20" /></a>
      </div>

      <div class="conteiner">
        <p>Reputation</p>
        <p>Taylor Swift</p>
        <a href=""><img src="data:image/jpeg;base64,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" alt="" srcset="" /></a>
        <p>Lançamento: 2017</p>
        <p>Gravadora: Big Machine</p>
        <p>Duração: 65 minutos</p>
        <a href="https://open.spotify.com/album/6DEjYFkNZh67HP7R9PSZvv?si=8N-psy09QPWApvwQOMwVQQ" target="_blank"><Icon icon="ion:play-outline" width="20" /></a>
      </div>

      <div class="conteiner">
        <p>Beauty Behind The Madness</p>
        <p>The Weeknd</p>
        <a href=""><img src="https://i.scdn.co/image/ab67616d0000b2737fcead687e99583072cc217b" alt="" srcset="" /></a>
        <p>Lançamento: 2015</p>
        <p>Gravadora: Universal Republic Recors</p>
        <p>Duração: 47 minutos </p>
        <a href="https://open.spotify.com/album/0P3oVJBFOv3TDXlYRhGL7s?si=zg2woO6mRQ-L5nWOM2hO_Q" target="_blank"><Icon icon="ion:play-outline" width="20" /></a>
      </div>

      <div class="conteiner">
        <p>O Que Você Quer Saber de Verdade</p>
        <p>Marisa Monte</p>
        <a href=""><img src="https://upload.wikimedia.org/wikipedia/pt/a/a9/Marisa_Monte_-_O_Que_Voc%C3%AA_Quer_Saber_De_Verdade.jpg" alt="" srcset="" /></a>
        <p>Lançamento: 2011</p>
        <p>Gravadora: Monte Criação e Produção</p>
        <p>Duração: 45 minutos</p>
        <a href="https://open.spotify.com/album/0NW6Z4aNFiaj2pN83d1fyg?si=n5UiH5B3SNCVJ5xo5b9oQw" target="_blank"><Icon icon="ion:play-outline" width="20" /></a>
      </div>
    </>
  )
}

export default App

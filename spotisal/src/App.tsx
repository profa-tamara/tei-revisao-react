import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Meus álbuns favoritos</h1>
      <div className='container'>
        <section>
          <h2>Future Nostalgia</h2>
          <p><b>Dua Lipa</b></p> 
          <img src="https://m.media-amazon.com/images/I/7140vRScMLL._UF1000,1000_QL80_.jpg" alt="" />
          <p><b>Ano de lançamento:</b> 2020</p>
          <p><b>Gravadora:</b> Warner Records</p>
          <p><b>Duração:</b> 37:17</p>
          <a href='https://www.youtube.com/playlist?list=OLAK5uy_nDFJQ8G2RNYuZriujUlrGlOWrfBW8ASdI'><img src="https://static.vecteezy.com/system/resources/previews/016/017/441/original/play-button-with-transparent-background-free-png.png" alt="" /></a>
        </section>

        <section>
          <h2>Evolve</h2>
          <p><b>Imagine Dragons</b></p>
          <img src="https://m.media-amazon.com/images/I/916R9qiMCOL._UF1000,1000_QL80_.jpg" alt="" />
          <p><b>Ano de lançamento:</b> 2017</p>
          <p><b>Gravadora:</b> KIDinaKORNER, Interscope Records</p>
          <p><b>Duração:</b> 39:12</p>
          <a href='https://www.youtube.com/playlist?list=OLAK5uy_lnx0vO7zWw_AcGVVHsaDvsowsRQiIjBMk'><img src="https://static.vecteezy.com/system/resources/previews/016/017/441/original/play-button-with-transparent-background-free-png.png" alt="" /></a>
        </section>

        <section>
          <h2>After Hours</h2>
          <p><b>The Weeknd</b></p>
          <img src="https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Weeknd_-_After_Hours.png" alt="" />
          <p><b>Ano de lançamento:</b> 2020</p>
          <p><b>Gravadora:</b> XO, Republic</p>
          <p><b>Duração:</b> 56:14</p>
          <a href='https://www.youtube.com/playlist?list=OLAK5uy_lwaD8UXRautA8W9eWT4zZOvwf5Ktxpax8'><img src="https://static.vecteezy.com/system/resources/previews/016/017/441/original/play-button-with-transparent-background-free-png.png" alt="" /></a>
        </section>
      </div>
      <div className='container'>
        <section>
          <h2>SOUR</h2>
          <p><b>Olivia Rodrigo</b></p>
          <img src="https://upload.wikimedia.org/wikipedia/pt/7/71/Sour_-_Olivia_Rodrigo.png" alt="" />
          <p><b>Ano de lançamento:</b> 2021</p>
          <p><b>Gravadora:</b> Geffen Records</p>
          <p><b>Duração:</b> 34:41</p>
          <a href='https://www.youtube.com/playlist?list=OLAK5uy_mRc9HLtU_4lp_-MKQNApIRiLwY0M6xoCA'><img src="https://static.vecteezy.com/system/resources/previews/016/017/441/original/play-button-with-transparent-background-free-png.png" alt="" /></a>
        </section>

        <section>
          <h2>÷</h2>
          <p><b>Ed Sheeran</b></p>
          <img src="https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png" alt="" />
          <p><b>Ano de lançamento:</b> 2017</p>
          <p><b>Gravadora:</b> Asylum Records</p>
          <p><b>Duração:</b> 46:14</p>
          <a href='https://www.youtube.com/playlist?list=OLAK5uy_mKusDe2fPwFJ-ejK2kVatUSXgcR-atFe4'><img src="https://static.vecteezy.com/system/resources/previews/016/017/441/original/play-button-with-transparent-background-free-png.png" alt="" /></a>
        </section>

        <section>
          <h2>Happier Than Ever</h2>
          <p><b>Billie Eilish</b></p>
          <img src="https://media.pitchfork.com/photos/608839f84c67840074db8afb/1:1/w_3000,h_3000,c_limit/Billie-Eilish-Happier-Than-Ever.jpeg" alt="" />
          <p><b>Ano de lançamento:</b> 2021</p>
          <p><b>Gravadora:</b> Darkroom, Interscope Records</p>
          <p><b>Duração:</b> 56:07</p>
          <a href='https://www.youtube.com/playlist?list=OLAK5uy_lkHngwJMHlqHsz7ckye6lwrhYmyFTMvM4'><img src="https://static.vecteezy.com/system/resources/previews/016/017/441/original/play-button-with-transparent-background-free-png.png" alt="" /></a>
        </section>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <h1>Meus álbuns favoritos</h1>
      <div className="card" id='menu'>
        <div class="album">
          <h3>The Album</h3>
          <h4>BLACKPINK</h4>
          <img src="https://upload.wikimedia.org/wikipedia/pt/1/1e/Blackpink_-_The_Album.png" alt=""/>
          <p>Ano de Lançamento: </p>
          <p>Gravadora: </p>
          <p>Duração: </p>
          <a href="https://www.youtube.com/watch?v=deo0aXNPalE&list=PLoCWJhz_4WqFk-E-A6cBUvI-nWIBpjWWi">
          <img id="play" src="https://www.pngmart.com/files/3/Play-Button-Transparent-Background.png" alt=""/>
          </a>
        </div>

        <div class="album">
          <h3>CHEACKMATE</h3>
          <h4>ITZY</h4>
          <img src="https://static.wikia.nocookie.net/itzy/images/a/a0/CHECKMATE_revisited_digital_album_cover.webp" alt=""/>
          <p>Ano de Lançamento: </p>
          <p>Gravadora: </p>
          <p>Duração: </p>
          <a href="https://www.youtube.com/watch?v=deo0aXNPalE&list=PLoCWJhz_4WqFk-E-A6cBUvI-nWIBpjWWi">
          <img id="play" src="https://www.pngmart.com/files/3/Play-Button-Transparent-Background.png" alt=""/>
          </a>
        </div>

        <div class="album">
          <h3>-R-</h3>
          <h4>Rosé</h4>
          <img src="https://upload.wikimedia.org/wikipedia/pt/9/96/Ros%C3%A9_-_R.jpg" alt=""/>
          <p>Ano de Lançamento: 12/03/2021</p>
          <p>Gravadora: The BlackLabel</p>
          <p>Duração: 6:13</p>
          <a href="https://youtu.be/HA5D3YwxJIk">
          <img id="play" src="https://www.pngmart.com/files/3/Play-Button-Transparent-Background.png" alt=""/>
          </a>
        </div>

        <div class="album">
          <h3>1989 (Deluxe)</h3>
          <h4>Taylor Swift</h4>
          <img src="https://cdns-images.dzcdn.net/images/cover/68b4e986958b17f05b062ffa8d7ae114/500x500.jpg" alt=""/>
          <p>Ano de Lançamento: </p>
          <p>Gravadora: </p>
          <p>Duração: </p>
          <a href="https://www.youtube.com/watch?v=deo0aXNPalE&list=PLoCWJhz_4WqFk-E-A6cBUvI-nWIBpjWWi">
          <img id="play" src="https://www.pngmart.com/files/3/Play-Button-Transparent-Background.png" alt=""/>
          </a>
        </div>

        <div class="album">
          <h3>Here We Go Again</h3>
          <h4>Demi Lovato</h4>
          <img src="https://m.media-amazon.com/images/I/81dhBWBpRkL._UF1000,1000_QL80_.jpg" alt=""/>
          <p>Ano de Lançamento: </p>
          <p>Gravadora: </p>
          <p>Duração: </p>
          <a href="https://www.youtube.com/watch?v=deo0aXNPalE&list=PLoCWJhz_4WqFk-E-A6cBUvI-nWIBpjWWi">
          <img id="play" src="https://www.pngmart.com/files/3/Play-Button-Transparent-Background.png" alt=""/>
          </a>
        </div>

        <div class="album">
          <h3>Rhythm Nation 1814</h3>
          <h4>Janet Jackson</h4>
          <img src="https://upload.wikimedia.org/wikipedia/pt/8/8e/JanetJacksonsRhythmNation1814.jpg" alt=""/>
          <p>Ano de Lançamento: </p>
          <p>Gravadora: </p>
          <p>Duração: </p>
          <a href="https://www.youtube.com/watch?v=deo0aXNPalE&list=PLoCWJhz_4WqFk-E-A6cBUvI-nWIBpjWWi">
          <img id="play" src="https://www.pngmart.com/files/3/Play-Button-Transparent-Background.png" alt=""/>
          </a>
        </div>
      </div>
    </>
  )
}

export default App

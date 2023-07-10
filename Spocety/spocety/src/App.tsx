import './App.css'

function App() {
 

  return (
    <>
      <h1 style={{color: 'white'}}>SPOCETY</h1>
      <h2 style={{color: 'white'}}>MEUS ÁLBUNS FAVORITOS</h2>

      <div className='container'>

        <div className='album-1 albuns'>
          <h2 style={{fontSize: '17px'}}> Abaixo de Zero: Hello Hell </h2>
          <h3>Black Alien</h3>
          <img 
          src="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/4/1/6/8/718981556301227.jpg" 
          alt="" 
          className='imgs'
          onMouseOver={(e) => e.currentTarget.style.backgroundImage = 'url(\src\imgs\blac2.png)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundImage = ''}
          />
          <div>
            <p><strong>Ano Lançamento:</strong> 2019</p>
            <p><strong>Gravadora:</strong> Extrapunk Extrafunk</p>
            <p><strong>Duração:</strong> 26min 47s</p>
            <a href="https://open.spotify.com/intl-pt/album/0d9km1VogLi6sN6S95ilyT?si=RVw1kgBfTTe9iO0FlyLJsQ">
              <img className='botaoPlay' src="\src\imgs\play.png" alt="" />
            </a>
          </div>

        </div>

        <div className='album-2 albuns'>
          <h2 style={{fontSize: '20px', color: 'black'}}>Pedra Letícia</h2>
          <h3>Pedra Letícia</h3>
          <img src="https://immub-space.nyc3.digitaloceanspaces.com/capas/81353/thumbnails/m_81353ca.jpg" alt="" className='imgs'/>
          <div>
            <p><strong>Ano Lançamento:</strong> 2008</p>
            <p><strong>Gravadora:</strong> EMI Records</p>
            <p><strong>Duração:</strong> 33min 51s</p>
            <a href="https://open.spotify.com/intl-pt/album/66Rz3Lm6yLgNQ4kEY0fPmS?si=NqmdfHy-TYyu61kGbvB_vA">
              <img className='botaoPlay' src="\src\imgs\play.png" alt="" />
            </a>
          </div>
        </div>

        <div className='album-3 albuns'>
          <h2 style={{fontSize: '20px'}}>Tim Maia 1971 </h2>
          <h3>Tim Maia</h3>
          <img src="https://images-na.ssl-images-amazon.com/images/I/81cbJHyihVL._AC_SX425_.jpg" alt="" className='imgs'/>
          <div>
            <p><strong>Ano Lançamento:</strong> 1971</p>
            <p style={{fontSize: '13px'}}><strong>Gravadora:</strong> Universal Music Group</p>
            <p><strong>Duração:</strong> 30min 36s</p>
            <a href="https://open.spotify.com/intl-pt/album/1crN3RnAw8N6BztzuEAo8A?si=JeqKeJZLTsapzRlLlMTtmw">
              <img className='botaoPlay' src="\src\imgs\play.png" alt="" />
            </a>
          </div>
        </div>

        <div className='album-4 albuns'>
          <h2 style={{fontSize: '20px'}}>Eletrocardiograma </h2>
          <h3>Flora Matos</h3>
          <img src="https://akamai.sscdn.co/uploadfile/letras/albuns/d/7/a/b/599101506695789.jpg" alt="" className='imgs'/>
          <div>
            <p><strong>Ano Lançamento:</strong> 2017</p>
            <p><strong>Gravadora:</strong> Flora Matos</p>
            <p><strong>Duração:</strong> 38min 24s</p>
            <a href="https://open.spotify.com/intl-pt/album/0M7Qar3a31HBBUGBREC4rg?si=U3kYN0U8TzGHjpeR7PIkFg">
              <img className='botaoPlay' src="\src\imgs\play.png" alt="" />
            </a>
          </div>
        </div>

        <div className='album-5 albuns'>
          <h2 style={{fontSize: '20px'}}>Heresia</h2>
          <h3>Djonga</h3>
          <img src="https://musicainstantanea.com.br/wp-content/uploads/2017/04/3dd6d0778de4353c88e1ed12eb5f0557.960x960x1.jpg" alt="" className='imgs'/>
          <div>
            <p><strong>Ano Lançamento:</strong> 2017</p>
            <p><strong>Gravadora:</strong> Ceia</p>
            <p><strong>Duração:</strong> 33min 10s</p>
            <a href="https://open.spotify.com/intl-pt/album/2Mlk1lNZ2pzDxvLhLDVUw2?si=3GC7oAI9S4-USHvKLTg_lw">
            <img className='botaoPlay' src="\src\imgs\play.png" alt="" />
            </a>
          </div>
        </div>
        
        <div className='album-6 albuns'>
          <h2 style={{fontSize: '20px'}}>Regina </h2>
          <h3>Nill</h3>
          <img src="https://th.bing.com/th/id/OIP.VsFD1Bf82GumDfDfkv8MUAHaHa?pid=ImgDet&rs=1" alt="" className='imgs'/>
          <div>
            <p><strong>Ano Lançamento:</strong> 2017</p>
            <p><strong>Gravadora:</strong> Sound Food Gang</p>
            <p><strong>Duração:</strong> 39min 12s</p>
            <a href="https://open.spotify.com/intl-pt/album/04zQ2qk2AsRPZppeI6TvWl?si=dU3Gnr61Q2yKwEwR8rcOKQ">
            <img className='botaoPlay' src="\src\imgs\play.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
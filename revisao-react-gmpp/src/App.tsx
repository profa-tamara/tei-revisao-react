import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import imgAlbum1  from "./assets/album1.webp";
import imgAlbum2  from "./assets/album2.png";
import imgAlbum3  from "./assets/album3.webp";
import imgAlbum4  from "./assets/album4.jpeg";
import imgAlbum5  from "./assets/album5.jpg";
import "./App.css";

function abrirNovaGuia(link: any) {
  let url;

  switch (link) {
    case 1:
      url = 'https://open.spotify.com/intl-pt/album/3Ne8Jl7YiQmCM4S4FdBBhN?si=OrdhwVyrR2-A4BVmqudr3w';
      break;
    case 2:
      url = 'https://open.spotify.com/intl-pt/album/6FJxoadUE4JNVwWHghBwnb?si=vn24h4oFSa69nKuwW8IfYw';
      break;
    case 3:
      url = 'https://open.spotify.com/album/3lS1y25WAhcqJDATJK70Mq?autoplay=true';
      break;
    case 4:
      url = 'https://open.spotify.com/intl-pt/album/4IzsHOBctS66OP3dHXTJsG?si=8RWreF3iTPy7y7mZFRfLUg';
      break;
    case 5:
      url = 'https://open.spotify.com/intl-pt/album/21jF5jlMtzo94wbxmJ18aa?si=fmtBTJdcTKOyGOoDlPGA4A';
      break;
    default:
      url = '#';
  }

  window.open(url, '_blank');
}

function App() {
  
  const handleClick = (valor: any) => {
    abrirNovaGuia(valor);
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Meus albums favoritos</h1>
          </div>
        <div className="albuns">
          <div className="album">
            <div className="titulo"><h2>Nova Moda</h2></div>
            <div className="autor"><h3>Caio Lucas</h3></div>
            <div className="imagem">
              <img src={imgAlbum1} alt=""/>
            </div>
            <div className="descricao">
              <p>
                <strong>Ano Lançamento:  </strong> 2022
              </p>
              <p>
                <strong>Gravadora: </strong> NADAMAL
              </p>
              <p>
                <strong>Duração: </strong> 44:55
              </p>
            </div>
            <div className="play" onClick={() => handleClick(1)}>
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
          </div>
          <div className="album">
            <div className="titulo"><h2>RENAISSANCE</h2></div>
            <div className="autor"><h3>Beyoncé</h3></div>
            <div className="imagem">
              <img src={imgAlbum2} alt=""/>
            </div>
            <div className="descricao">
              <p>
                <strong>Ano Lançamento:  </strong> 2022
              </p>
              <p>
                <strong>Gravadora: </strong> Parkwoord Entertainment
              </p>
              <p>
                <strong>Duração: </strong> 1h 2min
              </p>
            </div>
            <div className="play" onClick={() => handleClick(2)}>
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
          </div>
          <div className="album">
            <div className="titulo"><h2>Midnights</h2></div>
            <div className="autor"><h3>Taylor Swift</h3></div>
            <div className="imagem">
              <img src={imgAlbum3} alt=""/>
            </div>
            <div className="descricao">
              <p>
                <strong>Ano Lançamento:  </strong> 2022
              </p>
              <p>
                <strong>Gravadora: </strong> Universal Records
              </p>
              <p>
                <strong>Duração: </strong> 44:02 </p>
            </div>
            <div className="play" onClick={() => handleClick(2)}>
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
          </div>
          <div className="album">
            <div className="titulo"><h2>Festa das Patroas</h2></div>
            <div className="autor"><h3>M & M e Marília Mendonça</h3></div>
            <div className="imagem">
              <img src={imgAlbum4} alt=""/>
            </div>
            <div className="descricao">
              <p>
                <strong>Ano Lançamento:  </strong> 2020
              </p>
              <p>
                <strong>Gravadora: </strong> Som livre
              </p>
              <p>
                <strong>Duração: </strong> 1h 7min
              </p>
            </div>
            <div className="play" onClick={() => handleClick(4)}>
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
          </div>
          <div className="album">
            <div className="titulo"><h2>30</h2></div>
            <div className="autor"><h3>Adele</h3></div>
            <div className="imagem">
              <img src={imgAlbum5} alt=""/>
            </div>
            <div className="descricao">
              <p>
                <strong>Ano Lançamento:  </strong> 2021
              </p>
              <p>
                <strong>Gravadora: </strong> Columbia Records
              </p>
              <p>
                <strong>Duração: </strong> 55:18
              </p>
            </div>
            <div className="play" onClick={() => handleClick(5)}>
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
          </div>
        </div>
        <div className="footer">
          <h3>Criado por: Gustavo Penido - INF3A</h3>
        </div>
      </div>
    </>
  );
}

export default App;

import React from 'react'

export default function Cabecalho(){
    return(
        <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#MyNav">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
            </button>
          </div>
          <div className="collapse navbar-collapse" id="MyNav">
            <ul className="nav navbar-nav navbar-left">
              <li>
                <a href="/">Início</a>
              </li>
              <li>
                <a href="#Contest">O Concurso</a>
              </li>
              <li>
                <a href="#About">Sobre</a>
              </li>
              <li>
                <a href="#Rules">Regras</a>
              </li>
              <li>
                <a 
                  href="#modalCadastro" 
                  data-whatever='@mdo' 
                  data-toggle='modal' 
                  data-target='#modalCadastro' 
                >
                  Inscrição
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
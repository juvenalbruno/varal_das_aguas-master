import React from 'react'
import Logo from './assets/logo.png'

export default function Home() {
    return (
        <div>
            <div className='logo text-center'>
                <h1>
                    <img
                        className="img-responsive"
                        alt="varal das águas"
                        src={Logo}
                    />
                </h1>
            </div>

            <div id='Contest' className='container'>
                <div className='row'>
                    <div className="limit bg-white">
                        <div className='containerCurso'>
                            <h5 className="text-center">
                                O concurso
                            </h5>
                            <p className='text-left'>
                                Concurso de fotografia para todos os técnicos do
                                Inema para exposição de fotos que retratem a temática
                                água (os desafios e as belezas) encontradas em campo)
                                pelos colaboradores. Além de uma apresentação cultural
                                com um artista de rua (poesia, música, cordel) que aborde
                                a temática água.
                        </p>
                        </div>
                        <div className='text-center containerInfo'>
                            <div className='Info text-left'>
                                <h4>EXPOSIÇÃO DE FOTOS</h4>
                                <p>
                                    20 à 24/03/2017 na divisórias da Ouvidoria 
                                    (em frente ao elevador)
                                </p>
                                <h4>APRESENTAÇÃO</h4>
                                <p>
                                    20/03/2017 das 16:30h às 17:30h.
                                </p>
                            </div>
                            <button
                                className='btn btn-default  btnInscricao'
                                data-toggle='modal'
                                data-target='#modalCadastro'
                                data-whatever='@mdo'
                            >
                                FAÇA SUA INSCRIÇÃO
                        </button>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}
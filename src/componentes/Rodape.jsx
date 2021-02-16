import React from 'react'
import Inema from './assets/inema.png'

export default function Rodape() {
    return (
        <div>
            <div
                className='modal fade' 
                id='modalCadastro' 
                tabIndex='-1' 
                role='dialog' 
                aria-labelledby='exampleModalLabel' 
                aria-hidden='true'
            >
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='exampleModalLabel'>CADASTRO</h5>
                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body row'>
                            <form id="upFotos" action="#" method="post">
                                <div className="form-group padd col-lg-6">
                                    <label htmlFor="nome">Nome</label>
                                    <input placeholder="Insira seu nome" className="form-control" type="text" name="nome" id="nome" />
                                </div>
                                <div className="form-group padd col-lg-6">
                                    <label htmlFor="nome_foto">Name da Foto</label>
                                    <input placeholder="Insira o nome da foto" className="form-control" type="text" name="nome_foto" id="nome_foto" />
                                </div>
                                <div className="form-group padd col-lg-6">
                                    <label htmlFor="local_foto">Local da Foto</label>
                                    <input placeholder="Insira o local da foto" className="form-control" type="text" name="local_foto" id="local_foto" />
                                </div>
                                <div className="form-group padd col-lg-6">
                                    <label htmlFor="local_foto">Local da Foto</label>
                                    <input className="form-control" type="date" name="local_foto" id="local_foto" />
                                </div>

                                <div className="form-group col-lg-12">
                                    <label>Anexar Foto</label>
                                    <input type="file" className="form-control-file" name="img_base64" id="img_base64" />
                                </div>


                                <div className="form-group col-lg-12">
                                    <label>Termos</label>
                                    <textarea readOnly className="form-control termo" defaultValue="Termo ...."  id="termos" rows="2"></textarea>
                                </div>

                                <div className="form-group col-lg-12">
                                    <input type="checkbox" name="check" value="yes" />
                                    <label htmlFor="check">Li e concordo com o termo.</label>
                                </div>

                                <div className="form-group btnline col-lg-12 text-right">
                                    <input type="submit" value="ENVIAR" className="btn btn-primary" />
                                </div>
                            </form>
                            <pre id="Out"></pre>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='text-center'>
                <img src={Inema} alt="Logo Inema" />
            </footer>
        </div>
    );
}
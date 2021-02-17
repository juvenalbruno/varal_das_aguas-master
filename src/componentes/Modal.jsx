import React, { useState } from 'react'
import Inema from './assets/inema.png'

import api from '../api';

export default function Footer() {
    const [name, setName] = useState('');
    const [pictureName, setPictureName] = useState('');
    const [placeName, setPlaceName] = useState('');
    const [date, setDate] = useState('');
    const [check, setCheck] = useState(false);
    const [image, setImage] = useState([]);
    const [previewImage, setPreviewImage] = useState([]);


    async function handleSubmit(evento) {
        evento.preventDefault();
        const data = new FormData();

        data.append('nome', name);
        data.append('nome_foto', pictureName);
        data.append('local_foto', placeName);
        data.append('data_foto', date);
        data.append('img_base64', image);
        data.append('termos', check);


        try {
            await api.post('/participante', data);
            alert('Cadastro Realizado com sucesso');
            setName('');
            setPictureName('');
            setPlaceName('');
            setDate('');
            setCheck(false);
            setImage([]);
            setPreviewImage([]);
        } catch (error) {
            console.log(error)
        }
    }

    function handleSelectImage(event){
        if(!event.target.files){
            return;
        }

        const imageActual = Array.from(event.target.files);
        setImage(imageActual);

        const imagePreview = imageActual.map(img => {
            return URL.createObjectURL(img)
        });

        setPreviewImage(imagePreview);
    }
    

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
                            <form onSubmit={handleSubmit}>
                                <div className="form-group padd col-lg-6">
                                    <label htmlFor="nome">Nome</label>
                                    <input placeholder="Insira seu nome" className="form-control" type="text" value={name} name="nome"  onChange={(event) => setName(event.target.value)}/>
                                </div>

                                <div className="form-group padd col-lg-6">
                                    <label htmlFor="nome_foto">Name da Foto</label>
                                    <input placeholder="Insira o nome da foto" className="form-control" type="text" value={pictureName} nome="nome_foto"  onChange={(event) => setPictureName(event.target.value)} />
                                </div>

                                <div className="form-group padd col-lg-6">
                                    <label htmlFor="local_foto">Local da Foto</label>
                                    <input placeholder="Insira o local da foto" className="form-control" type="text" value={placeName} nome="local_foto"  onChange={(event) => setPlaceName(event.target.value)} />
                                </div>

                                <div className="form-group padd col-lg-6">
                                    <label htmlFor="Data">Data</label>
                                    <input className="form-control" type="date" value={date} nome="data_foto"  onChange={(event) => setDate(event.target.value)} />
                                </div>

                                <div className="form-group col-lg-12">
                                    <label>Anexar Foto</label>
                                    <input type="file" className="form-control-file" id="image" onChange={handleSelectImage} />
                                </div>


                                <div className="form-group col-lg-12">
                                    <label>Termos</label>
                                    <textarea readOnly className="form-control termo" defaultValue="Termo ...."  id="termos" rows="2"></textarea>
                                </div>

                                <div className="form-group col-lg-12">
                                    <input type="checkbox" name="ckeck" value={check} onClick={() => check === false ? setCheck(true) : setCheck(false)} />
                                    <label htmlFor="check">Li e concordo com o termo.</label>
                                </div>

                                <div className="form-group btnline col-lg-12 text-right">
                                    <button type="submit" className="btn btn-primary">Enviar</button>
                                </div>
                            </form>
                            <pre id="Out"> {previewImage.map(image => {
                                    return (
                                        <img key={image} src={image} alt="Minha imagem"/>
                                    )
                                })}</pre>
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
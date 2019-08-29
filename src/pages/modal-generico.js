import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function TextoCabecalho(props){
return props.ehsucesso ? <Modal.Title className="texto-header-modal-sucesso" id='contained-modal-title-vcenter'>Sucesso!</Modal.Title>
: <Modal.Title className="texto-header-modal-erro" id='contained-modal-title-vcenter'>Oops... Ocorreu um erro :(</Modal.Title>;
}

function BotaoConfirmar(props){
  return  props.ehsucesso ? <Button variant='success' onClick={props.onHide}> Confirmar </Button>
: <Button variant='danger' onClick={props.onHide}>Confirmar</Button>;
}

function ModalGenerico(props) {
  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter'>
      <Modal.Header closeButton>
        <TextoCabecalho ehsucesso={props.ehsucesso}/>
      </Modal.Header>
      <Modal.Body>
        <div className='div-center'>
          <div className='div-input'>
            <p className="texto-body-modal-sucesso">{props.mensagem}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <BotaoConfirmar ehsucesso={props.ehsucesso} onHide={props.onHide} />
      </Modal.Footer>
    </Modal>
  );
}

export default ModalGenerico;

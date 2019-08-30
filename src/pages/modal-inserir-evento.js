import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { TextField } from '@material-ui/core';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import axios from 'axios';

function ModalInserirEvento(props) {
  const [inputEvento, setInputEvento] = React.useState('');
  const [selectedDate, handleDateChange] = React.useState(new Date());

  async function salvarEvento() {
    const response = await axios.post(`http://localhost:3001/`, [{event: inputEvento, timestamp: selectedDate }]);

    if (response.data.sucesso) {
      setInputEvento('');
      handleDateChange(new Date());
      props.setMensagemModalGenerico(response.data.mensagem);
      props.setExibirModalSucesso(true);
      props.setModalGenerico(true);

      props.onHide();
    } else {
      props.setMensagemModalGenerico(response.data.mensagem);
      props.setExibirModalSucesso(false);
      props.setModalGenerico(true);
      props.onHide();
    }
  };

  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter'>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Digite um evento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='div-center'>
          <div className='div-input'>
            <TextField
              value={inputEvento}
              onChange={e => setInputEvento(e.target.value)}
              label='Evento'
            ></TextField>
          </div>
          <div className='div-input'>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DateTimePicker value={selectedDate} onChange={handleDateChange} />
            </MuiPickersUtilsProvider>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={props.onHide}>
          Cancelar
        </Button>
        <Button variant='success' onClick={salvarEvento}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalInserirEvento;

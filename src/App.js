import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import AutoComplete from './pages/auto-complete';
import ModalInserirEvento from './pages/modal-inserir-evento';
import { Button, ButtonToolbar } from 'react-bootstrap';
import axios from 'axios';
import TimeLineItem from './pages/timeline';
import ModalGenerico from './pages/modal-generico';

function App() {
  const [modalInserirEventoShow, setModalInserirEvento] = React.useState(false);
  const [timeLineData, setTimeLineData] = React.useState({ timeline: [{}] });
  const [modalGenericoShow, setModalGenerico] = React.useState(false);
  const [mensagemModalGenerico, setMensagemModalGenerico] = React.useState("");
  const [exibirModalSucesso, setExibirModalSucesso] = React.useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:3001/listarDadosTimeLine`
      );

      setTimeLineData(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <ModalGenerico ehsucesso={exibirModalSucesso} mensagem={mensagemModalGenerico} show={modalGenericoShow} onHide={() => setModalGenerico(false)} />
      <Row className='justify-content-md-center'>
        <Col md='12'>
          <h1 className='titulo-principal'>Desafio Dito</h1>
        </Col>
      </Row>

      <Row className='row-padding'>
        <Col md='6'>
          <h1 className='titulo-secundario'>Coletor de eventos</h1>
          <Row>
            <Col md={{ span: 6, offset: 1 }}>
              <Row>
                <Col md='12'>
                  <label>Pesquisar por eventos</label>
                </Col>
              </Row>
              <Row>
                <Col md='12'>
                  <AutoComplete></AutoComplete>
                </Col>
              </Row>
            </Col>
            <Col md={{ span: 4 }}>
              <Row>
                <Col md='12'>
                  <label>Inserir novo evento</label>
                </Col>
              </Row>
              <Row>
                <Col md='12'>
                  <ButtonToolbar>
                    <Button variant='success' onClick={() => setModalInserirEvento(true)}>
                      Inserir novo Evento
                    </Button>

                    <ModalInserirEvento show={modalInserirEventoShow} setModalGenerico={setModalGenerico} setExibirModalSucesso={setExibirModalSucesso} setMensagemModalGenerico={setMensagemModalGenerico} onHide={() => setModalInserirEvento(false)} />
                  </ButtonToolbar>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col md='6'>
          <h1 className='titulo-secundario'>Timeline compras</h1>
          <Row>
            <Col md={{ span: 8, offset: 2 }} className='teste'>
              <div className='timeline-container'>
                {timeLineData.timeline.map((data, idx) => (
                  <div className='timeline-container'>
                    <TimeLineItem data={data} />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;

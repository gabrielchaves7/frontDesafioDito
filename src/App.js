import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import AutoComplete from './pages/auto-complete';
import ModalInserirEvento from './pages/modal-inserir-evento';
import { Button, ButtonToolbar } from 'react-bootstrap';
import axios from 'axios';
import ModalGenerico from './pages/modal-generico';
import TimeLineItem from './pages/timeline';

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [timeLineData, setTimeLineData] = React.useState({ events: [{}] });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://storage.googleapis.com/dito-questions/events.json`
        );

        setTimeLineData(response.data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
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
                    <Button variant='success' onClick={() => setModalShow(true)}>
                      Inserir novo Evento
                    </Button>

                    <ModalGenerico show={modalShow} ehsucesso={true} mensagem="Testando Mensagem!" onHide={() => setModalShow(false)} />
                  </ButtonToolbar>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col md='6'>
          <h1 className='titulo-secundario'>Timeline compras</h1>
          <Row>
            <Col md={{ span: 8, offset: 3 }} className='teste'>
              <div className='timeline-container'>
                {timeLineData.events.map((data, idx) => (
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

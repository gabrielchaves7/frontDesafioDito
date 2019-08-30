import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TextField } from '@material-ui/core';
import { Map } from "react-lodash"

function TimeLineItem({ data, produtos }) {
    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <Row>
                    <Col className="txt-on-left" md={{ span: 4 }}>
                        <span >
                            Transaction ID:
                    </span>
                    </Col>
                    <Col className="txt-on-left" md={{ span: 6 }}>
                        <span style={{ background: '#018f69' }}>
                            {data.transaction_id}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="txt-on-left" md={{ span: 4 }}>
                        <span >
                            TimeStamp:
                    </span>
                    </Col>
                    <Col className="txt-on-left" md={{ span: 8 }}>
                        <span ><time>{data.timestamp}</time></span>
                    </Col>

                </Row>
                <Row>
                    <Col className="txt-on-left" md={{ span: 4 }}>
                        <span>
                            Revenue:
                        </span>
                    </Col>
                    <Col className="txt-on-left">
                        <span >{data.revenue}</span>
                    </Col>
                </Row>
                <Row>
                    <Col className="txt-on-left" md={{ span: 4 }}>
                        <span>
                            Store:
                        </span>
                    </Col>
                    <Col className="txt-on-left">
                        <span >{data.store_name}</span>
                    </Col>
                </Row>
                <Row>
                    <Col className="txt-on-left" md={{ span: 4 }}>
                        <span>
                            Produtos:
                        </span>
                    </Col>
                    <Col>
                    <Map collection={produtos} iteratee={i =>
                    <Row>
                        <Col md={{ span: 4 }}>
                            <span >
                                {i.name}
                            </span>
                        </Col>
                        <Col>
                            <span >{i.price}</span>
                        </Col>
                    </Row>} />
                    </Col>
                </Row>
               

                <span className="circle" />
            </div>
        </div>
    );

}

export default TimeLineItem;
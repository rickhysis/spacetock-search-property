import React from 'react';
import { Container, Row, Col } from '@bootstrap-styled/v4';
import Header from '../../components/Layout/Header';
import Maps from '../../components/Maps';
import ListSection from './ListSection';

export default function () {
    return (
        <Container className="p-0" fluid>
            <Header />
            <Row noGutters>
                <Col md="6" sm="12" xs="12">
                    <ListSection />
                </Col>
                <Col md="6" sm="0" xs="0">
                    <Maps />
                </Col>
            </Row>
        </Container>
    )
}
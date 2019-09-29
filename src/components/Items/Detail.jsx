import React from 'react';
import {
    Badge,
    Col,
    Row 
} from '@bootstrap-styled/v4';
import Detail from '../Maps/Detail';

export default function ({ place }) {

    return (
        <Row>
            <Col md="6">
                <h3>{place.name}</h3>
                <p>{place.description}</p>
                <div className="content-facilities">
                    <span>Facilities</span>
                    <div className="content-facilities__detail">
                        {place.facilities.map((value, key) => (
                            <Badge>{value}</Badge>
                        ))}
                    </div>
                </div>
            </Col>
            <Col md="6">
                <h4>Location</h4>
                <span>{place.address.street}</span>
                <Detail place={place} />
            </Col>
        </Row>
    )
}
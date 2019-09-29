import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Section } from './style'


export default function ({ place }) {
    const {address} = place
    
    return (
        <Section>
            <Map center={[address.latitude, address.longitude]} zoom={13}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[address.latitude, address.longitude]}>
                    <Popup>
                        <div>
                            <p>{address.street}</p>
                            <span>{address.city}&nbsp;{address.country}</span>
                        </div>
                    </Popup>
                </Marker>
            </Map>
        </Section>
    )

}

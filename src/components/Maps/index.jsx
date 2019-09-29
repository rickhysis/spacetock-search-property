import React, { useContext, Fragment } from 'react'
import { useHistory } from 'react-router'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { AppContext } from '../../context/AppContext'
import { Section } from './style'
import Skeleton from 'react-loading-skeleton'

const MyPopupMarker = ({ key, history, id, data: { name, description, address } }) => {

    const handleClickMarker = (e) => {
        history.push(`/detail/${id}`)
    }

    return (
        <Marker key={key} position={[address.latitude, address.longitude]}>
            <Popup>
                <div onClick={handleClickMarker}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </Popup>
        </Marker>
    )
}

const MyMarkersList = ({ markers, history }) => {
    const items = markers.map((props, key) => (
        <MyPopupMarker key={key} {...props} history={history} />
    ))
    return <Fragment>{items}</Fragment>
}


export default function () {
    const [state, setState] = useContext(AppContext)
    const history = useHistory()

    return (
        <Section>
            {state.loading ? <Skeleton count="4" /> : ( state.place.length > 0 &&
                <Map center={[state.place[0].data.address.latitude, state.place[0].data.address.longitude]} zoom={13}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MyMarkersList markers={state.place || []} history={history} />
                </Map>
            )
            }
        </Section>
    )

}

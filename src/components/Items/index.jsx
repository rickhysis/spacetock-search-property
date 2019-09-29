import React from 'react';
import {
    Card,
    CardImg,
    CardBlock,
    CardTitle,
    CardText,
    Button,
} from '@bootstrap-styled/v4';
import { useHistory } from 'react-router'
import Skeleton from 'react-loading-skeleton';

export default function ({ key, loading, place, id }) {
    const history = useHistory()

    const handleClickDetail = (e) => {
        history.push(`/detail/${id}`)
    }

    return (
        <Card key={key} block>
            {loading && !place ? (
                <Skeleton count="4" />
            ) : (
                    <>
                        <CardImg top src={place && place.images.primary} alt={place.name} style={{ maxHeight: 250 }} />
                        <CardBlock>
                            <CardTitle>{place.name}</CardTitle>
                            <CardText>{place.description}</CardText>
                            <span style={{
                                display: 'block',
                                fontSize: 10,
                                fontWeight: 'bolder',
                                marginBottom: 5
                            }}>
                                {place && place.address.street}
                            </span>
                            <Button color="inverse" className="float-right" onClick={handleClickDetail}>Detail</Button>
                        </CardBlock>
                    </>
                )
            }
        </Card>
    )
}
import React from 'react';
import { useParams } from 'react-router';
import { Container } from '@bootstrap-styled/v4';
import { useFetch } from '../../utils/request';
import Slider from 'react-styled-carousel';
import Skeleton from 'react-loading-skeleton';
import { Section } from './style';
import Detail from '../../components/Items/Detail';

export default function () {
    let { id } = useParams();
    const [result_place_detail, loading] = useFetch(`https://spacetock-store.firebaseapp.com/api/v1/place/${id}`, { method: 'GET' })
    const { data } = result_place_detail

    return (
        <Container className="p-0" fluid>
            {loading ? <Skeleton count="4" /> :
                (
                    <Section>
                        <img src={data.images.primary} alt={data.name} className="img-primary" />
                        <div className="content">
                            <Detail place={data} />
                            <div className="content-images">
                                <h5>Images</h5>
                                <Slider showDots={false} cardsToShow={3}>
                                    {data.images.others.map((value, key) => (
                                        <img src={value} alt={value} key={key} className="content-images__img" />
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </Section>
                )
            }
        </Container>
    )
}
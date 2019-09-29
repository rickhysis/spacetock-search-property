import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from '@bootstrap-styled/v4';
import { useHistory } from "react-router-dom";
import { AppContext } from '../../context/AppContext';
import Items from '../../components/Items';
import { useFetch } from '../../utils/request';

export default function () {
    const [state, setState] = useContext(AppContext);
    const history = useHistory();
    
    const [result_place, loading_place] = useFetch(`https://spacetock-store.firebaseapp.com/api/v1/place${history.location.search}`, { 
        method: 'GET'
    })

    useEffect(() => {
        setState(state => ({
            ...state,
            loading: loading_place,
            place: result_place
        }))
    }, [result_place, loading_place, setState]);
    
    const handleClickPaginationPrevious = (e) => {
        history.goBack()
    }

    const handleClickPaginationNext = (e) => {
        const append_url = `${state.search ? `&search=${state.search}` : '' }`
        
        history.push({
            pathname: '/',
            search: `?page=${state.place[state.place.length - 1].data.name}&type=${state.type}${append_url}`
        })
    }

    return (
        <React.Fragment>
            <Container className="mt-2">
                <Row>
                    {
                        (state.place || Array(4).fill(0)).map((value, key) => (
                            <Col key={key} md="6" xs="6" className="mt-2">
                                <Items key={key} loading={loading_place} place={value.data} id={value.id} />
                            </Col>
                        ))
                    }

                </Row>
                {
                    !loading_place && (
                        <Pagination>
                            <PaginationItem key={1}>
                                <PaginationLink onClick={handleClickPaginationPrevious}>Previous</PaginationLink>
                            </PaginationItem>
                            <PaginationItem key={2}>
                                <PaginationLink onClick={handleClickPaginationNext}>Next</PaginationLink>
                            </PaginationItem>
                        </Pagination>
                    )
                }
            </Container>
        </React.Fragment>
    )
}
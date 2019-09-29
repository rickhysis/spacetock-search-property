import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import {
    Navbar,
    Container,
    Select,
    Option
} from '@bootstrap-styled/v4';
import { Autocomplete, Filter } from './style';
import { AppContext } from '../../context/AppContext';

export default function () {
    const [state, setState] = useContext(AppContext)
    const history = useHistory()

    const handleChangeSearch = (e) => {
        if (e.key === 'Enter') {
            const value = e.target.value
            setState(state => ({
                ...state,
                search: value
            }))
            history.push({
                pathname: '/',
                search: `?${value ? `search=${value}&` : ''}&type=${state.type}`
            })
        }
    }

    const handleChangeType = (e) => {
        e.preventDefault();
        const value = Number(e.target.value)

        if (e.target) {
            setState(state => ({
                ...state,
                type: value
            }))
            history.push({
                pathname: '/',
                search: `?${state.search ? `search=${state.search}&` : ''}type=${value}`
            })
        }
    }

    return (
        <React.Fragment>

            <Navbar color="inverse" light toggleable="lg">
                <Container>
                    <div className="d-inline-flex justify-content-md-center">
                        <Autocomplete>
                            <input type="text" name="text" placeholder="Search" onKeyDown={handleChangeSearch} />
                        </Autocomplete>
                        <Filter>
                            <Select onChange={handleChangeType}>
                                <Option key="0" value="0">Apartement</Option>
                                <Option key="1" value="1">Office</Option>
                            </Select>
                        </Filter>
                    </div>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}
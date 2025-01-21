import React from 'react';
import { Container, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import {useHistory} from "react-router-dom"
import { COUNTRIES_ROUTE, DISCIPLINES_ROUTE } from '../utils/consts';

const Shop = observer(() => {
    const history = useHistory()
    const containerStyle = {
        position: 'relative',
        backgroundImage: 'url(/images/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '0',  
        height: '100vh' ,
        width: '100vw'
    };

    const imgStyle = {
        position: 'absolute',
        display: 'block',
    };

    const logoStyle = {
        ...imgStyle,
        top: '50px',
        left: '67.5px',
    };

    const frameStyle = {
        ...imgStyle,
        top: '230px',
        left: '66.5px',
    };

    const icoCountriesStyle = {
        ...imgStyle,
        top: '581.5px',
        left: '70px',
        color: "white",
        border: '3px solid white',
        width: '300px',
        borderRadius: '20px',
        backgroundColor:"rgba(255, 255, 255, 0.29)",
        cursor: "pointer",
    };

    const icoDisciplinesStyle = {
        ...imgStyle,
        top: '641.5px',
        left: '70px',
        color: "white",
        border: '3px solid white',
        width: '300px',
        borderRadius: '20px',
        backgroundColor:"rgba(255, 255, 255, 0.29)",
        cursor: "pointer",
    };

    return (
        <Container style={containerStyle}>
            <Row>
                <img src='/images/logo-white.png' alt='paris' style={logoStyle} />
            </Row>
            <Row>
                <img src='/images/frame.png' alt='paris' style={frameStyle} />
            </Row>
            <Row>
                <div style={icoCountriesStyle} onClick={() => history.push(COUNTRIES_ROUTE + '/')}>
                <img src='/images/ico-countries.svg' alt='paris' />
                Countries
                </div>
            </Row>
            <Row>
                <div style={icoDisciplinesStyle} onClick={() => history.push(DISCIPLINES_ROUTE + '/')}>
                <img src='/images/ico-disciplines.svg' alt='paris' />
                Disciplines
                </div>
            </Row>
        </Container>
    );
});

export default Shop;

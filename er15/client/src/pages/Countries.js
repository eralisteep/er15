import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import {useHistory} from "react-router-dom"
import { COUNTRIES_ROUTE, SHOP_ROUTE } from '../utils/consts';

const Countries = observer(() => {
    const history = useHistory()
    const containerStyle = {
        position: 'relative',
        backgroundImage: 'url(/images/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '0px',  
        height: '100vh' ,
        width: '100vw'
    };
    
    const imgStyle = {
        position: 'absolute',
        display: 'block',
    };

    const i = {
        color: "white",
        border: '3px solid white',
        width: '300px',
        height:'60px',
        margin: '10px',
        borderRadius: '10px'
    };

    const prev = {
        ...imgStyle,
        top: '15px',
        left: '10px',
    };

    const logo = {
        ...imgStyle,
        top: '15px',
        left: '150px',
    };

    const flag = {
        width:'40px',
        margin: '6px',
        marginRight: '10px',
        marginLeft: '10px'
    };

    const countries = {
        ...imgStyle,
        top: '150px',
        left: '65px',
        padding: '0px', 
    };

    const handleCountryClick = (country) => {
        history.push(`${COUNTRIES_ROUTE}/${country}`);
    };

    const countriesData = [
        {
            "name": "USA",
            "flag": "images/USA.png"
        },
        {
            "name": "China",
            "flag": "images/China.png"
        },
        {
            "name": "Japan",
            "flag": "images/Japan.png"
        },
        {
            "name": "Germany",
            "flag": "images/Germany.png"
        },
        {
            "name": "Australia",
            "flag": "images/Australia.png"
        },
        {
            "name": "Russia",
            "flag": "images/Russia.png"
        },
        {
            "name": "United Kingdom",
            "flag": "images/UnitedKingdom.png"
        },
        {
            "name": "France",
            "flag": "images/France.png"
        }
    ];

    return (
        <Container style={containerStyle}>
            <Row >
                <img style={prev} src='/images/ico-prev.svg' alt='paris' onClick={() => history.push(SHOP_ROUTE)}></img>
                <img style={logo} src='/images/logo-sm-white.png' alt='paris' />
            </Row>
            <Row >
            </Row>
            <Col style={countries}>
                {countriesData.map((country) => (
                    <div key={country.id} style={i} onClick={() => handleCountryClick(country.id)}>
                        <img style={flag} src={country.flag} alt={country.id} />
                        {country.id}
                    </div>
                ))}
            </Col>
        </Container>
    )
});

export default Countries;

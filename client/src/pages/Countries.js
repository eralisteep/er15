import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { COUNTRIES_ROUTE, SHOP_ROUTE } from '../utils/consts';

const Countries = () => {
    const [countriesData, setCountriesData] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:3000/countries')
            .then(response => {
                setCountriesData(response.data);
            })
            .catch(error => {
                console.error('Error fetching countries data:', error);
            });
    }, []);

    const handleCountryClick = (name) => {
        history.push(`${COUNTRIES_ROUTE}/${name}`);
    };

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
        display: 'block',
    };

    const i = {
        color: "white",
        border: '3px solid white',
        width: '300px',
        height:'60px',
        margin: '10px',
        borderRadius: '20px',
        backgroundColor:"rgba(255, 255, 255, 0.29)",
        cursor: "pointer",
    };

    const prev = {
        ...imgStyle,
        top: '15px',
        left: '10px',
        margin:"30px"
    };

    const logo = {
        ...imgStyle,
        top: '15px',
        left: '150px',
        margin:"15px",
        marginLeft:"71px",
        height:"57px",
    };

    const flag = {
        width:'40px',
        margin: '6px',
        marginRight: '10px',
        marginLeft: '10px'
    };

    const countries = {
        ...imgStyle,
        marginTop: '10px',
        marginLeft: '65px',
        padding: '0px', 
    };

    const h1 = {
        color:"white",
        textAlign:"center",
    }

    return (
        <Container style={containerStyle}>
            <Row>
                <img style={prev} src='/images/ico-prev.svg' alt='paris' onClick={() => history.push(SHOP_ROUTE)} />
                <img style={logo} src='/images/logo-sm-white.png' alt='paris' />
            </Row>
            <h1 style={h1}>Countries</h1>
            <Row>
            </Row>
            <Col style={countries}>
                {countriesData.map((country) => (
                    <div key={country.name} style={i} onClick={() => handleCountryClick(country.name)}>
                        <img style={flag} src={`/images/flags/${country.name.replace(' ', '')}.png`} alt={country.name} />
                        {country.name}
                    </div>
                ))}
            </Col>
        </Container>
    );
};

export default Countries;

import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { fetchCountryMedals } from '../api/countryAPI';
import { Container, Col, Card, Row } from 'react-bootstrap';
import { COUNTRIES_ROUTE } from '../utils/consts';

const CountryPage = () => {
    const [country, setCountry] = useState(null);
    const { name } = useParams();
    const history = useHistory();

    const containerStyle = {
        position: 'relative',
        backgroundImage: 'url(/images/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '0px',  
        height: '100vh' ,
        width: '100vw',
        color:"white"
    };
    
    const imgStyle = {
        display: 'block',
    };

    const i = {
        color: "white",
        border: '3px solid white',
        width: '300px',
        height:'60px',
        borderRadius: '20px',
        backgroundColor:"rgba(255, 255, 255, 0.29)",
        cursor: "pointer",
        padding:'0px',
        marginTop:'10px',
        marginBottom:'10px'
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
        marginLeft:"135px",
    };

    const h1 = {
        color:"white",
        textAlign:"center",
    }
    const table = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        width: '200%',
    };

    const tab = {
        padding:'0px',
        marginLeft:'50px',
        marginTop:'50px'
    }
    
    const tableRow = {
        display: 'flex',
        margin:'0px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    };
    
    const tableChild1 = {
        padding:"0px 5px 20px 5px",
        textAlign: 'center',
        border: "1px solid white",
        borderTop:"0px",
        margin:"0px",
    };

    const g = {
        padding:"20px 20.485px 0px 20.485px",
        textAlign: 'center',
        border: "1px solid white",
        borderBottom:"0px",
    }

    const s = {
        padding:"20px 24.405px 0px 24.405px",
        textAlign: 'center',
        border: "1px solid white",
        borderBottom:"0px",
    }

    const b = {
        padding:"20px 32.335px 0px 32.335px",
        textAlign: 'center',
        border: "1px solid white",
        borderBottom:"0px",
    }

    const t = {
        padding:"20px 22.515px 0px 22.515px",
        textAlign: 'center',
        border: "1px solid white",
        borderBottom:"0px",
    }

    const medal = {
        marginLeft:"10px",
        width:"40px"
    }
    
    useEffect(() => {
        fetchCountryMedals(name)
            .then(data => setCountry(data))
            .catch(error => console.error(error));
    }, [name]);

    const handleMedalClick = (name,medalType) => {
        history.push(COUNTRIES_ROUTE + `/${name}/${medalType}` );
    };

    if (!country) {
        return <div>Loading...</div>;
    }

    return (
        <Container style={containerStyle}>
            <Row >
                <img style={prev} src='/images/ico-prev.svg' alt='paris' onClick={() => history.push(COUNTRIES_ROUTE)} />
                <img style={logo} src='/images/logo-sm-white.png' alt='paris' />
            </Row>
            <Col className='p-0'>
            <h1 style={h1}>{country.name}</h1>
            <img style={flag} src={`/images/flags/${country.name.replace(' ', '')}.png`} alt={country.name} />
            </Col>
            <Col style={table}>
                <Row style={tableRow}>
                    <h5 style={tableChild1}>GOLD</h5>
                    <h5 style={tableChild1}>SILVER</h5>
                    <h5 style={tableChild1}>BRONZE</h5>
                    <h5 style={tableChild1}>TOTAL</h5>
                </Row >
                <Row style={tableRow}>
                    <h5 style={g}>{country.medals.gold}</h5>
                    <h5 style={s}>{country.medals.silver}</h5>
                    <h5 style={b}>{country.medals.bronze}</h5>
                    <h5 style={t}>{country.medals.gold + country.medals.silver + country.medals.bronze}</h5>
                </Row >
            </Col>


            <Col style={tab}>
                <Col md={4}>
                    <Card onClick={() => handleMedalClick(country.name,'gold')} style={i}>
                        <h5><img style={medal} src='/images/medals/gold.png' alt='gold'></img>Medals</h5>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card onClick={() => handleMedalClick(country.name,'silver')}  style={i}>
                        <h5><img style={medal} src='/images/medals/silver.png' alt='silver'></img>Medals</h5>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card onClick={() => handleMedalClick(country.name,'bronze')} style={i}>
                        <h5><img style={medal} src='/images/medals/bronze.png' alt='bronze'></img>Medals</h5>
                    </Card>
                </Col>
            </Col>
        </Container>
    );
};

export default CountryPage;
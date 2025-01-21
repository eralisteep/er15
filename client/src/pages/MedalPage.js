import React, { useEffect, useState } from 'react'; 
import { useHistory, useParams } from 'react-router-dom';
import { fetchCountryMedals } from '../api/countryAPI';
import { Container, Col, Row } from 'react-bootstrap';
import { COUNTRIES_ROUTE } from '../utils/consts';

const MedalPage = () => {
    const [country, setCountry] = useState(null);
    const { name, medalType } = useParams();  // medalType будет содержать gold, silver или bronze

    const history = useHistory();

    useEffect(() => {
        fetchCountryMedals(name)
            .then(data => setCountry(data))
            .catch(error => console.error(error));
    }, [name]);

    if (!country) {
        return <div>Загрузка...</div>;
    }

    const medalColumnTitle = {
        gold: 'GOLD',
        silver: 'SILVER',
        bronze: 'BRONZE',
    };

    const medalKey = medalType.toLowerCase();

    const containerStyle = {
        position: 'relative',
        backgroundImage: 'url(/images/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '0px',  
        height: '100vh' ,
        wid: '100vw',
        color:"white"
    };

    const imgStyle = {
        display: 'block',
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

    const h0 = {
        color:"white",
        textAlign:"center",
        fontWeight:"bolder"
    }
    
    const tab = {
        marginTop: '20px',
        marginLeft: '21.5px',
        width: '90%',
        borderCollapse: 'collapse',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const table = {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    };
    const tableChild1 = {
        textAlign: 'center',
        border: "1px solid white",
        borderTop:"0px",
        margin:"0px",
        paddingBottom:'10px'
    };

    const totalMedalsStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };
    
    const g = {
        textAlign: 'center',
        border: "1px solid white",
        borderBottom:"0px",
        margin:"0px",
        paddingTop:'10px',
        paddingBottom:'10px'
    }

    const s = {
        textAlign: 'center',
        border: "1px solid white",
        borderBottom:"0px",
        margin:"0px",
        paddingTop:'10px',
        paddingBottom:'10px'
    }

    const totalMedals = country.disciplines.reduce((total, discipline) => {
        return total + discipline[medalKey]; // Динамически выбираем тип медали
    }, 0);

    return (
        <Container style={containerStyle}>
            <Row>
                <img style={prev} src='/images/ico-prev.svg' alt='paris' onClick={() => history.push(COUNTRIES_ROUTE + `/${country.name}`)} />
                <img style={logo} src='/images/logo-sm-white.png' alt='paris' />
            </Row>
            <Col className='p-0'>
                <h1 style={h1}>{country.name}</h1>
                <img style={flag} src={`/images/flags/${country.name.replace(' ', '')}.png`} alt={country.name} />
            </Col>
            <Col style={totalMedalsStyle}>
                <h5>{medalColumnTitle[medalType]} MEDALS</h5>
                <h1 style={h0}>{totalMedals}</h1>
            </Col>
            <table style={tab}>
                <tr style={table}>
                    <th><h5 style={tableChild1}>DISCIPLINE</h5></th>
                    <th><h5 style={tableChild1}>MEDALS</h5></th>
                </tr>
                {country.disciplines.map((discipline, index) => (
                    <tr key={index} style={table}>
                        <td><h5 style={g}>{discipline.name}</h5></td>
                        <td><h5 style={s}>{discipline[medalKey]}</h5></td>
                    </tr>
                ))}
            </table>
        </Container>
    );
};

export default MedalPage;

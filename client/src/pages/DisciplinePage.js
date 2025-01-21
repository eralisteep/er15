import React, { useEffect, useState } from 'react'; 
import { useHistory, useParams } from 'react-router-dom';
import { fetchDisciplines } from '../api/countryAPI'; // изменено на fetchDisciplines
import { Container, Col, Row } from 'react-bootstrap'; 
import { DISCIPLINES_ROUTE } from '../utils/consts';

const DisciplinePage = () => {
    const [countries, setCountries] = useState([]); // Массив стран
    const { name } = useParams(); // Получение имени дисциплины из URL
    const history = useHistory();

    const containerStyle = {
        position: 'relative',
        backgroundImage: 'url(/images/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '0px',
        height: '100vh',
        width: '100vw',
        color: "white",
    };

    const imgStyle = {
        display: 'block',
    };

    const prev = {
        ...imgStyle,
        top: '15px',
        left: '10px',
        margin: "30px",
    };

    const logo = {
        ...imgStyle,
        top: '15px',
        left: '150px',
        margin: "15px",
        marginLeft: "71px",
        height: "57px",
    };

    const h1 = {
        color: "white",
        textAlign: "center",
    };

    const table = {
        marginTop: '20px',
        width: '100%',
        borderCollapse: 'collapse',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const tableHeader = {
        padding: "10px 5px",
        textAlign: 'center',
        border: "1px solid white",
        borderTop: "0px",
    };

    const tableRow = {
        justifyContent: 'center',
        alignItems: 'center',
    };

    const tableCell = {
        padding: "15px",
        textAlign: 'center',
        border: "1px solid white",
        borderBottom: "0px",
    };
    const tableCountry = {
        padding: "15px",
        border: "1px solid white",
        borderBottom: "0px",
        textDecoration: "underline",
        fontWeight: "bold",
        cursor: "pointer"
    };


    // Фетчим данные на основе имени дисциплины из URL
    useEffect(() => {
        console.log("Fetching data for discipline:", name);
        if (name) {
            fetchDisciplines(name)  // Используем fetchDisciplines
                .then(data => setCountries(data))  // Данные всех стран с дисциплиной
                .catch(error => console.error("Error fetching disciplines:", error));
        }
    }, [name]);

    const handleMedalClick = (name, countryName) => {
        history.push(DISCIPLINES_ROUTE + `/${name}/${countryName}`);
    };

    if (countries.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <Container style={containerStyle}>
            <Row>
                <img style={prev} src='/images/ico-prev.svg' alt='paris' onClick={() => history.push(DISCIPLINES_ROUTE)} />
                <img style={logo} src='/images/logo-sm-white.png' alt='paris' />
            </Row>
            <Col className='p-0'>
                <h1 style={h1}>{name}</h1>
            </Col>

            {/* Таблица с данными о медалях */}
            <Col style={{ marginTop: '20px' }}>
                <table style={table}>
                    <thead>
                        <tr style={tableRow}>
                            <th style={tableHeader}>Country</th>
                            <th style={tableHeader}>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map((country, index) => (
                            <tr key={index} style={tableRow}>
                                <td style={tableCountry} onClick={() => handleMedalClick(name,country.country)}>{country.country}</td>
                                <td style={tableCell}>
                                    {country.discipline.gold + country.discipline.silver + country.discipline.bronze}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Col>
        </Container>
    );
};

export default DisciplinePage;

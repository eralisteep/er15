import React, { useEffect, useState } from 'react';  
import { useHistory, useParams } from 'react-router-dom';
import { fetchDesciplinesData } from '../api/countryAPI'; // Импортируем функцию
import { Container, Col, Row } from 'react-bootstrap'; 
import { DISCIPLINES_ROUTE } from '../utils/consts';

const DisciplinePage = () => {
    const [disciplineData, setDisciplineData] = useState(null); // Данные о дисциплине
    const { disciplineName, countryName } = useParams(); // Получение параметров из URL
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

    const discipline = {
        ...imgStyle,
        marginLeft: '115px'
    }

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
    // Фетчим данные на основе дисциплины и страны из URL
    useEffect(() => {
        console.log("Fetching data for discipline:", disciplineName, "and country:", countryName);
        if (disciplineName && countryName) {
            fetchDesciplinesData(disciplineName, countryName)  // Используем fetchDesciplinesData
                .then(data => setDisciplineData(data))  // Данные о дисциплине и стране
                .catch(error => console.error("Error fetching disciplines data:", error));
        }
    }, [disciplineName, countryName]);

    if (!disciplineData) {
        return <div>Loading...</div>;
    }

    return (
        <Container style={containerStyle}>
            <Row>
                <img style={prev} src='/images/ico-prev.svg' alt='paris' onClick={() => history.push(DISCIPLINES_ROUTE)} />
                <img style={logo} src='/images/logo-sm-white.png' alt='paris' />
            </Row>
            <Col className='p-0'>
                <h1 style={h1}>{disciplineName}</h1>
                <img style={discipline} src={`/images/disciplines/${disciplineName}.svg`} alt='Athletic'></img>
                <h2 style={h1}>{countryName}</h2>
            </Col>

            {/* Таблица с данными о медалях */}
            <Col style={{ marginTop: '20px' }}>
                <table style={table}>
                    <thead>
                        <tr style={tableRow}>
                            <th style={tableHeader}>GOLD</th>
                            <th style={tableHeader}>SILVER</th>
                            <th style={tableHeader}>BRONZE</th>
                            <th style={tableHeader}>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={tableRow}>
                            <td style={tableCell}>
                                {disciplineData.discipline.gold}
                            </td>
                            <td style={tableCell}>
                                {disciplineData.discipline.silver}
                            </td>
                            <td style={tableCell}>
                                {disciplineData.discipline.bronze}
                            </td>
                            <td style={tableCell}>
                                {disciplineData.discipline.gold + disciplineData.discipline.silver + disciplineData.discipline.bronze}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Col>
        </Container>
    );
};

export default DisciplinePage;

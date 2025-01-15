import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {useParams, useHistory} from 'react-router-dom';
import {fetchCountryMedals} from "../http/countryAPI";

const CountryPage = () => {
    const [country, setCountry] = useState({medals: {gold: [], silver: 28, bronze: 22}});
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        fetchCountryMedals(id).then(data => setCountry(data));
    }, [id]);

    const handleMedalClick = (medalType) => {
        history.push(`/medals/${id}/${medalType}`);
    };

    return (
        <Container className="mt-3">
            <Button onClick={() => history.goBack()}>Назад</Button>
            <h1>{country.name}</h1>
            <Row>
                <Col md={4}>
                    <Card className="d-flex flex-column align-items-center justify-content-around" style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}>
                        <h3>Золото: {country.medals.gold}</h3>
                        <Button variant={"outline-gold"} onClick={() => handleMedalClick('gold')}>Перейти</Button>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="d-flex flex-column align-items-center justify-content-around" style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}>
                        <h3>Серебро: {country.medals.silver}</h3>
                        <Button variant={"outline-silver"} onClick={() => handleMedalClick('silver')}>Перейти</Button>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="d-flex flex-column align-items-center justify-content-around" style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}>
                        <h3>Бронза: {country.medals.bronze}</h3>
                        <Button variant={"outline-bronze"} onClick={() => handleMedalClick('bronze')}>Перейти</Button>
                    </Card>
                </Col>
            </Row>
            <h2>Общее количество медалей: {country.medals.gold + country.medals.silver + country.medals.bronze}</h2>
        </Container>
    );
};

export default CountryPage;
import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row, ListGroup } from "react-bootstrap";

const CountryList = observer(() => {
    const { country} = useContext(Context);

    return (
        <div>
            <h2>Country List</h2>
            <Row className="d-flex">
                <ListGroup>
                    {country.countries.map((country, index) => (
                        <ListGroup.Item key={index}>{country}</ListGroup.Item>
                    ))}
                </ListGroup>
            </Row>
        </div>
    );
});

export default CountryList;
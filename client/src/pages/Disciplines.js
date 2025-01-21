import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { DISCIPLINES_ROUTE, SHOP_ROUTE } from '../utils/consts';

const Disciplines = () => {
    const history = useHistory();

    const handleCountryClick = (name) => {
        history.push(`${DISCIPLINES_ROUTE}/${name}`);
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
            <h1 style={h1}>Disciplines</h1>
            <Row>
            </Row>
            <Col style={countries}>
                <div key='Athletic' style={i} onClick={() => handleCountryClick('Athletics')}>
                    <img style={flag} src='/images/disciplines/Athletics.svg' alt='Athletic' />
                    Athletic
                </div>
                <div key='Swimming' style={i} onClick={() => handleCountryClick('Swimming')}>
                   <img style={flag} src='/images/disciplines/Swimming.svg' alt='Swimming' />
                      Swimming
                </div>
                <div key='Gymnastics' style={i} onClick={() => handleCountryClick('Gymnastics')}>
                    <img style={flag} src='/images/disciplines/Gymnastics.svg' alt='Gymnastics' />
                    Gymnastics
                </div>
                <div key='Basketball' style={i} onClick={() => handleCountryClick('Basketball')}>
                    <img style={flag} src='/images/disciplines/Basketball.svg' alt='Basketball' />
                    Basketball
                </div>
                <div key='Wrestling' style={i} onClick={() => handleCountryClick('Wrestling')}>
                    <img style={flag} src='/images/disciplines/Wrestling.svg' alt='Wrestling' />
                    Wrestling
                </div>
                <div key='Weightlifting' style={i} onClick={() => handleCountryClick('Weightlifting')}>
                    <img style={flag} src='/images/disciplines/Weightlifting.svg' alt='Weightlifting' />
                    Weightlifting
                </div>
                <div key='Diving' style={i} onClick={() => handleCountryClick('Diving')}>
                    <img style={flag} src='/images/disciplines/Diving.svg' alt='Diving' />
                    Diving
                </div>
                <div key='TableTennis' style={i} onClick={() => handleCountryClick('Table Tennis')}>
                    <img style={flag} src='/images/disciplines/TableTennis.svg' alt='TableTennis' />
                    Table Tennis
                </div>
            </Col>
        </Container>
    );
};

export default Disciplines;

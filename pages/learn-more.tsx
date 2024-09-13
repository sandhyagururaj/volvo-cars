import React from 'react';
import { useRouter } from 'next/router';
import { Link, Row, Col, Button, View, Grid , Block, Spinner} from 'vcc-ui';
import carsData from '../public/api/cars.json';

const LearnMore: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const car_data = carsData.filter(data => data.id === id);

    return (
      <div style={{textAlign:'center'}}>
        <Link href="/" arrow="left">
            Go Back
        </Link>
        <h1>Welcome to Volvo Cars</h1>
        {car_data && car_data.length && car_data.length > 0 ? (
            <div>
        <Row align="center">
            <Col>
                <img src={car_data && car_data.length && car_data.length > 0 ? car_data[0].imageUrl : ""} alt="img" style={{ width: '40%', height: 'auto', marginLeft: '30%' }} />
            </Col>
        </Row>
        <div style={{marginTop:'25px'}}></div>
        <Row align='center'>
            <Col size={24}>
                <div><span className='model-type'>Modal Name: </span><span className='model-name'>{car_data[0].modelName}</span></div>
                <div><span className='model-type'>Body Type: </span><span className='model-name'>{car_data[0].bodyType}</span></div>
                <div><span className='model-type'>Modal Type: </span><span className='model-name'>{car_data[0].modelType}</span></div>
            </Col>
        </Row>
        </div>
        ) : (
            <Spinner size={24} />
        )}
      </div>
    );
  };
  
export default LearnMore;
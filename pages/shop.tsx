import React from 'react';
import { useRouter } from 'next/router';
import { Link, Row, Col, Button, View, Spinner } from 'vcc-ui';
import carsData from '../public/api/cars.json';

const Shop: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const car_data = carsData.filter(data => data.id === id);

    return (
      <div>
        <Link href="/" arrow="left">
            Go Back
        </Link>
        <h1>Welcome to Volvo Cars</h1>
        <hr/>
        {car_data && car_data.length && car_data.length > 0 ? (
        <Row align="start">
            <Col size={3}>
                <img src={car_data && car_data.length && car_data.length > 0 ? car_data[0].imageUrl : ""} alt="img" />
            </Col>
            <Col size={7}>
                <div><span className='model-type'>Modal Name: </span><span className='model-name'>{car_data[0].modelName}</span></div>
                <div><span className='model-type'>Body Type: </span><span className='model-name'>{car_data[0].bodyType}</span></div>
                <div><span className='model-type'>Modal Type: </span><span className='model-name'>{car_data[0].modelType}</span></div>
                <View maxWidth="280" style={{marginTop:'25px'}}>
                    <Button>SHOP NOW</Button>
                </View>
            </Col>
        </Row>
        ) : (
            <Spinner size={24} />
        )}
      </div>
    );
};
  
export default Shop;
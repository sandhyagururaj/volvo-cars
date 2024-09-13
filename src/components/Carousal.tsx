import React,{useState, useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { SelectInput} from 'vcc-ui';
import carsData from '../../public/api/cars.json';
export interface T {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}
export const Carousal: React.FC = () => {
  const [value, setValue] = useState('');
  const [carsResult, setCarsResult] = useState<T[]>([]);

  useEffect(() => {
    if(carsData && carsData.length > 0){
      setCarsResult(carsData);
    }
  },[carsData]);

  useEffect(() => {
    if(value){
      const filterData = carsData.filter(res => res.bodyType === value);
      setCarsResult(filterData);
    }
  },[value]);

  function removeDuplicates(array: T[]): T[] {
    const seen = new Set<string>();
    return carsData.filter(car => {
      if (seen.has(car.bodyType)) {
        return false;
      } else {
        seen.add(car.bodyType);
        return true;
      }
    });
  }
  const uniq = removeDuplicates(carsData);

  return (
    <div>
      <h1>Welcome to Volvo Cars</h1>
      <SelectInput
        label={'Select Car'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {uniq && uniq.length && uniq.length > 0 && uniq.map((res,idx) => {
          return (<option value={res.bodyType} key={idx}>{res.bodyType}</option>)
        })}
      </SelectInput>
      <Swiper
      spaceBetween={10}
      slidesPerView={4} // Show 4 images per slide
      navigation // Adds arrows for navigation
      pagination={{ clickable: true }} // Dots for pagination
      modules={[Navigation, Pagination]}
      className="mySwiper"
      breakpoints={{
        500: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      {/* {carsData.map((car, index) => (
          <SwiperSlide key={index}>
            <div style={{ textAlign: 'center' }}>
              <h3>{car.bodyType}</h3>
              <p className="model-name">{car.modelName} <span className="model-type">{car.modelType}</span></p>
              <img src={car.imageUrl} alt={car.bodyType} style={{ width: '100%', height: 'auto' }} />
              <div>
                <a href={"/learn-more?id="+car.id} className="link">{'LEARN >'}</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href={"/shop?id="+car.id} className="link">{'SHOP >'}</a>
              </div>
            </div>
          </SwiperSlide>
        ))} */}
        {carsResult.map((car, index) => (
          <SwiperSlide key={index}>
            <div style={{ textAlign: 'center' }}>
              <h3>{car.bodyType}</h3>
              <p className="model-name">{car.modelName} <span className="model-type">{car.modelType}</span></p>
              <img src={car.imageUrl} alt={car.bodyType} style={{ width: '100%', height: 'auto' }} />
              <div>
                <a href={"/learn-more?id="+car.id} className="link">{'LEARN >'}</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href={"/shop?id="+car.id} className="link">{'SHOP >'}</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
    </div>
  );
};

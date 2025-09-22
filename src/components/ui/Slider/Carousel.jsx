import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reviews from '../../../sections/Reviews/REVIEWS_DATA.json'
import Review from '../../cards/Review/Review'
import './Carousel.scss'

const Carousel = ({ sliderRef, data, renderItem}) => {
  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider
      {...settings}
      ref={sliderRef}
      className="slider"
      style={{ paddingInline: "10px", paddingBlock: "44px" }}
    >
      {data.map((item, index) => (
        <div key={index} className="carousel-slide">
          <div className="carousel__item-container">
            {renderItem(item, index)}
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;

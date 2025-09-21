import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reviews from '../../../sections/Reviews/REVIEWS_DATA.json'
import Review from '../../cards/Review/Review'

const Carousel = ({ sliderRef }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    // responsive: [
    // ],
  }

  const slides = [
    reviews.slice(0, 3).map((item, index) => (
        <Review 
          key={index}
          review={item.review}
          author={item.author}
          date={item.date}
        />
      ))
  ]

  return (
    <Slider
    style={{
      paddingInline: "10px",
      paddingBlock: "44px"
    }}
    {...settings} ref={sliderRef} className="container slider">
      {slides.map((slide, index) => (
        <div key={index} className="img-container">
          {slide}
        </div>
      ))}
    </Slider>


  )
}

export default Carousel
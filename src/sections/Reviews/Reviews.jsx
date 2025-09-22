import Review from '../../components/cards/Review/Review'
import Button from '../../components/ui/Button/Button';
import Carousel from '../../components/ui/Slider/Carousel'
import { useRef } from 'react';
import reviews from './REVIEWS_DATA.json';
import './Reviews.scss'

const Reviews = () => {
  const sliderRef = useRef(null);
  return (
    <section className="reviews">
      <Carousel 
      sliderRef={sliderRef} 
      data={reviews}
      renderItem={(item) => (
        <Review 
          review={item.review}
          author={item.author}
          date={item.date}
        />
      )}
      />
      <Button
        label="lalaalal"
        onClick={() => sliderRef.current.slickNext()}
      />
    </section>
  )
}

export default Reviews
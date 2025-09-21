import Review from '../../components/cards/Review/Review'
import Button from '../../components/ui/Button/Button';
import Carousel from '../../components/ui/Slider/Carousel'
import { useRef } from 'react';
import './Reviews.scss'

const Reviews = () => {
  const sliderRef = useRef(null);
  return (
    <section className="reviews">
      <Carousel sliderRef={sliderRef} />
      <Button
        label="lalaalal"
        onClick={() => sliderRef.current.slickNext()}
      />
    </section>
  )
}

export default Reviews
import Review from '../../components/cards/Review/Review'
import Carousel from '../../components/ui/Slider/Slider'
import reviews from '../Reviews/REVIEWS_DATA.json'

const Reviews = () => {
  return (
    <section className="reviews">
      {/* {reviews.slice(0, 3).map((item, index) => (
        <Review 
          key={index}
          review={item.review}
          author={item.author}
          date={item.date}
        />
      ))} */}
      <Carousel />
    </section>
  )
}

export default Reviews
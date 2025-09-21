import './Review.scss'

const Review = (props) => {
  
  const {
    review,
    author,
    date
  } = props

  return (
    <div className="review review-container">
      <p className="review__semicolon">“</p>
      <div className="review__info">
        <p className="review__info-text">
          {review}
        </p>
        <div className="review__publish">
          <p className="review__publish-author">
            {author}
          </p>
          <p className="review__publish-date">
            {date}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Review
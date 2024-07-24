import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem/MovieItem'

const MoviesSlider = props => {
  const settings = {
    dots: true,
    slidesToScroll: 2,
    slidesToShow: 3,
  }
  const {moviesList} = props

  return (
    <>
      <Slider {...settings}>
        {moviesList.map(eachMovie => (
          <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
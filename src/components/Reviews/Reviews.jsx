import { useState, useEffect } from "react"
import {getMoviesReviews} from "../../services/api"



const Reviews = ({id}) => {
    const [reviews, setReviews] = useState([])

    useEffect(()=> {
        async function fetchItems() {
            try {
                const getReviews = await getMoviesReviews(id)
                setReviews(getReviews.results)
            } catch (error) {
                alert(error)
            }
        }
        fetchItems()
    }, [id])





    return(
        <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p className="">
                <b>Author :</b>{' '}
                <span className="">{review.author}</span>
              </p>
              <p className="">"{review.content}"</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="">
          We don't have any reviews for this movie
        </p>
      )}
    </>
        
    )
}

export default Reviews


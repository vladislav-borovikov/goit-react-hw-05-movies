import { useState, useEffect} from "react"
import {getMoviesCard} from "../../services/api"
import styled from "./movie.module.css"


const Movie = ({movieId}) =>{
const [movie, setMovie] = useState([])



const imgUrl1stpPart = "https://image.tmdb.org/t/p/w500"


    useEffect(()=> {
        async function fetchItems() {
            try {
                
                const movie = await getMoviesCard(movieId)
                setMovie(movie)
          
            } catch (error) {
                alert(error)
            }
        }
        fetchItems()
    }, [movieId])

  

   
    

    return (
        <div className={styled.movieSection}>
             
           
            {movie.backdrop_path === null ?
            <img src="https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo=" alt="Poster" height="400px" /> :
            <img src={`${imgUrl1stpPart}${movie.backdrop_path}`} alt="" />
            }
            
            <span>
            <h2>{movie.title}</h2>
            <p>Rating: {movie.vote_average}</p>
            <h3> Overview </h3>
            <p>{movie.overview}</p>
            <h3> Genres </h3>
            {movie.genres && movie.genres.map(genr => <p key={genr.name}>{genr.name}</p>)}
            </span>
            
        </div>
    )
}

export default Movie;
import {getMoviesTrending} from "../../services/api"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import styled from "./homePage.module.css"



const HomPageList = ({url}) =>{
    const [movies, setMovies] = useState([])

    useEffect(()=> {
        async function fetchItems() {
            try {
                const movies = await getMoviesTrending()
                setMovies(movies)
            } catch (error) {
                alert(error)
            }
        }
        fetchItems()
    }, [])



    return(
        <ul className={styled.list}>
            {movies.map(movie => <li key={movie.id}> <Link className="" to={`/movies/${movie.id}`}>{movie.title}</Link>  </li>)}
        </ul>
    )
}

export default HomPageList
import { useState, useEffect } from "react"
import {getMoviesBySearch} from "../../services/api"
import { Link, useLocation, useHistory} from "react-router-dom"


const MovieSearch = ({url}) => {
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])
    
    const history = useHistory()
    const location = useLocation()
    

    const searchUrl = new URLSearchParams(location.search).get('searchBy')

    

    useEffect(() => {
        if (search === ''){
            setSearch(searchUrl)}
    }, [search, searchUrl])
  
   

    const searchSubmit = (e) => {
        e.preventDefault()
        setSearch(e.target.search.value)
        history.push({
            ...location, search: `searchBy=${e.target.search.value}`
        })
        }

    

    useEffect(()=> {
        async function fetchMovies() {
            try { 
                if (search === ''|| search=== null) {
                    return
            }  const movies = await getMoviesBySearch(search)
            if (movies.length !== 0){
                setMovies(movies)
            } else alert(`Нет фильмв с названием ${search}`);
                
            } catch (error) {
                alert(error)
            }
            
        }
        fetchMovies()
    }, [history, location, search, url])

   


    
    return (
        
        <>
        <div>
            <form type="text" name="filter"  onSubmit={searchSubmit}>
                <input name="search" type="text" />
                <button >Search</button>
            </form>
        </div>
        <ul>
            {location.search !== '' && movies.map(movie => <li key={movie.id}> <Link className="" to={{
        pathname: `/movies/${movie.id}`,
        state: {
          from: location,
        },
      }}>{movie.title}</Link>  </li>)}
        </ul>
        </>
        
    )
}

export default MovieSearch
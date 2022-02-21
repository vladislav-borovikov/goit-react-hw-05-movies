import { useRouteMatch } from "react-router-dom"
import MovieSearch from "../MovieSearch/MovieSearch"

const MoviesPage = () => {

    const {url} = useRouteMatch()

    return (
        <div> 
            <h3>Movies Page</h3>
            <MovieSearch url={url}/>
        </div>
    )
}
export default MoviesPage
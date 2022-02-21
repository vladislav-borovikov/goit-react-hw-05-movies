import { useParams } from "react-router-dom"
import Movie from "../Movie/Movie"
import AditionalInfo from "../AditionalInfo/AditionalInfo"
import { useLocation, useHistory, useRouteMatch } from "react-router-dom"

const MovieDetailsPage = () => {
const {movieId} = useParams()

const location = useLocation()
const history = useHistory();
const match = useRouteMatch()
    
const Back = () => {

    history.push(location?.state?.from ?? '/'); 
  };

    return (
        <>
        <button type="button" onClick={Back} className=""> BACK</button>
        <Movie movieId={movieId} />
        <AditionalInfo match={match}/>
        </>
    )
}
export default MovieDetailsPage
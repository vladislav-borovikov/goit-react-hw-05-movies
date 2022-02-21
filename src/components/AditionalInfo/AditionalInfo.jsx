import { useParams } from "react-router-dom";
import { NavLink , Route, useRouteMatch} from "react-router-dom";
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews.jsx"


const AditionalInfo = ({match}) => {

    const {url} = useRouteMatch()
    const { path} = match
    const {movieId} = useParams()


console.log(movieId)

return (
    <div>
        <h3>Aditional Information</h3>
        <ul>
            <li><NavLink to={{
        pathname: `${url}/cast`}}>Cast</NavLink></li>
            <li><NavLink to={{
        pathname: `${url}/reviews`}}>Reviews</NavLink></li>
        </ul>
        
        <Route path={`${path}/cast`}>
            <Cast id={movieId}/>
        </Route>
        <Route path={`${path}/reviews`}>
            <Reviews id={movieId}/>
        </Route>
        
    </div>
    
)

}

export default AditionalInfo
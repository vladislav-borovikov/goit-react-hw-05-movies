import { useParams } from "react-router-dom";
import { NavLink , Route, useRouteMatch, useLocation} from "react-router-dom";
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews.jsx"


const AditionalInfo = ({match}) => {

    const {url} = useRouteMatch()
    const { path} = match
    const {movieId} = useParams()
    const location = useLocation()



return (
    <div>
        <h3>Aditional Information</h3>
        <ul>
            <li><NavLink to={{
        pathname: `${url}/cast`, state: {...location.state} || {
                  from: location,
                }}}>Cast</NavLink></li>
            <li><NavLink to={{
        pathname: `${url}/reviews`, state: {...location.state} || {
                  from: location,
                }}} >Reviews</NavLink></li>
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
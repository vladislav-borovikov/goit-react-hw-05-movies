import { useState, useEffect } from "react"
import {getMoviesCredits} from "../../services/api"
import img from "../../img/noImg.jpg"



const Cast = ({id}) => {

    const [actors, setActors] = useState([])

    const imgUrl1stpPart = "https://image.tmdb.org/t/p/w500"

    useEffect(()=> {
        async function fetchItems() {
            try {
                const getActors = await getMoviesCredits(id)
                setActors(getActors.cast)
                
            } catch (error) {
                alert(error)
            }
        }
        fetchItems()
    }, [id])

    return(
        <ul>
            {actors.map(actor => 
                <li key={actor.name}>
                    {actor.profile_path === null ?
                    <img src={img} alt="" height="100px" /> :
                    <img src={`${imgUrl1stpPart}${actor.profile_path}`} alt="" height="100px" />
                    }
                    <p>{actor.name}</p>
                </li>
                )}
        </ul>
    )
}

export default Cast
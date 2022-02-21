import {  useRouteMatch } from "react-router-dom"
import HomPageList from '../HomePageList/HomePageList'


const HomePage = () => {

const {url} = useRouteMatch()
  
    return (
        <>
        <HomPageList url={url}/>
        </>
       
    )
}
export default HomePage
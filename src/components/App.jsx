import { lazy, Suspense} from "react";
import { Route, Switch } from "react-router-dom";
// import HomePage from "./views/HomePage";
// import MoviesPage from "./views/MoviesPage";
// import MovieDetailsPage from "./views/MovieDetailsPage"
import Navigation from "./navigation/Navigation";

const HomePage = lazy(()=> import('./views/HomePage.jsx'))
const MoviesPage = lazy(()=> import('./views/MoviesPage.jsx'))
const MovieDetailsPage = lazy(()=> import('./views/MovieDetailsPage.jsx'))



export const App = () => {
  return (
  <>
    <Navigation/>

<Suspense fallback={<h1>LOAD///</h1>}>
<Switch>
    <Route path="/" exact>
        <HomePage/>
    </Route>

    <Route path="/movies" exact>
        <MoviesPage/>
    </Route>

    <Route path="/movies/:movieId"  >
        <MovieDetailsPage/>
    </Route>

    </Switch>

</Suspense>
    
      </>
    
  );
};

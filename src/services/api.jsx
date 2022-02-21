import axios from "axios";

const API_KEY = "56b8cf276f4b735c734fab5f0474134e";
axios.defaults.baseURL = "https://api.themoviedb.org";

export async function getMoviesTrending() {
  const response = await axios.get(`/3/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
}

export async function getMoviesCard(movie_id) {
  const response = await axios.get(`/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US&append_to_response=credits,reviews`
  );
  return response.data;
}

export async function getMoviesReviews(movie_id) {
  const response = await axios.get(`/3/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
}

export async function getMoviesCredits(movie_id) {
  const response = await axios.get(`/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

export async function getMoviesBySearch(search) {
  const response = await axios.get(`/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`);
  return response.data.results;
}

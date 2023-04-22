
export const baseUrl = "https://api.themoviedb.org/3/";
export const API_KEY = "fa753c92f68fa493107166e849048ce5";
export const ComedyMovies=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
export const HorrorMovies= `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
export const TopRated=`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
export const Originals=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
export const Trending=`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
export const ActionMovies=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
export const RomanceMovies=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const Documentaries= `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
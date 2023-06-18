const API_KEY = '8671cdb4e07e3bc429d7ffe1fe16fac5'

const requests= {

   originals :`discover/tv?api_key=${API_KEY}&with_networks=213`,
   actionMovies :`discover/movie?api_key=${API_KEY}&with_genres=28`,
   comedyMovies :`discover/movie?api_key=${API_KEY}&with_genres=35`,
   trending :`trending/all/week?api_key=${API_KEY}&language=en-US`,
   horrorMovies : `discover/movie?api_key=${API_KEY}&with_genres=27`,
   romanceMovies : `discover/movie?api_key=${API_KEY}&with_genres=10749`,
   documentaries : `discover/movie?api_key=${API_KEY}&with_genres=99`

}

export default requests
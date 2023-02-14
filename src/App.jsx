import './App.css'
import withResults from './mocks/with-results.json'
import withoutResults from './mocks/not-results.json'

function App() {
  const movies = withResults.Search
  const hasMovies = movies?.length > 0
  return (
    <div className='page'>
      <h1>Buscador de peliculas</h1>
      <header>
        <form className='form'>
          <input placeholder='Los Vengadores, Harry Potter, Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        {
          hasMovies
          ? (
            <ul>
              {
                movies.map(movie => (
                  <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title} />
                  </li>
                ))
              }
            </ul>
          )
          :
          (
            <p>No se encontraron peliculas para esta busqueda</p>
          )
        }
      </main>
    </div>
  )
}

export default App

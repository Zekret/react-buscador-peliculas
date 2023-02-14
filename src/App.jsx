import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies: mappedMovies } = useMovies()
  

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
        <Movies movies={mappedMovies} />
      </main>
    </div >
  )
}

export default App

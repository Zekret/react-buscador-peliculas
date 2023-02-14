import './App.css'
import withResults from './mocks/with-results.json'
import withoutResults from './mocks/not-results.json'
import { Movies } from './components/Movies'

function App() {
  const movies = withResults.Search
  
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
        <Movies movies={movies} />
      </main>
    </div >
  )
}

export default App

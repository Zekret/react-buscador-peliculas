import './App.css'

function App() {

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
        {/* Peliculas */}
      </main>
    </div>
  )
}

export default App

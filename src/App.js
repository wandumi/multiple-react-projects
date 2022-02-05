import { Routes, Route } from 'react-router-dom'
import AppNavigator from './components/Layout/AppNavigator'
import Birthday from './containers/Birthday/Birthday'
import Pokemon from './containers/Pokemon/Pokemon'
import Home from './containers/Home/Home'
import PokemonDetails from './containers/Pokemon/PokemonDetails'

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <AppNavigator />
        <Routes>
          <Route path='/' exact element={<Home />}>
            Home
          </Route>
          <Route path='/pokemon' exact element={<Pokemon />}>
            Pokemon
          </Route>
          <Route path='/pokemon/:id' exact element={<PokemonDetails />}></Route>
          <Route path='/birthday' exact element={<Birthday />}>
            Birthday
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App

import { useContext } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { AuthContext } from './Context/AuthContext/AuthContext'

import { Home, Watch, Login, Register } from './pages/index'

function App() {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <Switch>
        <Route path='/netflix-clone' exact>
          {user ? <Home /> : <Redirect to='/register' />}
        </Route>
        <Route path='/register'>
          {!user ? <Register /> : <Redirect to='/netflix-clone' />}
        </Route>
        <Route path='/login'>
          {!user ? <Login /> : <Redirect to='/netflix-clone' />}
        </Route>
        {user && (
          <>
            <Route path='/movies'>
              <Home type='movie' />
            </Route>
            <Route path='/series'>
              <Home type='series' />
            </Route>
            <Route path='/watch'>
              <Watch />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  )
}

export default App

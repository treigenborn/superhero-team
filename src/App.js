import React from 'react';
import HomeContainer from './containers/HomeContainer';
import { Login, Landing } from './components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute.js';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [isAuth, setIsAuth] = useLocalStorage('token', '');

  return (
    <Router>
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route exact path='/login'>
        <Login login={(resp) => setIsAuth(resp)} isAuth={isAuth} />
      </Route>

      <ProtectedRoute
        exact
        path='/home'
        component={HomeContainer}
        isAuth={isAuth !== ''}
      />
    </Router>
  );
}

export default App;

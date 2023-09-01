import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import History from './pages/History';
import Signup from './pages/Signup';
import Configuration from './pages/Configuration';

function App() {
  const  {user} = useAuthContext()
  
  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
             <Route
              path="/history"
              element={user ? <History /> : <Navigate to="/login" />}
            />
              <Route
              path="/configuration"
              element={user && user.email === 'valentin@yahoo.com' ? <Configuration /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup />: <Navigate to="/"/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

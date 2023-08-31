import { Route, Routes } from 'react-router-dom';
import './App.scss'
import routes from './router/routes';
import { Shortcuts } from './components/Shortcuts/Shortcuts';

function App() {

  return (
    <>
      <Shortcuts>
        <Routes>
          {routes.map((route) =>
            <Route
              key={route.path}
              path={route.path}
              element={
                <route.component />
              }
            />)}
        </Routes>
      </Shortcuts>

    </>
  )
}

export default App
{/* <div>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div> */}
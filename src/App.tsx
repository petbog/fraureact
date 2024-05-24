import { Route, Routes } from 'react-router';
import './style/App.scss';
import { Path } from './Paths/Paths';
import HomePage from './Pages/HomePage/HomePage';
import Menu from './Pages/Menu/Menu';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={Path.Home} element={<HomePage />} />
        <Route path={Path.Menu} element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router';
import './style/App.scss';
import { Path } from './Paths/Paths';
import HomePage from './Pages/HomePage/HomePage';
import Menu from './Pages/Menu/Menu';
import Bar from './Pages/Bar/Bar';
import Wine from './Pages/Wine/Wine';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={Path.Home} element={<HomePage />} />
        <Route path={Path.Menu} element={<Menu />} />
        <Route path={Path.Bar} element={<Bar/>} />
        <Route path={Path.Wine} element={<Wine/>} />
      </Routes>
    </div>
  );
}

export default App;

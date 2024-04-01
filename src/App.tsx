import { Route, Routes } from 'react-router';
import './style/App.scss';
import { Path } from './Paths/Paths';
import HomePage from './Pages/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={Path.Home} element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

import './style/global.css';
import { Home } from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import { TaskDetails } from './components/taskDetails/TaskDetails';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/projectDetails/:id' element={<TaskDetails />} /> */}
        {/* <Route path='/login' element={<LogIn />} /> */}

      </Routes>

      {/* <Home /> */}
    </div>
  );
}

export default App;

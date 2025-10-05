import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />  {/* lowercase path */}
          <Route path="/update" element={<Update />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

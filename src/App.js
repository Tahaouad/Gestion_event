import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Acceuil from './components/Acceuil';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes >
          <Route index path='/' element={<Acceuil />}/>
          <Route index path='/details' element={<Details />}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;

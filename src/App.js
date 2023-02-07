
import './App.css';
import Herosection from './components/Herosection';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
function App() {
  return (
    
<BrowserRouter>
<Routes>

<Route path='/' element={<Navbar title="TextTwister" />}>
<Route index element={<Herosection/>}/>
<Route path='about' element={<About/>}/>
</Route>
</Routes>
</BrowserRouter>

  );
}

export default App;

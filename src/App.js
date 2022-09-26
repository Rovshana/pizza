import { createTheme, ThemeProvider } from '@mui/material';
import { useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import { Navbar } from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Box from '@mui/material/Box';

function App() {
  const [mode, setMode] = useState('dark')
  const theme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={theme}>

    <Box bgcolor={"background.default"} color={"text.primary"}>
    
<Navbar mode={mode} setMode={setMode}/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/menu' element={<Menu/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='*' element={<Error/>} />

  
</Routes>
<Footer/>
   
    </Box>
    </ThemeProvider>
    
  );
}

export default App;

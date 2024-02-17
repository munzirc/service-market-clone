import './App.css';
import { Box } from '@mui/material';
import Navbar from '../src/components/navbar/Navbar'
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataProvider from './context/DataProvider';
import ServicePage from './pages/home/ServicePage';
import { local_mover,cleaning, maintenance} from './constants/ServicePages.js';
import { Popular, Moving, Cleaning, Maintenance, Salon, AcServices, Health, PestControl, Gardening, Nannies, PetServices, Painting, Other} from "../src/constants/Constants.js"


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar/>
        <Box style={{marginTop: 70}}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/local-movers' element={<ServicePage servicedata={Moving} pagedetails={local_mover}/>}/>
            <Route path='/cleaners' element={<ServicePage servicedata={Cleaning} pagedetails={cleaning}/>}/>
            <Route path='/maintenance' element={<ServicePage servicedata={Maintenance} pagedetails={maintenance}/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

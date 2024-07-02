import React from 'react';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, Routes } from 'react-router-dom';
import NewsFeed from './pages/NewsFeed'; 
import CurrencyFeed from './pages/CurrencyFeed'; 
import RootLayout from './Components/RootLayout';
import CustomNavbar from './Components/Navbar/CustomNavbar';
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
    <BrowserRouter>
     <CustomNavbar/>
     <Routes>
      <Route path='/' element={<NewsFeed/>}/>
      <Route path='/Gold&currencies' element={<CurrencyFeed/>} />
      <Route path='*' element={<NotFound/>}/>
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

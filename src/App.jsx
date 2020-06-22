import React from 'react'
import './bootstrap.min.css'
import './App.css'
import { BrowserRouter,Route } from 'react-router-dom';
import CoinDetailPage from './pages/CoinDetailPage'
import CoinSummaryPage from './pages/CoinSummaryPage'
import Header from './components/Header';
import { WatchListContextProvider } from './context/watchListContext';




const App = () => {
    return (
        <div className="container">
            <WatchListContextProvider>
            <BrowserRouter>
        <Header/>
         <Route exact path='/'>
         <CoinSummaryPage/>
             </Route>          
           
        </BrowserRouter>
        </WatchListContextProvider>
        </div>
        
        
    )
}

export default App

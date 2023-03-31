import React from 'react';
import { RestaurantsContextProvider } from './context/RestaurantsContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import UpdateRestaurant from './routes/UpdateRestaurant';
import RestaurantDetails from './routes/RestaurantDetails';

const App = () => {
    return (
        <RestaurantsContextProvider>
            <div className="container">
                <Router>
                    <Routes>
                        <Route 
                            exact 
                            path='/' 
                            element={<Home />} 
                        />
                        <Route 
                            exact 
                            path='/restaurants/:id/update' 
                            element={<UpdateRestaurant />} 
                        />
                        <Route 
                            exact 
                            path='/restaurants/:id' 
                            element={<RestaurantDetails />} 
                        />
                    </Routes>
                </Router>
            </div>
        </RestaurantsContextProvider>
    );
}

export default App;
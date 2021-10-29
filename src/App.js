import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AddDeal from './Pages/AddDeals/AddDeal';
import Booking from './Pages/Booking/Booking';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/LoginGoogle/Login.js';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageBooking from './Pages/ManageAllBooking/ManageBooking';
import MyBooking from './Pages/MyBooking/MyBooking';
import Footer from './Sheared/Footer/Footer';
import Header from './Sheared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/booking/:dealId'>
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path='/mybooking'>
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path='/managebooking'>
            <ManageBooking></ManageBooking>
            </PrivateRoute>
            <PrivateRoute path='/adddeal'>
              <AddDeal></AddDeal>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

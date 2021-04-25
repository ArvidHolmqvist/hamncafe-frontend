import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BookingListComponent from './components/BookingListComponent'
import HomeComponent from './components/HomeComponent'
import Header from './components/Header'
import './BookingApp.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'

function BookingApp() {
    return(
        <div className='BookingApp'>
            <Header></Header>
            <Router>
            <>  
                <Switch>
                        <Route path="/bookings" component={BookingListComponent}/>
                        <Route path="/" component={HomeComponent}/>
                </Switch>   
            </>
            </Router>
        </div>
    )
}

export default BookingApp;
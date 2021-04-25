import axios from 'axios';

class BookingDataService {
    /**
     * 
     * @returns A JSON array of booking objects
     */
    retrieveAllBookings() {
        console.log("hello")
        return axios.get(`https://api-hamncafe-test.herokuapp.com/bookings`);
    }

    /**
     * valid id's are positive non zero integers
     * @returns A JSON object of a Booking
     */
    retrieveBooking(id) {
        return axios.get(`https://api-hamncafe-test.herokuapp.com/bookings/${id}`);
    }

    updateBooking(id,booking) {
        return axios.put(`https://api-hamncafe-test.herokuapp.com/bookings/${id}`, booking);
    }

    createBooking(booking) {
        return axios.post(`https://api-hamncafe-test.herokuapp.com/bookings`, booking);
    }

    deleteBooking(id) {
        return axios.delete(`https://api-hamncafe-test.herokuapp.com/bookings/${id}`);
    }


}

export default new BookingDataService();
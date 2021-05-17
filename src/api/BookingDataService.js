import axios from 'axios';

/**
 * Frontend service which handles the communication with the backend
 */
class BookingDataService {
    /**
     * Fetches all bookings
     * 
     * @returns JSON array of Booking objects
     */
    retrieveAllBookings() {
        return axios.get(`https://api-hamncafe-test.herokuapp.com/bookings`);
    }

    /**
     * @returns A JSON array of booking objects
     */
     retrieveAllAvailableTimes(date, time, guests) {
        return axios.get(`https://api-hamncafe-test.herokuapp.com/availableTimes`, {params: {
            'date': date,
            'time': time,
            'guests': guests}
        });
    }

    /**
     * @returns A JSON array of booking objects
     */
     retrieveAllAvailableDays(guests) {
        return axios.get(`https://api-hamncafe-test.herokuapp.com/availableDays`, {params: {
            'guests': guests}
        });
    }

    /**
     * Fetches specific booking
     * 
     * @param {Number} id
     * @returns JSON object of a Booking
     */
    retrieveBooking(id) {
        return axios.get(`https://api-hamncafe-test.herokuapp.com/bookings/${id}`);
    }

    /**
     * @todo update booking parameters
     * Updates the specified booking object
     * 
     * @param {Number} id 
     * @param booking JSON object of a booking containing guest name (String), booking date (Date), numberOfPeople (int), 
     * phone number (String), booking time (Time), and possible additional info
     */
    updateBooking(id,booking) {
        return axios.put(`https://api-hamncafe-test.herokuapp.com/bookings/${id}`, booking);
    }

    /**
     * Creates and adds new booking object
     * 
     * Value of id should always be 0, as it will be assigned by the backend
     * @param booking JSON object of a booking containing guest name (String), booking date (Date), numberOfPeople (int), 
     * phone number (String), booking time (Time), and possible additional info
     */
    createBooking(booking) {
        return axios.post(`https://api-hamncafe-test.herokuapp.com/bookings`, booking);
    }

    /**
     * Deletes the specified booking
     * 
     * @param {Number} id
     */
    deleteBooking(id) {
        return axios.delete(`https://api-hamncafe-test.herokuapp.com/bookings/id/${id}`);
    }

    getBookingsByDate(date){
        return axios.get(`https://api-hamncafe-test.herokuapp.com/bookings/date/${date}`);
    }

    getBookingsByDateAndTime(date,time){
        return axios.get(`https://api-hamncafe-test.herokuapp.com/bookings/date/${date}/${time}`);
    }

    getTimeSlotsByDate(date){
        return axios.get(`https://api-hamncafe-test.herokuapp.com/timeslots/date/${date}`);
    }

    getNumberOfBookedTablesByDateAndTime(date,time){
        return axios.get(`https://api-hamncafe-test.herokuapp.com/bookings/count/bookedtables/${date}/${time}`);
    }

    getNumberOfGuestsByDateAndTime(date,time){
        return axios.get(`https://api-hamncafe-test.herokuapp.com/bookings/count/guests/${date}/${time}`);
    }

    checkPassword(password){
        return axios.get('https://api-hamncafe-test.herokuapp.com/checkpassword', {params: {'password': password}})
    }

    checkAuthorizeUser(jwt){
        return axios.get('https://api-hamncafe-test.herokuapp.com/checkauthorizeuser', {params: {'jwt': jwt}})
    }

}

export default new BookingDataService();
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
     retrieveAllAvailableTimes() {
        return axios.get(`https://api-hamncafe-test.herokuapp.com/availableTimes`);
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
     * @param booking JSON object of a booking containing id, BookingDate, numberOfPeople, email 
     */
    updateBooking(id,booking) {
        return axios.put(`https://api-hamncafe-test.herokuapp.com/bookings/${id}`, booking);
    }

    /**
     * Creates and adds new booking object
     * 
     * Value of id should always be 0, as it will be assigned by the backend
     * @param booking JSON object of a booking containing id, BookingDate, numberOfPeople, email
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
        return axios.delete(`https://api-hamncafe-test.herokuapp.com/bookings/${id}`);
    }


}

export default new BookingDataService();
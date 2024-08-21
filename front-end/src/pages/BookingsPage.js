import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import BookingSummary from '../components/BookingSummary';
import { getAuth } from 'firebase/auth';
import app from '../firebase';

const BookingPage = () => {
    const [bookingDetails, setBookingDetail] = useState({
        day: '',
        danceLevel: '',
        tickets: '',
        paymentMethod: '',
        totalAmount: 10,
    });

    const [bookingSubmitted, setBookingSubmitted] = useState(false);

    const isLoggedIn = () => {
        const auth = getAuth(app);
        return auth.currentUser !== null;
    };

    return (
        <div className='ml-6 mt-12 flex items-center'>
            <BookingForm 
                setBookingDetail={setBookingDetail}
                setBookingSubmitted={setBookingSubmitted}
                isLoggedIn={isLoggedIn}
            />
            {bookingSubmitted && (
                <BookingSummary 
                    bookingDetails={bookingDetails} 
                    setBookingSubmitted={setBookingSubmitted} 
                    popupTitle="Confirm Your Order!"
                    isLoggedIn={isLoggedIn}
                />
            )}
        </div>
    );
};

export default BookingPage;

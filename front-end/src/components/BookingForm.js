import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase";

const classes = {
    Monday: ['Lundika', 'Beginner', 'Balle'],
    Tuesday: ['Intermediate'],
    Wednesday: ['Salsa'],
    Thursday: ['Beginner'],
    Friday: ['All-Level Dance Party'],
    Saturday: ['Kids'],
    Sunday: ['Dancehall']
};

const BookingForm = ({ setBookingDetail, setBookingSubmitted, isLoggedIn }) => {
    const [day, setDay] = useState('');
    const [danceLevel, setDanceLevel] = useState('');
    const [tickets, setTickets] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => { 
        setBookingDetail({
            day,
            danceLevel,
            tickets,
            paymentMethod,
            totalAmount: tickets * 10,
        });
    }, [day, danceLevel, tickets, paymentMethod]);

    const handleDayChange = (e) => {
        setDay(e.target.value);
        setDanceLevel('');
        setErrors(prev => ({...prev, day: ''}));
    };

    const handleDanceLevelChange = (e) => {
        setDanceLevel(e.target.value);
        setErrors(prev => ({...prev, danceLevel: ''}));
    };

    const handleTicketsChange = (e) => {
        setTickets(e.target.value);
        setErrors(prev => ({ ...prev, tickets: '' }));
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
        setErrors(prev => ({...prev, paymentMethod: ''}));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!day) newErrors.day = 'Day is required';
        if (!danceLevel) newErrors.danceLevel = 'Please select a class';
        if (!tickets || tickets < 1) newErrors.tickets = 'At least one ticket is required';
        if (!paymentMethod) newErrors.paymentMethod = 'Please select payment method';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!isLoggedIn()) {
            alert('Sign in to continue with your booking');
            return;
        }

        if (validateForm()) {
            setBookingSubmitted(true);
        }
    };

    return (
        <form className="space-y-4 pt-12 bg-gray-40 w-1/2 px-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">Day of the Week</label>
                <select 
                    value={day}
                    onChange={handleDayChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-400 focus:border-orange-400 sm:text-sm"
                >
                    <option value="">Select a day</option>
                    {Object.keys(classes).map(day => (
                        <option key={day} value={day}>{day}</option>
                    ))}
                </select>
                {errors.day && <p className="text-red-500 text-sm">{errors.day}</p>}
            </div>

            {day && (
                <div>
                    <label className="block text-sm font-medium text-gray-700">Class</label>
                    <select 
                        value={danceLevel}
                        onChange={handleDanceLevelChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-400 focus:border-orange-400 sm:text-sm"
                    >
                        <option value="">Select a class</option>
                        {classes[day].map(level => (
                            <option key={level} value={level}>{level}</option>
                        ))}
                    </select>
                    {errors.danceLevel && <p className="text-red-500 text-sm">{errors.danceLevel}</p>}
                </div>
            )}

            <div>
                <label className="block text-sm font-medium text-gray-700">Number of Tickets</label>
                <input 
                    type="number"
                    value={tickets}
                    onChange={handleTicketsChange}
                    min="1"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-400 focus:border-orange-400 sm:text-sm"
                />
                {errors.tickets && <p className="text-red-500 text-sm">{errors.tickets}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                <select 
                    value={paymentMethod}
                    onChange={handlePaymentMethodChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-400 focus:border-orange-400 sm:text-sm"
                >
                    <option value="">Select a payment method</option>
                    <option value="M-Pesa">M-Pesa</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                </select>
                {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod}</p>}
            </div>

            <button 
                type="button" 
                onClick={handleSubmit}
                className="mt-4 w-48 bg-black text-white p-2 rounded-md shadow-sm justify-centre hover:bg-orange-400"
            >
                Book
            </button>
        </form>
    );
};

export default BookingForm;

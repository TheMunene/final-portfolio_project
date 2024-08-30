import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import logo from "../assets/logo.png"; // Ensure the path to your logo is correct
import { getAuth } from "firebase/auth";
import { generateInvoiceId } from "../Utilities/userid";
import app from "../firebase";

const BookingSummary = ({ bookingDetails, setBookingSubmitted, popupTitle, isLoggedIn }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [invoiceId, setInvoiceId] = useState('');
    const [userId, setUserId] = useState('');

    useEffect(() => {
        const handleUserAndGenerateInvoiceId = (callback) => {
            const auth = getAuth(app);
            const user = auth.currentUser;

            if (user) {
                const userId = user.uid;
                const invoiceId = generateInvoiceId(userId);
                callback(invoiceId, userId);
            } else {
                console.error("User is not signed in");
                callback(null, null);
            }
        };

        handleUserAndGenerateInvoiceId((generatedInvoiceId, userId) => {
            if (generatedInvoiceId && userId) {
                setInvoiceId(generatedInvoiceId);
                setUserId(userId);
            }
        });
    }, []);

    const handleCancel = () => {
        setBookingSubmitted(false);
    };

    const handleCheckout = () => {
        if (!isLoggedIn()) {
            alert('Sign in to proceed with checkout');
            return;
        }
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleDownloadInvoice = () => {
        const doc = new jsPDF();

        // Add the logo at the top
        doc.addImage(logo, 'PNG', 20, 20, 30, 20, "centre"); // Adjust position and size accordingly

        doc.setFontSize(22);
        doc.text("Invoice", 105, 60, null, null, "center");

        // Add User ID and Invoice ID
        doc.setFontSize(14);
        doc.text(`User ID: ${userId}`, 20, 80);
        doc.text(`Invoice ID: ${invoiceId}`, 20, 90);

        // Draw a line under the header
        doc.line(20, 95, 190, 95);

        // Add Booking Details in a table-like format
        const details = [
            ["Day", bookingDetails.day],
            ["Dance Level", bookingDetails.danceLevel],
            ["Number of Tickets", bookingDetails.tickets.toString()],
            ["Billed Amount", `$${bookingDetails.totalAmount}`],
            ["Payment Method", bookingDetails.paymentMethod]
        ];

        doc.setFontSize(16);
        details.forEach((detail, index) => {
            doc.text(detail[0], 20, 110 + (index * 10));
            doc.text(detail[1], 100, 110 + (index * 10));
        });

        // Add thank you message
        doc.setFontSize(12);
        doc.text("Thank you for dancing with us!", 105, 160, null, null, "center");

        // Save the PDF
        doc.save("Invoice.pdf");
    };

    return (
        <div className="mt-6 p-4 ml-8 border border-slate-300">
            <h2 className="text-3xl font-medium text-gray-900">Booking Summary</h2>
            <p className="text-m font-medium text-gray-700">Day: {bookingDetails.day}</p>
            <p className="text-m font-medium text-gray-700">Dance Level: {bookingDetails.danceLevel}</p>
            <p className="text-m font-medium text-gray-700">Number of Tickets: {bookingDetails.tickets}</p>
            <p className="text-m font-medium text-gray-700">Billed Amount: ${bookingDetails.totalAmount}</p>
            <p className="text-m font-medium text-gray-700">Payment Method: {bookingDetails.paymentMethod}</p>

            <div className="mt-4 flex space-x-4">
                <button
                    onClick={handleCancel}
                    className="mt-4 w-48 justify-centre bg-red-500 text-white p-2 rounded-md shadow-sm hover:bg-red-700"
                >
                    Cancel
                </button>
                <button
                    onClick={handleCheckout}
                    className="bg-green-500 text-white p-2 rounded-md shadow-sm mt-4 w-48 hover:bg-green-700"
                >
                    Checkout
                </button>
            </div>

            {showPopup && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-md shadow-lg w-3/4 md:w-1/2">
                        <h2 className="text-3xl font-medium text-gray-900 mb-4">{popupTitle || "Booking Summary"}</h2>
                        <p className="text-sm font-medium text-gray-700">Day: {bookingDetails.day}</p>
                        <p className="text-sm font-medium text-gray-700">Dance Level: {bookingDetails.danceLevel}</p>
                        <p className="text-sm font-medium text-gray-700">Number of Tickets: {bookingDetails.tickets}</p>
                        <p className="text-sm font-medium text-gray-700">Billed Amount: ${bookingDetails.totalAmount}</p>
                        <p className="text-sm font-medium text-gray-700">Payment Method: {bookingDetails.paymentMethod}</p>
                        <div className="mt-4 flex space-x-4">
                            <button
                                onClick={handleDownloadInvoice}
                                className="bg-green-500 w-48 text-white p-2 rounded-md shadow-sm hover:bg-blue-700"
                            >
                                Download Invoice
                            </button>
                            <button
                                onClick={handleClosePopup}
                                className="bg-red-500 w-48 text-white p-2 rounded-md shadow-sm hover:bg-red-700"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingSummary;

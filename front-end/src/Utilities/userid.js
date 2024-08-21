import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase";

const auth = getAuth(app);

// Function to generate invoice ID
export const generateInvoiceId = (userId) => {
    return `${userId}-${Date.now()}`;
};

// Function to handle user authentication and generate invoice ID
export const handleUserAndGenerateInvoiceId = (callback) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const userId = user.uid;
            console.log("User ID:", userId);
            const invoiceId = generateInvoiceId(userId);
            callback(invoiceId, userId); // Execute callback with invoiceId and userId
        } else {
            console.log("User is not signed in");
            callback(null, null); // User not signed in, return nulls
        }
    });
};

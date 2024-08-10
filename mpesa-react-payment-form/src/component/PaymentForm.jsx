import { useState } from 'react'
import axios from 'axios'
const PayementForm = () => {
    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(import.meta.env.VITE_BACKEND_URL, {
                phone,
                amount
            });

            setMessage(response.data.CustomerMessage || 'Payment initiated successfully!');
            // console.log(response);
        } catch (error) {
            setMessage('Error: ' + (error.response?.data?.error || error.message));
        }
    };

    return (
        <div className='p-6 max-w-md mx-auto shadow-lg rounded-md mt-5'>
            <h1 className='text-2xl text-center font-bold mb-6'>Mpesa Payment</h1>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label className="block text-gray-600 font-medium mb-2">Phone Number:</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter phone number"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-600 font-medium mb-2">Amount:</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
                >
                    Pay Now
                </button>
                {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
            </form>
        </div>
    )
}


export default PayementForm;
Here’s your updated README template with the backend repository link included:

---

# **Daraja M-Pesa Payment Integration Template**

This repository is a full-stack template designed to simplify the process of integrating M-Pesa Express (STK Push) payments using the Daraja API. It includes a Node.js backend with Express and a React.js frontend, styled with Tailwind CSS.

## **Table of Contents**
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [License](#license)

## **Features**
- **Node.js Backend**: Handles API requests to the M-Pesa Daraja API. The backend code can be found at [mpesa-express-backend](https://github.com/felixkamau/mpesa-express-backend.git).
- **React.js Frontend**: Provides a responsive and modern UI for initiating payments.
- **Tailwind CSS**: Ensures the frontend is clean and mobile-responsive.
- **CORS Support**: Configured to handle cross-origin requests securely.
- **Error Handling**: Provides meaningful feedback to the user in case of errors.

## **Prerequisites**
Before you begin, ensure you have the following installed on your system:
- Node.js (v20.15.0 or later)
- npm (v10.7.0 or later)
- A Daraja API account with necessary credentials

## **Installation**

1. **Clone the repository**:
    ```bash
    git clone https://github.com/felixkamau/mpesa-react-payment-form.git
    cd mpesa-react-payment-form
    ```

2. **Install backend dependencies**:
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies**:
    ```bash
    cd ../frontend
    npm install
    ```

## **Environment Variables**
Create a `.env` file in the `backend` directory and configure the following variables:

```plaintext
BASE_URL=https://sandbox.safaricom.co.ke
CONSUMER_KEY=your_consumer_key
CONSUMER_SECRET=your_consumer_secret
SHORT_CODE=your_short_code
PASSKEY=your_passkey
CALLBACK_URL=https://yourdomain.com/callback
```

- **BASE_URL**: The base URL for the Daraja API (use the sandbox or production URL as required).
- **CONSUMER_KEY**: Your Daraja API consumer key.
- **CONSUMER_SECRET**: Your Daraja API consumer secret.
- **SHORT_CODE**: The short code for your M-Pesa account.
- **PASSKEY**: The passkey provided by Daraja for your M-Pesa account.
- **CALLBACK_URL**: The URL where M-Pesa will send payment notifications.

## **Running the Application**

1. **Start the backend server**:
    ```bash
    cd backend
    node server.js
    ```

2. **Start the frontend development server**:
    ```bash
    cd ../frontend
    npm run dev
    ```

3. **Access the application**:
   Open your browser and navigate to `http://localhost:5173`.

## **Usage**

- **Initiate a Payment**: Enter the required details (phone number, amount) in the form provided on the frontend and submit.
- **Feedback**: The application will provide real-time feedback on the status of the payment request, including any errors encountered.

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

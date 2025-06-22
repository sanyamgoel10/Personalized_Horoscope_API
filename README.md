# Personalized Horoscope API

This project implements a backend service in Node.js with Express.js that generates and serves personalized daily horoscopes based on a user's zodiac sign. It includes user authentication, automatic zodiac sign detection, a daily horoscope API, and a history API.

-----

## Features

  * **User Authentication:** Users can sign up with their name, email, password, and birthdate. Login is implemented with email and password.
  * **Auto-Detect Zodiac Sign:** Upon signup, the user's zodiac sign is automatically calculated based on their provided birthdate.
  * **Daily Horoscope API:** Authenticated users can fetch their personalized daily horoscope. Horoscope content is mocked using in-memory data.
  * **Horoscope History API:** Users can retrieve their last 7 days' horoscopes.
  * **Database:** MongoDB is used for storing user data and horoscope history.

-----

## Tech Stack

  * **Node.js:** JavaScript runtime environment.
  * **Express.js:** Web application framework for Node.js.
  * **MongoDB:** NoSQL database for data storage.
  * **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.
  * **JWT (JSON Web Tokens):** For secure user authentication.
  * **BCRYPT:** For secure password encryption.

-----

## Setup Instructions

To get this project up and running on your local machine, follow these steps:

### Prerequisites

  * Node.js
  * MongoDB (ensure it's running locally or accessible via a connection string)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/sanyamgoel10/Personalized_Horoscope_API.git
    cd Personalized_Horoscope_API
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure environment variables:**
    Create a `.env` file in the root directory of the project with the following variables:

    ```
    PORT=3000
    MONGO_URL="mongodb://localhost:27017/horoscope_db"
    JWT_SECRET="your_jwt_secret_key"
    ```

      * `PORT`: The port on which the server will run (e.g., 3000).
      * `MONGO_URL`: Your MongoDB connection string. If running locally, `mongodb://localhost:27017/horoscope_db` is a common default.
      * `JWT_SECRET`: A strong, random string used for signing JWTs. **Generate a secure one\!**

### Running the Application

1.  **Start the server:**

    ```bash
    node server
    ```

    The server will start on the port specified in your `.env` file (default: `http://localhost:3000`).

-----

## API Endpoints
### User Authentication

  * **`POST /signup`**

      * **Description:** Registers a new user.
      * **Request Body:**
        ```json
        {
          "Name": "Test User",
          "Email": "test_user@gmail.com",
          "Password": "some_test_pwd",
          "Birthdate": "1990-05-15"   // Required Format -> YYYY-MM-DD
        }
        ```
      * **Response:**
        ```json
        {
          "status": 1,
          "msg": "Sign Up sucessful",
          "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODU3Y2NlMmRmMGU2YTFiMjA5OTNjNjIiLCJlbWFpbCI6Im5ld191c2VyQGdtYWlsLmNvbSIsImlhdCI6MTc1MDU4NDU0NywiZXhwIjoxNzUwNTg4MTQ3fQ.3o4qtSwY8wefyGPdV5Om7W2-X6nEVHSjcgF4aNydOSs"
        }
        ```

  * **`POST /login`**

      * **Description:** Logs in an existing user.
      * **Request Body:**
        ```json
        {
          "Email": "test_user@gmail.com",
          "Password": "some_test_pwd"
        }
        ```
      * **Response:**
        ```json
        {
          "status": 1,
          "msg": "Logged in successfully",
          "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODU3Y2NlMmRmMGU2YTFiMjA5OTNjNjIiLCJlbWFpbCI6Im5ld191c2VyQGdtYWlsLmNvbSIsImlhdCI6MTc1MDU4NjY3NywiZXhwIjoxNzUwNTkwMjc3fQ.gQxom9DZwk74DKJjQuDBXxjXR9YhEZBOOZ3eC2cS9GA"
        }
        ```

### Horoscope

  * **`GET /horoscope/today`**

      * **Description:** Fetches the daily horoscope for the authenticated user's zodiac sign.
      * **Authentication:** Requires a valid JWT in the `Authorization` header (`Bearer <token>`).
      * **Response:**
        ```json
        {
          "status": 1,
          "msg": "Horoscope successfully fetched",
          "horoscope": "Hard work will pay off today. Stay focused and avoid unnecessary distractions."
        }
        ```

  * **`GET /horoscope/history`**

      * **Description:** Returns the last 7 days' horoscopes for the authenticated user.
      * **Authentication:** Requires a valid JWT in the `Authorization` header (`Bearer <token>`).
      * **Response:**
        ```json
        {
          "status": 1,
          "msg": "Horoscope history successfully fetched",
          "horoscopeHistory": {
            "2025-06-22": "Hard work will pay off today. Stay focused and avoid unnecessary distractions.",
            "2025-06-21": "Yesterday's horoscope...",
            "2025-06-20": "Two days ago horoscope..."
          }
        }
        ```
---

## Design Decisions
  * Organized the code in a clean, modular structure by separating routes, controllers, models, and middleware for better clarity and maintainability.
  * Used MongoDB with Mongoose to define schemas and manage data effectively.
  * Implemented JWT-based authentication for secure, stateless, and scalable access control.
  * Added rate limiting to all APIs, restricting each IP to 5 requests per minute to prevent abuse.
  * User passwords are securely hashed and validated using bcrypt.
  * Zodiac sign is automatically calculated on the server during registration and stored with the user’s record.
  * Horoscope data is currently stored in an in-memory config file, with flexibility to switch to an external API in the future.
  * Horoscope history is tracked and stored, allowing users to access their past 7 days' horoscopes.
  * Integrated Swagger documentation to provide an interactive and user-friendly way to explore the APIs.

---

## Future Enhancements
Following enhancements can be implemented in the APIs:
  * Password Reset functionality can be added with Email OTP authentication or a token-based link.
  * Integrate with an external API to serve real-time, personalized horoscope content.
  * Set up CI/CD pipelines for automated testing and seamless deployment.
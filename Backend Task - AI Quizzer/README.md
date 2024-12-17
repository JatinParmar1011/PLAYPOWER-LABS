
# AI Quizzer

AI Quizzer is a secure quiz platform built with Node.js, Express, MongoDB, and JWT. It enables user registration, quiz creation, and result management. Users authenticate via JWT tokens for secure access, ensuring smooth interaction and efficient quiz management.

---


## Features 🔑

### 🛂 **User Authentication**
- Allows users to **register** and **login**.
- Upon successful login, users receive a **JWT authentication token** for subsequent requests.

### 📝 **Quiz Creation**
- Provides an endpoint for **creating quizzes**.
- Quizzes can include a set of **questions** and **answers**, enabling administrators to manage quizzes effectively.

### 📊 **Results Management**
- Users can **submit their answers** to quizzes.
- After submission, users can **view their quiz results**, enabling them to track performance.

### 🔐 **JWT-based Authentication**
- All API requests, except for **register** and **login**, require a **valid JWT token** for authentication.
- This ensures secure access to the platform and protects user data.

## Tech Stack 🚀

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Testing**: Postman
- **API Format**: RESTful
- **Response Format**: JSON

## API Endpoints

## Authentication API

### Register

**Endpoint:** `POST /auth/register`  
**Description:** Registers a new user.

**Request Body:**
```json
{
  "username": "jatin",
  "email": "jatin@gmail.com",
  "password": "jatin123"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "507f191e810c19729de860ea",
    "username": "jatin",
    "email": "jatin@gmail.com"
  }
}
```

---

### Login

**Endpoint:** `POST /auth/login`  
**Description:** Authenticates a user and returns an authentication token.

**Request Body:**
```json
{
  "email": "jatin@gmail.com",
  "password": "jatin123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

---

## Quiz API

### Create Quiz

**Endpoint:** `POST /quiz/create`  
**Description:** Creates a new quiz.

**Headers:**
```bash
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

**Request Body:**
```json
{
  "title": "Sample Quiz",
  "gradeLevel": "10",
  "subject": "Math",
  "questions": [
    {
      "question": "What is 2+2?",
      "answer": "4"
    },
    {
      "question": "What is 5*3?",
      "answer": "15"
    }
  ]
}
```

**Response:**
```json
{
  "message": "Quiz created successfully",
  "quiz": {
    "id": "507f191e810c19729de860eb",
    "title": "Sample Quiz",
    "gradeLevel": "10",
    "subject": "Math",
    "questions": ["12345", "67890"]
  }
}
```

---

## Results API

### Submit Quiz

**Endpoint:** `POST /results/submit`  
**Description:** Submits the user's quiz results.

**Headers:**
```bash
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

**Request Body:**
```json
{
  "quizId": "507f191e810c19729de860eb",
  "userId": "507f191e810c19729de860ea",
  "answers": [
    { "questionId": "507f191e810c19729de860ec", "answer": "4" },
    { "questionId": "507f191e810c19729de860ed", "answer": "15" }
  ]
}

```

**Response:**
```json
{
  "message": "Quiz results submitted successfully",
  "resultId": "result_507f191e810c19729de860ee"
}

```

---

### Get Results

**Endpoint:** `GET /results`  
**Description:** Fetches the quiz results for the authenticated user.

**Headers:**
```bash
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

**Response:**
```json
{
  "results": [
    {
      "quizId": "507f191e810c19729de860eb",
      "score": 10,
      "totalQuestions": 2,
      "correctAnswers": 2
    }
  ]
}

```

---


## Installation 🛠️

### Prerequisites 📋

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [Thuner Client](https://www.thunderclient.com/) (Optional for API testing)

### Steps to Install

1. Clone the repository:
    ```bash
    git clone https://github.com/JatinParmar1011/AI-Quizzer.git
    cd AI-Quizzer
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```
    JWT_SECRET = your_jwt_secret_key
    MONGO_URI = your_mongodb_connection_string
    ```

4. Start the server:
    ```bash
    npm start
    ```

The server will start running on `http://localhost:8000`.

---

## Security Considerations

- **JWT**: All authenticated routes require a JWT token for access. This token should be passed in the `Authorization` header as `Bearer <token>`.
- **Password Hashing**: Passwords are hashed using **bcrypt.js** before being stored in the database.

---
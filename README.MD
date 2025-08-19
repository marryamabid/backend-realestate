Backend

HomeLinker project connects to the HomeLinker Backend
.

---

## ⚙️ HomeLinker – Backend (README.md)

````markdown
# ⚙️ HomeLinker – Backend

The **backend** of HomeLinker is built with **Node.js, Express, and MongoDB Atlas**.  
It provides APIs for authentication, user profiles, and property listings.

---

## 🚀 Features

- 👤 User Authentication:
  - Email/Password
  - Google OAuth
- 🔒 JWT Authentication + Cookies
- 🏘️ CRUD APIs for property listings
- 📡 MongoDB Atlas with Mongoose
- 🌍 CORS support for frontend integration
- 🛠️ Error handling with meaningful messages

---

## 🛠️ Tech Stack

- **Node.js + Express**
- **MongoDB Atlas + Mongoose**
- **JWT (jsonwebtoken)**
- **Google OAuth**
- **cookie-parser**
- **cors**
- **dotenv**

---

## ⚙️ Setup & Installation

1. Clone the repository:
   ```
   git clone https://github.com/marryamabid/backend-realestate.git
   ```
````

Install dependencies:

```
npm install
```

API Endpoints
🔑 Auth

POST /api/auth/signup – Register user

POST /api/auth/login – Login user

POST /api/auth/google – Google login

POST /api/auth/logout – Logout user

👤 User

GET /api/user/:id – Get user info

PUT /api/user/:id – Update user

DELETE /api/user/:id – Delete user

🏘️ Listings

POST /api/listing – Create listing

GET /api/listing/:id – Get listing

PUT /api/listing/:id – Update listing

DELETE /api/listing/:id – Delete listing

GET /api/listing/search – Search listings

# TypeScript Backend Practice

This folder contains a production-style backend built with:

- Node.js
- Express
- TypeScript

The purpose of this backend is to practice:
- Clean project structure
- Strong typing in controllers and services
- Modular architecture
- Environment configuration
- Production-style folder organization

---

## 📂 Project Structure

src/
- controllers/
- DB/
- middlewares/
- utils/
- routes/
- models/User.model.ts
- app.ts
- constant.ts
- server.ts


---

## ⚙️ Setup Instructions

1. Install dependencies

npm install

2. Create .env file

- PORT=7000
- ORIGIN_URL=*
- MONGODB_URL= your Url 
- JWT_ACCESS_SECRET=your_access_secret_key
- JWT_REFRESH_SECRET=your_refresh_secret_key
- JWT_ACCESS_EXPIRES_IN=15m
- JWT_REFRESH_EXPIRES_IN=7d

3. Run development server

npm run dev

4. Build project

npm run build

5. Start production build

npm start

---

## 🎯 Learning Goals

- Apply TypeScript in backend development
- Implement strict typing for models, controllers, and services
- Practice clean architecture principles
- Build modular and scalable folder structure
- Handle authentication with JWT access + refresh tokens
- Hash and verify passwords securely with bcrypt
---

##  Implemented so Far:
- Production-grade folder structure
- Database connection using Mongoose
- User Schema/Model:
     Password hashing with bcrypt
     Password comparison
     JWT access token generation
     JWT refresh token generation & storage
     Add/remove refresh token methods
- TypeScript interfaces for model methods

## 🧠 Notes

This backend is for learning purposes and architectural practice.
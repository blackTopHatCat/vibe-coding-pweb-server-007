# 🔧 Tic-Tac-Toe Backend

A robust Node.js/Express backend API for a full-stack Tic-Tac-Toe game with complete user management and authentication.

## ✨ Features

- **🔐 JWT Authentication** - Secure user login/register with token-based auth
- **👤 User Management** - Complete CRUD operations for user profiles
- **📁 File Upload** - Multer-powered profile picture upload with validation
- **🔒 Password Security** - BCrypt hashing with salt rounds
- **🗄️ MongoDB Integration** - Mongoose ODM with proper data modeling
- **🛡️ Security Middleware** - CORS, input validation, and error handling
- **📊 User Profiles** - Manage username, profile pictures, and account settings
- **🔑 Protected Endpoints** - Route protection with JWT middleware
- **🖼️ Image Handling** - File type and size validation for uploads
- **⚡ Health Checks** - API status monitoring endpoint
- **🚦 Error Handling** - Comprehensive error responses and status codes

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start
```

## 🔧 Environment Setup

Create a `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/tic-tac-toe
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=30d
```

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **BCrypt** - Password hashing
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

## 📋 API Endpoints

### Authentication
- `POST /api/users/register` - Create new user account
- `POST /api/users/login` - User login and token generation

### User Management
- `GET /api/users/profile` - Get current user profile
- `PUT /api/users/profile` - Update user profile (username/picture)
- `PUT /api/users/change-password` - Change user password
- `DELETE /api/users/delete` - Delete user account
- `GET /api/users/users` - Get all users (protected)
- `GET /api/users/users/:id` - Get user by ID (protected)

### Utility
- `GET /api/health` - Server health check

The backend provides a secure, scalable API for the Tic-Tac-Toe frontend with full user authentication and profile management capabilities.


Link to Frontend: https://github.com/blackTopHatCat/vibe-coding-pweb-client-007 

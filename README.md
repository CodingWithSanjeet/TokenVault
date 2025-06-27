# 🔑 TokenVault

A modern, full-stack Node.js authentication boilerplate with JWT tokens, beautiful UI, and production-ready architecture.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-8B4513?style=for-the-badge&logo=ejs&logoColor=white)

---

## ✨ Features

- 🔐 **JWT Authentication** - Secure token-based authentication
- 🛡️ **Password Hashing** - Bcrypt encryption with salt rounds
- 📱 **Responsive Design** - Modern, mobile-first UI
- 🎨 **Beautiful Interface** - Node.js themed with gradient animations
- 🚀 **Fast & Lightweight** - Optimized for performance
- 📊 **RESTful API** - Clean, documented endpoints
- 🌐 **Server-Side Rendering** - EJS template engine
- 🔄 **Auto-Authentication** - Persistent login sessions
- 📋 **Form Validation** - Client and server-side validation
- 🎯 **Error Handling** - Comprehensive error management

---

## 📸 Screenshots

### 🏠 Home Page
<img width="449" alt="image" src="https://github.com/user-attachments/assets/a7890e8e-cc7f-45ec-aaf8-496684f6c007" />

*Clean, modern landing page with Node.js authentication overview*

### 🔐 Authentication Pages
<div align="center">
  <img width="452" alt="image" src="https://github.com/user-attachments/assets/cee8fd6b-94b6-41d0-98bd-0914971329b2"  width="45%" alt="Login Page" />
  <img width="464" alt="image" src="https://github.com/user-attachments/assets/21717db4-3e3f-432d-8e95-52b717d587b8" width="45%" alt="Signup Page"/>
</div>

*Beautiful, responsive authentication forms with real-time validation*

### 🎯 Tech Stack Showcase
<img width="452" alt="image" src="https://github.com/user-attachments/assets/62388021-6edd-44aa-9585-25cfc7795fcf" />

*Interactive cards displaying the complete technology stack*

### ✨ UI Features
- 🌈 **Node.js Green Theme** - Professional color palette
- 🎨 **Gradient Animations** - Smooth, modern transitions
- 📱 **Mobile-First Design** - Responsive across all devices
- 🔄 **Interactive Cards** - Hover effects and animations
- 🎯 **Clean Typography** - Modern font combinations
- 💫 **Loading States** - Beautiful error and success messages

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Node.js** | Runtime Environment | ^18.0.0 |
| **Express.js** | Web Framework | ^4.18.0 |
| **MongoDB** | Database | ^5.0.0 |
| **Mongoose** | ODM | ^6.0.0 |
| **JWT** | Authentication | ^9.0.0 |
| **Bcryptjs** | Password Hashing | ^2.4.0 |
| **EJS** | Template Engine | ^3.1.0 |
| **Cookie Parser** | Cookie Management | ^1.4.0 |

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tokenvault.git
   cd tokenvault
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/jwt-auth
   JWT_SECRET=your-super-secret-jwt-key
   NODE_ENV=development
   ```

4. **Start the application**
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

---

## 📱 Application Pages

### 🏠 Home Page
- Landing page with tech stack showcase
- Authentication status display
- Clean, modern design with animations

### 🔐 Authentication Pages
- **Sign Up** - User registration with validation
- **Login** - Secure user authentication
- **Logout** - Session termination

### 🎯 Tech Stack Page
- Interactive cards showcasing technologies
- Hover effects and animations
- Educational content for each technology

---

## 🔌 API Endpoints

### Authentication Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/signup` | Register new user | ❌ |
| `POST` | `/login` | Authenticate user | ❌ |
| `GET` | `/logout` | Logout user | ✅ |

### Page Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/` | Home page | ❌ |
| `GET` | `/signup` | Registration page | ❌ |
| `GET` | `/login` | Login page | ❌ |
| `GET` | `/techstacks` | Tech stack page | ✅ |

---

## 📁 Project Structure

```
tokenvault/
├── 📂 controller/
│   └── authController.js    # Authentication logic
├── 📂 middlewares/
│   └── authMiddleware.js    # JWT verification
├── 📂 models/
│   └── User.js             # User model schema
├── 📂 public/
│   ├── styles.css          # Modern CSS styling
│   └── *.png              # Tech stack icons
├── 📂 routes/
│   └── authRoutes.js       # Authentication routes
├── 📂 utils/
│   └── helper.js           # Utility functions
├── 📂 views/
│   ├── 📂 partials/
│   │   ├── header.ejs      # Header template
│   │   └── footer.ejs      # Footer template
│   ├── home.ejs           # Landing page
│   ├── login.ejs          # Login form
│   ├── signup.ejs         # Registration form
│   └── techstacks.ejs     # Tech stack page
├── app.js                 # Express app setup
├── package.json           # Dependencies
└── README.md             # Documentation
```

---

## 🎨 Design Features

### 🌈 Modern UI Components
- **Gradient Themes** - Node.js inspired green color palette
- **Smooth Animations** - CSS keyframe animations
- **Glass Morphism** - Modern frosted glass effects
- **Responsive Cards** - Interactive tech stack showcase
- **Form Styling** - Beautiful, accessible forms

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Flexible grid layouts
- Touch-friendly interactions

---

## 🔒 Security Features

- **JWT Tokens** - Secure, stateless authentication
- **Password Hashing** - Bcrypt with salt rounds
- **Input Validation** - Server-side validation
- **XSS Protection** - Input sanitization
- **Secure Headers** - Security middleware
- **Environment Variables** - Sensitive data protection

---

## 🚀 Deployment

### Heroku Deployment

1. **Create Heroku App**
   ```bash
   heroku create your-app-name
   ```

2. **Set Environment Variables**
   ```bash
   heroku config:set JWT_SECRET=your-secret-key
   heroku config:set MONGODB_URI=your-mongodb-uri
   ```

3. **Deploy**
   ```bash
   git push heroku main
   ```

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📋 Available Scripts

```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm test           # Run test suite
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
```

---

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error**
```bash
# Ensure MongoDB is running
mongod

# Check connection string in .env
MONGODB_URI=mongodb://localhost:27017/jwt-auth
```

**JWT Token Issues**
```bash
# Verify JWT_SECRET is set
echo $JWT_SECRET

# Clear browser cookies and retry
```

**Port Already in Use**
```bash
# Find and kill process using port 3000
lsof -ti:3000 | xargs kill -9
```

---

## 📚 Learning Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [JWT Introduction](https://jwt.io/introduction)
- [MongoDB Tutorial](https://docs.mongodb.com/manual/tutorial/)
- [EJS Documentation](https://ejs.co/#docs)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Node.js Community** - For the amazing ecosystem
- **Express.js Team** - For the robust web framework
- **MongoDB** - For the flexible database solution
- **JWT.io** - For authentication standards
- **Design Inspiration** - Modern web design trends

---

## 📞 Support

If you found this project helpful, please give it a ⭐!

For questions or support, please open an issue or contact:
- 📧 Email: sanjeet.kumar.nitt@gmail.com
- 🐙 GitHub: [@CodingWithSanjeet](https://github.com/CodingWithSanjeet)

---

<div align="center">

**Built with ❤️ for the Node.js community**

[⬆ Back to Top](#-tokenvault)

</div> 

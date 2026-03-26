# 🔐 JWT Auth Secured API

A Node.js + Express REST API demonstrating **JWT (JSON Web Token) based authentication** to secure protected routes.

This project enhances API security by replacing basic authentication with **token-based authorization**.

---

## 🚀 Features

- 👤 User Login with JWT token generation  
- 🍪 Token stored securely in cookies (`jwtToken`)  
- 🔒 Protected route using custom middleware  
- ❌ Unauthorized access handling (401 response)  
- ⚠️ Handles invalid / expired tokens  

---

## 📡 Protected Route
/api/product


✅ Accessible only if a **valid JWT token** is present  

---

## 🧠 How JWT Authentication Works

### 🔄 Flow

1. User logs in → server verifies credentials  
2. Server generates a JWT token  
3. Token is sent & stored in cookie (`jwtToken`)  
4. For every request:
   - Middleware extracts token  
   - Verifies signature & expiration  
   - Grants / denies access  

---
# Cookies:
# How it works:
The server sets a cookie (e.g., jwtToken) in the user's browser after login. On every subsequent request, the browser automatically sends this cookie back to the server.

## 🧩 JWT Structure

A JWT consists of 3 parts:
Header.Payload.Signature


### Example:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.
eyJ1c2VySWQiOjEyMywiZXhwIjoxNjM5NTI2NDAwfQ
.
signature


### 📌 Explanation:
- **Header** → Algorithm & token type  
- **Payload** → User data (id, expiry, etc.)  
- **Signature** → Ensures token integrity  

---

## 🔒 JWT Middleware (`jwtAuth`)

### Responsibilities:
- Extract token from cookies  
- Verify token using secret key  
- Check expiration & validity  
- Allow or block request  

---
# Differences
```
# Method	      Automatic-Sending	 CSRF Risk	XSS Risk	   Best For
Cookie	      Yes	             Yes*	      No**	      Browser-based apps
Authorization	No	                No	      Yes***	   APIs, mobile, SPA apps

Cookies are convenient for browser-based authentication and are used here to match the test requirements.
Authorization header is more common for APIs and mobile apps
```

## ⚙️ Tech Stack

- Node.js  
- Express.js  
- JSON Web Token (JWT)  
- Cookie-based authentication  

---

## 🛠️ Setup & Run

```bash
# Clone repo
git clone https://github.com/Mrutunjaya-Panda/jwt-auth-secured-api.git

cd jwt-auth-secured-api

# Install dependencies
npm install

# Run server
npm start
```
## ⚖️ JWT vs Basic Authentication
```
❌ Basic Auth (Limitations)
Sends username & password in every request
Uses only Base64 encoding (not encryption)
No expiration or logout mechanism
Not scalable (DB check required each time)
```
## ✅ JWT Advantages
```
🔐 Credentials sent only once (login)
🛡️ Cryptographically signed token (tamper-proof)
⏳ Supports expiration (better security)
⚡ Stateless (no DB lookup on every request)
📈 Highly scalable for modern apps
🔗 Works across microservices & distributed systems

📌 JWT tokens are self-contained and can be verified without database calls, making them ideal for scalable APIs
📌 Unlike basic auth, credentials are not repeatedly exposed, reducing security risks
```

## 👨‍💻 Author
Mrutunjaya Panda

# Pharmacy Shop

A full-stack MERN (MongoDB, Express, React, Node.js) web application where users can register, log in, update their profile, and browse or manage pharmacy products.  
Admins can add new products, update, and delete them.

---

## Features

- **Authentication**
  - Register / Login with hashed passwords (bcrypt)
  - User roles: normal user or admin
  - Profile update (username, email, password, profile picture)
  - Delete account

- **Products**
  - Create, Read, Update, Delete (CRUD) products
  - Product cards with image, title, price, and description
  - Single product page with update/delete for the owner

- **Admin**
  - Admin-only option to add new products
  - Admin visibility for "Add New Product" in navbar

- **Frontend**
  - React (functional components + hooks)
  - Context API for global state (auth, user, admin)
  - Axios for API calls
  - Responsive design with custom CSS
  - Styled login/register forms with show/hide password

- **Backend**
  - Express.js REST API
  - MongoDB Atlas (cloud database)
  - Multer for image upload
  - Secure password hashing with bcrypt
  - RESTful routes for `auth`, `users`, and `posts`

---

## Tech Stack

**Frontend**
- React  
- Context API + Reducer  
- Axios  
- CSS (custom responsive styling)

**Backend**
- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- Multer (file uploads)  
- Bcrypt (password hashing)  

---

Installation  

---

Clone the repository  

   bash:  
   git clone https://github.com/DPapachristou/pharmacy-shop.git  
   cd pharmacy-shop  
   
---  
Backend:  

cd server  
npm install  
node index.js  

---
Frontend:  

cd client  
npm install  
npm start  

---

Future Improvements:  

-JWT authentication for secure sessions  
-Categories & filters for products  
-Search functionality  
-Responsive mobile-first redesign  
-Cart and payment feature  
-Deployment

## Author
**Dimitris Papachristou**  
[LinkedIn](https://www.linkedin.com/in/dimitris-papachristou/) | [GitHub](https://github.com/DPapachristou)  

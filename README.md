# 💬 Realtime Chat Application

A modern, full-stack realtime chat application built with **React + Vite**, **MongoDB**, **Express**, **TailwindCSS + DaisyUI + PostCSS**, and **Socket.io** for realtime communication. This project is designed to be scalable, responsive, and user-friendly, offering a clean UI and smooth chatting experience similar to WhatsApp/Telegram.

---

## 🚀 Features

* 🔐 **Authentication System** – Signup & login with secure credentials
* 🗣️ **Realtime Messaging** – Powered by **Socket.io** for instant updates
* 🧑‍🤝‍🧑 **Group & Private Chats** – Support for multiple users and rooms
* 🖼️ **Media Sharing** – Send and receive images, videos, and files
* 💾 **Persistent Chat History** – Messages stored securely in **MongoDB**
* 🎨 **Modern UI** – Built with **TailwindCSS** + **DaisyUI** components
* 📱 **Responsive Design** – Works seamlessly on mobile and desktop
* ⚡ **Optimized Performance** – Vite bundling & PostCSS for styling

---

## 🛠️ Tech Stack

**Frontend:**

* React.js (with Vite)
* TailwindCSS + DaisyUI + PostCSS

**Backend:**

* Node.js + Express
* Socket.io (Realtime communication)
* MongoDB (Mongoose ODM)

**Other Tools:**

* ESLint + Prettier (Code quality)
* Git & GitHub (Version control)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/chat-app.git
cd chat-app
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a **.env** file inside `/backend` with:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend will run at: `http://localhost:5173/`
Backend will run at: `http://localhost:5000/`

---

## 📜 Available Scripts

### Frontend

* `npm run dev` – Start development server
* `npm run build` – Build production-ready app
* `npm run preview` – Preview production build

### Backend

* `npm run dev` – Start backend with nodemon
* `npm start` – Run backend in production

---

## 🖼️ Screenshots

> (Add your app screenshots or demo GIFs here)

---

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** – feel free to use and modify it.

---

## 👩‍💻 Author

Built with ❤️ by **Your Name**

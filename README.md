# Pingly — Frontend

## 💬 WhatsApp-like Real-Time Chat UI




## 📖 Overview

Pingly Frontend is a modern, responsive chat interface inspired by WhatsApp.

It provides a seamless user experience for:

Real-time messaging

Group communication

Status updates

Audio & video calls

Media sharing

Built using React.js with a clean component-based architecture.

## ✨ Features

### 🔐 Authentication UI

User registration

Login system

Forgot password

Reset password

Protected routes

### 🏠 Home Page

Displays:

My Status (separate section)

Other users' status

Search bar to find users

Create group button

List of users & chats

## 💬 Chat System

### 👤 1-on-1 Chat

Real-time messaging

Sender & receiver sync

Navigate to user profile

### 👥 Group Chat

Create group with multiple users

Open group chat from home

Click group header → view members

Click member → view user details

## ✉️ Messaging Features

Send:

Text

Images

Videos

PDFs

Files

## Message actions:

Edit message

Delete (for me / for everyone)

Copy message

Translate message

## Message status:

Sent ✔

Delivered ✔✔

Seen ✔✔

## 📞 Calling UI

Audio call button

Video call button

## Navigate to call screens

## 📸 Status (Stories)

Add new status

View others' status

Edit own status

Delete status

## 🔔 Notifications

Real-time UI updates

Unread message indicators

## 🏗️ Architecture

Pages → Components → API Layer → Backend
                ↘ Socket Layer
                
## Component-based structure

Reusable UI elements

Clean state management

## 📁 Folder Structure

frontend/
│

├── src/

│   ├── api/              # Axios config

│   ├── components/       # Reusable components (ChatBox, Navbar, etc.)

│   ├── context/          # Auth context

│   ├── pages/            # Pages (Home, ChatPage, Status, etc.)

│   ├── utils/            # Helper functions

│   ├── App.js

│   └── main.jsx
│

├── public/

├── package.json

└── tailwind.config.js

## ⚙️ Tech Stack

Layer	Technology

Frontend	React.js

Styling	Tailwind CSS

API Calls	Axios

Routing	React Router

State Mgmt	Context API

Realtime	Socket.IO Client

## 🔌 API Integration

Connected to backend APIs:

Auth

Chat

Messages

Status

Calls

## Uses Axios instance for:

Token handling

Base URL config

## 🔄 Real-Time Communication

Powered by Socket.IO Client:

Live messaging

Instant updates

Call signaling

## 🔐 Environment Variables

Create .env:

VITE_API_URL=http://localhost:5000

VITE_SOCKET_URL=http://localhost:5000

## ▶️ Run Locally

npm install

npm run dev

## 📱 UI Highlights

WhatsApp-like interface

Clean and modern design

Responsive layout

Smooth navigation

## 🚀 Key Highlights

Fully functional chat UI

Supports both 1-on-1 and group chats

Media + translation features

Real-time user experience

Clean component architecture

## 👨‍💻 Author

Kanesha K

## ⭐ Future Improvements

Dark mode 🌙

Typing indicator

Message reactions

Voice messages

UI animations

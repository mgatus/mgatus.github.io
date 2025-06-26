---
layout: post
title: Editable Account Panel (Vue.js)
permalink: /posts/editpanelvue/
date: 2025-06-26 19:30:00 +08:00
image: /images/featured/editpanelvue.png
meta: A modern, editable account settings panel built with Vue.js and responsive CSS.
---

Editable Account Panel is a front-end interface built using Vue.js that allows users to view and edit their account information in a clean, interactive layout.
--more--
This project demonstrates reactive form handling, conditional rendering, and dynamic UI updates using modern Vue.js practices. It features editable fields for name, email, and password, and includes Gravatar image integration based on the user’s email address.

Live Demo: [https://mgatus.github.io/editpanelvue/](https://mgatus.github.io/editpanelvue/)

## 🛠️ Tech Used
- Vue.js 3 with Composition API
- Vite as build tool
- HTML5 + CSS3 (Flexbox & Grid)
- Font Awesome for icons
- Gravatar for dynamic profile picture

## ✨ Features
- Editable Full Name, Email, and Password fields
- Toggle edit mode per field using icon buttons
- Gravatar integration (fallback to default image)
- Responsive and accessible layout
- Scoped and modular CSS for clean styling

## 💡 How It Works
Each account field is managed as a reactive state in Vue. Clicking the pencil icon toggles edit mode for that field, displaying inputs with validation. The password section includes logic to handle secure changes without exposing stored credentials.

---

A practical Vue.js project that shows how to build real-world form interfaces with modern UX.

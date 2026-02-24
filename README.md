# 🚀 TaskFlow – Smart Daily To-Do Manager

<p align="center">
  <img src="assets/taskFlow.ico" width="80" />
</p>

<p align="center">
  <b>Plan Your Day with Precision</b><br>
  A modern and minimal day-wise task management web application built with pure HTML, CSS & JavaScript.
</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/HTML-5-orange?style=for-the-badge&logo=html5" />
  <img src="https://img.shields.io/badge/CSS-3-blue?style=for-the-badge&logo=css3" />
  <img src="https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript" />
  <img src="https://img.shields.io/badge/Storage-LocalStorage-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" />
</p>

---

## 🌟 Live Demo

🔗 **Deploy on GitHub Pages and add your link here:**


https://your-username.github.io/taskflow/


---

# ✨ Features

✅ Day-wise task management (Sunday – Saturday)  
✅ Add tasks with specific time  
✅ Edit tasks dynamically  
✅ Delete tasks instantly  
✅ Persistent data using LocalStorage  
✅ Clean glassmorphism UI  
✅ Responsive layout  
✅ Dynamic DOM manipulation  

---

# 🖼️ Preview

## 🏠 Landing Page
![Landing Page](assets/Preview-1.png)

---

## 📆 Choose the Day
![Choose Day](assets/Preview-2.png)

---

## ➕ Add Task
![Add Task](assets/Preview-3.png)

---

## 📋 Task List View
![Task List](assets/Preview-4.png)

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| HTML5 | Structure |
| CSS3 | Styling & UI Design |
| JavaScript (ES6) | Logic & DOM Manipulation |
| LocalStorage API | Data Persistence |

---

# ⚙️ How It Works

Each day stores tasks separately inside **LocalStorage**:


tasks_monday
tasks_tuesday
tasks_wednesday
...


When the page loads:
- Tasks are fetched from LocalStorage
- Table rows are generated dynamically
- UI updates instantly

No backend required — fully frontend-based.

---

# 📂 Project Structure

```

To-Do-List-App-2.0/
│
├── assets/
│ ├── Preview-1.png
│ ├── Preview-2.png
│ ├── Preview-3.png
│ ├── Preview-4.png
│ └── taskFlow.ico
│
├── css/
│ ├── style.css
│ └── days.css
│
├── js/
│ ├── sunday.js
│ ├── monday.js
│ ├── tuesday.js
│ ├── wednesday.js
│ ├── thursday.js
│ ├── friday.js
│ └── saturday.js
│
├── pages/
│ ├── sunday.html
│ ├── monday.html
│ ├── tuesday.html
│ ├── wednesday.html
│ ├── thursday.html
│ ├── friday.html
│ └── saturday.html
│
├── index.html
└── README.md
```

---

# 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/your-username/taskflow.git

Open index.html in your browser.

🎯 Future Improvements

🔄 Refactor into single dynamic JS file

🔍 Search functionality

🎯 Task priority system

🌙 Dark / Light mode toggle

🧩 Drag & Drop reordering

🔐 Backend integration (Node.js + Database)

👤 User authentication

📚 What I Learned

This project helped me strengthen my knowledge of:

DOM Manipulation

Event Handling

LocalStorage

Clean UI Design

File Organization

Scalable Frontend Thinking

👨‍💻 Author

Akash Wakade

🎓 B.Tech Computer Science Student
💻 Learning JavaScript & Web Development
🚀 Preparing for Open Source Contributions (GSoC 2026)

⭐ Show Your Support

If you like this project, consider giving it a ⭐ on GitHub!

<p align="center"> Built with ❤️ and JavaScript </p> ```
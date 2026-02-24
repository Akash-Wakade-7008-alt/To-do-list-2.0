# 🚀 TaskFlow – Smart Daily To-Do Manager

<p align="center">
  <img src="assets/taskFlow.ico" width="90" />
</p>

<p align="center">
  <b>Plan Your Day with Precision</b><br>
  A modern and minimal day-wise task management web application built using pure HTML, CSS & JavaScript.
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

## 🌐 Live Demo

🔗 https://your-username.github.io/taskflow/

---

# 🎬 App Preview (Animated)

<p align="center">
  <img src="assets/preview.gif" width="850"/>
</p>

> 💡 This GIF demonstrates the complete workflow:
> - Selecting a day  
> - Adding a task  
> - Editing  
> - Deleting  
> - Persistent storage  

---

# ✨ Features

- ✅ Day-wise task management (Sunday – Saturday)  
- ✅ Add tasks with specific time  
- ✅ Edit tasks dynamically  
- ✅ Delete tasks instantly  
- ✅ Persistent data using LocalStorage  
- ✅ Clean glassmorphism UI  
- ✅ Responsive layout  
- ✅ Dynamic DOM manipulation  

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| HTML5 | Structure |
| CSS3 | Styling & UI |
| JavaScript (ES6) | Application Logic |
| LocalStorage API | Data Persistence |

---

# ⚙️ How It Works

Each day stores tasks separately in LocalStorage:

```
tasks_monday
tasks_tuesday
tasks_wednesday
...
```

When a page loads:

- Tasks are fetched from LocalStorage  
- Table rows are generated dynamically  
- UI updates instantly  
- No backend required — fully frontend-based  

---

# 📂 Project Structure

```
To-Do-List-App-2.0/
│
├── assets/
│   ├── preview.gif
│   └── taskFlow.ico
│
├── css/
│   ├── style.css
│   └── days.css
│
├── js/
│   ├── sunday.js
│   ├── monday.js
│   ├── tuesday.js
│   ├── wednesday.js
│   ├── thursday.js
│   ├── friday.js
│   └── saturday.js
│
├── pages/
│   ├── sunday.html
│   ├── monday.html
│   ├── tuesday.html
│   ├── wednesday.html
│   ├── thursday.html
│   ├── friday.html
│   └── saturday.html
│
├── index.html
└── README.md
```

---

# 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/your-username/taskflow.git
```

Open `index.html` in your browser.

---

# 🎯 Future Improvements

- 🔄 Refactor into single dynamic JS file  
- 🔍 Search functionality  
- 🎯 Task priority system  
- 🌙 Dark / Light mode toggle  
- 🧩 Drag & Drop reordering  
- 🔐 Backend integration (Node.js + Database)  
- 👤 User authentication  

---

# 📚 What I Learned

This project strengthened my understanding of:

- DOM Manipulation  
- Event Handling  
- LocalStorage  
- UI/UX Design  
- Clean Code Structure  
- Scalable Frontend Thinking  

---

# 👨‍💻 Author

**Akash Wakade**

🎓 B.Tech Computer Science Student  
💻 Learning JavaScript & Web Development  
🚀 Preparing for Open Source Contributions (GSoC 2026)

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

---

<p align="center">
  Built with ❤️ and JavaScript
</p>
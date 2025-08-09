# TodoList-App
A minimalist todo list application featuring task management with local storage persistence, built using vanilla JavaScript, HTML5, and CSS3.

# 📝 Todo List App

A **modern, responsive** to-do list application built with **vanilla JavaScript**, featuring a **clean UI** and **local storage persistence**.  
No frameworks. No dependencies. Just pure JavaScript. 🚀

Screenshots:

<img width="1901" height="938" alt="Screenshot 2025-08-09 191322" src="https://github.com/user-attachments/assets/d5f6b30a-a095-4d03-a4dd-912fecf0b339" />


## ✨ Features

### 🗂 Task Management
- ➕ **Add new tasks**
- ❌ **Delete existing tasks**
- ✅ **Mark tasks as complete/incomplete**
- 🔄 **Real-time UI updates**

### 💾 Data Persistence
- 📦 Tasks saved in browser's **localStorage**
- 🔒 Data persists after **page refresh**

### 📱 Responsive Design
- 📏 **Mobile-friendly interface**
- 📉 Adapts to screen sizes **below 500px**
- 🔤 **Custom font sizing** for different devices

### 🎨 Modern UI Elements
- ☑️ **Custom checkbox** with SVG icons
- 🗑 **Animated delete buttons**
- 🎨 **Clean color scheme**
- 🌊 Smooth transitions & hover effects

---

## 🎨 UI & Design

- **Color Scheme**: Minimal & clean
- **Responsive Breakpoints**:
  - 📱 Mobile view: `< 500px`
  - 💻 Desktop view: `≥ 500px`
- **Typography**:
  - Font Family: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
  - Desktop font size: `16pt`
  - Mobile font size: `12pt`

---

## 🛠 Technical Implementation

### ⚙️ Core Functions
- `AddTodo()` → Adds new tasks
- `deleteTodoItem()` → Removes tasks
- `updateTodoList()` → Refreshes UI
- `saveTodos()` → Saves data to `localStorage`
- `getTodos()` → Retrieves saved tasks

### 📂 Local Storage Structure
```json
[
  {
    "id": 1,
    "text": "Example Task",
    "completed": false
  }
]

Made with ❤️ by [Shashikant Thadke]


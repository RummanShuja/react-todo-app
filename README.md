````markdown
# iTask - Todo Web App

A clean, responsive and interactive **Todo App** built using **React** and **Tailwind CSS**. It allows users to add, edit, delete, and mark tasks as complete, with persistent storage via **localStorage**.

## 🚀 Features

- 📝 Add, delete, and edit tasks
- ✅ Mark tasks as completed
- 🔄 Switch between active and completed task views
- 💾 Auto-save to `localStorage`
- 🖥️ Fully responsive layout using Tailwind CSS
- 🧠 Minimal state logic with React Hooks
- ♻️ Inline editing with visual feedback


## 🛠️ Built With

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [UUID](https://www.npmjs.com/package/uuid) for unique task IDs
- [Font Awesome](https://fontawesome.com/) icons

## 📦 Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/itask-todo-app.git
   cd itask-todo-app
````

2. Install dependencies

   ```bash
   npm install
   ```

3. Run the development server

   ```bash
   npm start
   ```

4. Visit `http://localhost:3000` in your browser.


## 🧠 How It Works

* App uses `useState` to manage task and completed task lists.
* All tasks are saved to and loaded from `localStorage` using `useEffect`.
* Users can switch between **pending** and **completed** tasks using a toggle.
* Editing mode highlights the current task and allows inline modification.
* Responsive design ensures optimal viewing on mobile and desktop devices.

## 📁 Project Structure (Simplified)

```
src/
├── components/
│   └── Container.jsx
├── App.js
├── index.js
└── styles.css
```


## 📄 License

This project is open source and available under the [MIT License](LICENSE).


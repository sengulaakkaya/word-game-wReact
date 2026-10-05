# 🌸 Flower Word Guessing Game

An interactive, engaging word-guessing web application built with React, featuring a delightful flower theme where players guess flower-related words or names letter by letter!

## 🌟 Features

* **Thematic Gameplay:** Immersive flower-themed word puzzles designed to test vocabulary and provide an enjoyable user experience.
* **Derived State Management:** Implements clean React logic by deriving game conditions (such as win/loss status and wrong guess tracking) directly from the `usedLetters` state array to prevent asynchronous state bugs.
* **Interactive Virtual Keyboard:** Fully responsive onscreen keyboard that dynamically updates key styling based on user selections.
* **Modern Tooling & Build Pipeline:** Powered by Vite for lightning-fast hot module replacement (HMR) and optimized production builds.

## 🛠️ Built With

* **React** - Frontend JavaScript library for component-driven UI
* **JavaScript (ES6+)** - Core logic, array/string manipulation, and game algorithms
* **Vite** - Modern frontend bundler and build tool
* **HTML5 & CSS3** - Custom styling and responsive layout design

## 📁 Project Structure

```text
src/
├── components/         # Reusable UI components (Keyboard, etc.)
├── data/               # Flower datasets and game words
├── App.jsx             # Main game logic, state management, and win/loss conditions
├── index.css           # Global styles and theme configurations
└── main.jsx            # Application entry point

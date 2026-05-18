# 🐍 Neon Snake Game

A classic Snake game rebuilt with a modern technology stack. Originally a single-file Vanilla JS project, this game has been refactored to use **Vite** and **TypeScript** with a highly modular architecture and a beautiful neon retro UI. It also integrates the **Google IMA SDK** to display video ads before the game starts.

## 🚀 Features

- **Modern Tech Stack**: Built using Vite for blazing-fast development and TypeScript for robust, type-safe code.
- **Modular Architecture**: Code is split into logical modules (`state`, `snake`, `food`, `board`, `ui`, `ads`), making it easy to maintain and scale.
- **Retro Arcade UI**: Features a custom dark glassmorphism design with neon green accents and the "Press Start 2P" retro font.
- **Video Ads Integration**: Implements Google IMA SDK to show video ads smoothly in the game flow.

## 🎮 How to Play

- Use the **Arrow Keys** (Up, Down, Left, Right) to control the snake.
- Eat the red food to grow and increase your score.
- Don't hit the walls or yourself!
- In dialogue menus, you can use **Enter** for YES and **Backspace** for NO.

## 🛠️ Project Structure

```text
src/
├── main.ts       # Entry point: game loop and initialization
├── state.ts      # Global game state (score, snake coordinates, speed)
├── constants.ts  # Game configuration and constants (colors, sizes)
├── snake.ts      # Snake logic (movement, drawing, collision detection)
├── food.ts       # Food logic (random spawning, drawing)
├── board.ts      # Canvas context and board clearing
├── ui.ts         # User interface logic (dialogs, buttons)
├── ads.ts        # Google IMA SDK integration for video ads
└── style.css     # UI styling (neon arcade theme)
```

## 💻 Local Development

To run this project locally, you need [Node.js](https://nodejs.org/) installed on your machine.

1. **Open your terminal** and navigate to the project directory (`the-snake-game`).
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. Open the provided Local URL (usually `http://localhost:5173`) in your browser.

## 🌐 Build for Production

To create a production-ready build, run:
```bash
npm run build
```
This will generate an optimized `dist/` directory with static files (HTML, CSS, JS), ready to be deployed to any static hosting service like GitHub Pages, Vercel, or Netlify.

## 🔗 Demo / Deploy

*(Placeholder)*: [Play the Game Here!](https://github.com/SYlence23/The-Snake-Game-on-JS.git)

---
*Created as part of a Vanilla JS to Vite + TypeScript refactoring assignment.*

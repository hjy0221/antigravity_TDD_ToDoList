# TDD To-Do List App

This project is a To-Do List application built using **Test-Driven Development (TDD)** principles. It provides a robust, tested implementation of core to-do list functionalities, including adding, toggling, deleting, updating, and fetching tasks.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
- **Testing:** [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)
- **Language:** TypeScript

## 📦 Getting Started

### Prerequisites
Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hjy0221/antigravity_TDD_ToDoList.git
   cd "4_1 TDD"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧪 Testing (TDD)

This project strictly follows TDD. All custom hooks and core logic are tested using Jest before implementation.

### Folder Structure for Tests
Tests are located in `__tests__` folders next to the modules they test.
- Example: `src/hooks/__tests__/useTodos.test.ts`

### Running Tests

To run the entire test suite once:
```bash
npm test
```

To run tests in watch mode (recommended during development):
```bash
npm run test:watch
```

## 📋 Features
- Add a new to-do
- Toggle completed status of a to-do
- Delete a to-do
- Update the title of an existing to-do
- View a list of to-dos

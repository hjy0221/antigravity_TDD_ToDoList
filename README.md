# TDD To-Do List 앱

[日本語](README.ja.md) · [English](README.md) · [한국어](README.ko.md)

This project is a To-Do List application built utilizing **Test Driven Development (TDD)** principles. It provides a solid, tested implementation of core to-do list functionality, including adding, toggling status, deleting, modifying, and loading tasks.

## 🚀 Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Component:** [Shadcn UI](https://ui.shadcn.com/)
- **Test:** [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)
- **Language:** TypeScript

## 📦 Getting started

### Prerequisites
Make sure you have Node.js and npm installed on your computer.

### How to install

1. Clone the repository:
   ```bash
   git clone https://github.com/hjy0221/antigravity_TDD_ToDoList.git
   ```
   *Note: If there is an existing intended directory, please move to that directory (e.g. `cd "4_1 TDD"`).*

2. Install package dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to check the results.

## 🧪 Testing (TDD)

This project strictly follows TDD principles. All custom hooks and core logic are tested using Jest before implementation.

### Test folder structure
Test files are located in the `__tests__` folder next to the module being tested.
- Example: `src/hooks/__tests__/useTodos.test.ts`

### Running the tests

To run the entire test at once:
```bash
npm test
```

To run tests in Watch mode (recommended for use during development):
```bash
npm run test:watch
```

## 📋 Core features
- Add new tasks
- Toggle the completion status of a task
- Delete tasks
- Modify the contents of existing to-dos
- View to-do list

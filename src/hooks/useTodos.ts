import { useState, useCallback } from 'react';

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
}

export function useTodos() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = useCallback((title: string) => {
        const trimmedTitle = title.trim();
        if (!trimmedTitle) return;

        const newTodo: Todo = {
            id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9),
            title: trimmedTitle,
            completed: false,
            createdAt: new Date(),
        };

        setTodos(prev => [...prev, newTodo]);
    }, []);

    const getTodos = useCallback(() => {
        return [...todos];
    }, [todos]);

    const toggleTodo = useCallback((id: string) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    }, []);

    const deleteTodo = useCallback((id: string) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }, []);

    const updateTodo = useCallback((id: string, newTitle: string) => {
        const trimmedTitle = newTitle.trim();
        if (!trimmedTitle) return;

        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, title: trimmedTitle } : todo
        ));
    }, []);

    return {
        addTodo,
        getTodos,
        toggleTodo,
        deleteTodo,
        updateTodo,
    };
}

'use client';

import { useState } from 'react';
import { useTodos } from '@/hooks/useTodos';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Trash2, Pencil, Check, X } from 'lucide-react';

export default function TodoApp() {
    const { addTodo, getTodos, toggleTodo, deleteTodo, updateTodo } = useTodos();
    const todos = getTodos();

    const [newTodoTitle, setNewTodoTitle] = useState('');
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editingTitle, setEditingTitle] = useState('');

    const handleAddSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTodoTitle.trim()) {
            addTodo(newTodoTitle);
            setNewTodoTitle('');
        }
    };

    const handleEditStart = (todo: { id: string, title: string }) => {
        setEditingId(todo.id);
        setEditingTitle(todo.title);
    };

    const handleEditSave = (id: string) => {
        updateTodo(id, editingTitle);
        setEditingId(null);
    };

    const handleEditCancel = () => {
        setEditingId(null);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 dark:bg-slate-900">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader className="bg-slate-100 dark:bg-slate-800 rounded-t-lg">
                    <CardTitle className="text-2xl font-bold text-center text-slate-800 dark:text-slate-100">
                        TDD Todo List
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <form onSubmit={handleAddSubmit} className="flex gap-2 mb-6">
                        <Input
                            type="text"
                            placeholder="새로운 할 일을 입력하세요..."
                            value={newTodoTitle}
                            onChange={(e) => setNewTodoTitle(e.target.value)}
                            className="flex-1"
                        />
                        <Button type="submit">추가</Button>
                    </form>

                    <div className="space-y-3">
                        {todos.length === 0 ? (
                            <p className="text-center text-slate-500 py-4">할 일이 없습니다. 새로 추가해보세요!</p>
                        ) : (
                            todos.map((todo) => (
                                <div
                                    key={todo.id}
                                    className="flex items-center justify-between p-3 border rounded-lg bg-white dark:bg-slate-950 shadow-sm transition-all hover:shadow-md"
                                >
                                    {editingId === todo.id ? (
                                        <div className="flex-1 flex gap-2 items-center w-full">
                                            <Input
                                                autoFocus
                                                value={editingTitle}
                                                onChange={(e) => setEditingTitle(e.target.value)}
                                                className="flex-1"
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') handleEditSave(todo.id);
                                                    if (e.key === 'Escape') handleEditCancel();
                                                }}
                                            />
                                            <Button size="icon" variant="ghost" className="text-green-600 h-8 w-8" onClick={() => handleEditSave(todo.id)}>
                                                <Check size={18} />
                                            </Button>
                                            <Button size="icon" variant="ghost" className="text-red-500 h-8 w-8" onClick={handleEditCancel}>
                                                <X size={18} />
                                            </Button>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="flex items-center gap-3 flex-1 overflow-hidden">
                                                <Checkbox
                                                    checked={todo.completed}
                                                    onCheckedChange={() => toggleTodo(todo.id)}
                                                    id={`todo-${todo.id}`}
                                                />
                                                <label
                                                    htmlFor={`todo-${todo.id}`}
                                                    className={`flex-1 truncate cursor-pointer select-none font-medium transition-colors ${todo.completed ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-700 dark:text-slate-200'
                                                        }`}
                                                >
                                                    {todo.title}
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-1 ml-2">
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    className="h-8 w-8 text-slate-400 hover:text-blue-500"
                                                    onClick={() => handleEditStart(todo)}
                                                >
                                                    <Pencil size={16} />
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    className="h-8 w-8 text-slate-400 hover:text-red-500"
                                                    onClick={() => deleteTodo(todo.id)}
                                                >
                                                    <Trash2 size={16} />
                                                </Button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </CardContent>
                <CardFooter className="bg-slate-50 dark:bg-slate-900 rounded-b-lg p-4 border-t flex justify-between text-sm text-slate-500">
                    <span>총 {todos.length}개</span>
                    <span>완료 {todos.filter(t => t.completed).length}개</span>
                </CardFooter>
            </Card>
        </div>
    );
}

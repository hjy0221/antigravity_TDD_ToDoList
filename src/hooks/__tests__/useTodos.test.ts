import { renderHook, act } from '@testing-library/react';
import { useTodos } from '../useTodos';

describe('useTodos 커스텀 훅 - 할 일 관리 로직 TDD', () => {

    // 초기화 시 빈 배열인지 확인
    it('초기 상태에서는 할 일 목록이 비어 있어야 한다', () => {
        const { result } = renderHook(() => useTodos());
        expect(result.current.getTodos()).toEqual([]);
    });

    describe('1. addTodo - 새 할 일 추가', () => {
        it('새로운 할 일을 추가하면 목록의 개수가 1 증가해야 한다', () => {
            const { result } = renderHook(() => useTodos());
            act(() => {
                result.current.addTodo('Jest 공부하기');
            });
            const todos = result.current.getTodos();
            expect(todos).toHaveLength(1);
            expect(todos[0].title).toBe('Jest 공부하기');
            expect(todos[0].completed).toBe(false);
            expect(todos[0].id).toBeDefined();
        });

        it('할 일을 여러 개 추가하면 추가한 순서대로 또는 역순으로 저장되어야 한다 (기본: 뒤에 추가)', () => {
            const { result } = renderHook(() => useTodos());
            act(() => {
                result.current.addTodo('첫 번째 할 일');
                result.current.addTodo('두 번째 할 일');
            });
            const todos = result.current.getTodos();
            expect(todos).toHaveLength(2);
            expect(todos[0].title).toBe('첫 번째 할 일');
            expect(todos[1].title).toBe('두 번째 할 일');
        });

        it('빈 문자열이나 공백만 있는 문자열은 추가하지 않아야 한다 (정상 엣지 케이스)', () => {
            const { result } = renderHook(() => useTodos());
            act(() => {
                result.current.addTodo('');
                result.current.addTodo('   ');
            });
            const todos = result.current.getTodos();
            expect(todos).toHaveLength(0);
        });
    });

    describe('2. getTodos - 전체 목록 조회', () => {
        it('여러 할 일이 있을 때 전체 목록을 정상적으로 반환해야 한다 (최초 3개 입력 후 확인)', () => {
            const { result } = renderHook(() => useTodos());
            act(() => {
                result.current.addTodo('할일 1');
                result.current.addTodo('할일 2');
                result.current.addTodo('할일 3');
            });
            const todos = result.current.getTodos();
            expect(todos).toHaveLength(3);
        });

        it('getTodos로 반환되는 배열은 불변성을 유지해야 한다. 반환 배열을 수정해도 원본에 영향이 없어야 한다.', () => {
            const { result } = renderHook(() => useTodos());
            act(() => {
                result.current.addTodo('할일 1');
            });

            const todos = result.current.getTodos();
            expect(todos).toHaveLength(1);

            // 원본 훼손 시도
            todos.push({ id: 'fake', title: 'fake', completed: false, createdAt: new Date() });

            const freshTodos = result.current.getTodos();
            expect(freshTodos).toHaveLength(1);
        });

        it('최초 렌더링 시 무조건 배열 타입이어야 하며 undefined나 null이 아니어야 한다.', () => {
            const { result } = renderHook(() => useTodos());
            const todos = result.current.getTodos();
            expect(Array.isArray(todos)).toBe(true);
        });
    });

    describe('3. toggleTodo - 완료 상태 토글', () => {
        it('특정 id의 할 일 상태를 completed: false 에서 true로 변경해야 한다', () => {
            const { result } = renderHook(() => useTodos());
            act(() => {
                result.current.addTodo('할 일');
            });
            const todoId = result.current.getTodos()[0].id;

            act(() => {
                result.current.toggleTodo(todoId);
            });

            expect(result.current.getTodos()[0].completed).toBe(true);
        });

        it('이미 completed: true 인 상태에서 다시 토글하면 false가 되어야 한다', () => {
            const { result } = renderHook(() => useTodos());
            act(() => {
                result.current.addTodo('할 일');
            });
            const todoId = result.current.getTodos()[0].id;

            act(() => {
                result.current.toggleTodo(todoId);
                result.current.toggleTodo(todoId); // 두번 호출
            });

            expect(result.current.getTodos()[0].completed).toBe(false);
        });

        it('존재하지 않는 id로 토글을 시도하면 기존 상태를 유지하며 에러가 발생하지 않아야 한다 (정상 엣지 케이스)', () => {
            const { result } = renderHook(() => useTodos());
            act(() => {
                result.current.addTodo('할 일');
            });
            const todosBefore = result.current.getTodos();

            act(() => {
                result.current.toggleTodo('non-existent-id');
            });

            const todosAfter = result.current.getTodos();
            expect(todosAfter).toEqual(todosBefore);
        });
    });

    describe('4. deleteTodo - 할 일 삭제', () => {
        it('특정 id의 할 일을 목록에서 삭제해야 한다', () => {
            const { result } = renderHook(() => useTodos());
            act(() => {
                result.current.addTodo('할일 1');
                result.current.addTodo('할일 2');
            });
            const targetId = result.current.getTodos()[0].id;

            act(() => {
                result.current.deleteTodo(targetId);
            });

            const todos = result.current.getTodos();
            expect(todos).toHaveLength(1);
            expect(todos[0].title).toBe('할일 2');
        });

        it('마지막 남은 하나의 할 일을 삭제하면 빈 배열이 되어야 한다', () => {
            const { result } = renderHook(() => useTodos());
            act(() => {
                result.current.addTodo('할일 1');
            });
            const targetId = result.current.getTodos()[0].id;

            act(() => {
                result.current.deleteTodo(targetId);
            });

            expect(result.current.getTodos()).toEqual([]);
        });

        it('존재하지 않는 id를 삭제하려고 시도하면 아무 변화가 없고 에러도 없어야 한다 (정상 엣지 케이스)', () => {
            const { result } = renderHook(() => useTodos());
            act(() => {
                result.current.addTodo('할일 1');
            });
            const todosBefore = result.current.getTodos();

            act(() => {
                result.current.deleteTodo('invalid-id');
            });

            expect(result.current.getTodos()).toEqual(todosBefore);
        });
    });

    describe('5. updateTodo - 할 일 수정', () => {
        it('특정 id의 할 일 내용을 주어진 제목으로 정상 수정해야 한다', () => {
            const { result } = renderHook(() => useTodos());
            act(() => {
                result.current.addTodo('구형 제목');
            });
            const targetId = result.current.getTodos()[0].id;

            act(() => {
                result.current.updateTodo(targetId, '신형 제목');
            });

            expect(result.current.getTodos()[0].title).toBe('신형 제목');
        });

        it('수정할 제목이 빈 문자열이나 공백이면 수정을 무시해야 한다 (정상 엣지 케이스)', () => {
            const { result } = renderHook(() => useTodos());
            act(() => {
                result.current.addTodo('원본 제목');
            });
            const targetId = result.current.getTodos()[0].id;

            act(() => {
                result.current.updateTodo(targetId, '   ');
            });

            expect(result.current.getTodos()[0].title).toBe('원본 제목');
        });

        it('존재하지 않는 id로 수정을 시도할 경우 기존 목록에 영향을 주지 않아야 한다 (정상 엣지 케이스)', () => {
            const { result } = renderHook(() => useTodos());
            act(() => {
                result.current.addTodo('할 일');
            });
            const todosBefore = result.current.getTodos();

            act(() => {
                result.current.updateTodo('wrong-id', '새로운 제목');
            });

            expect(result.current.getTodos()).toEqual(todosBefore);
        });
    });

});

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./redux/actions";

const TodoList = () => {
    const [text, setText] = useState("");
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText("");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Todo List</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="New task..."
            />
            <button onClick={handleAddTodo}>➕ Add</button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{ margin: "10px", listStyle: "none" }}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => dispatch(toggleTodo(todo.id))}
                        />
                        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>🗑️ Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

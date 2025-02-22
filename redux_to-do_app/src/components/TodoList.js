import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "../redux/todoReducer";


const TodoList = () => {
    const [title, setTitle] = useState("");
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();


    const addTaskHandler = () => {
        if (title.trim()) {
            const newTask = { id: Date.now(), title };
            dispatch(addTask(newTask));
            setTitle("");
        }


    };

    return (

            <div>
                <h1>Todo List</h1>

                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button onClick={addTaskHandler}>Add Task</button>

                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>
                            {task.title}
                            <button onClick={() => dispatch(removeTask(task.id))}>
                                X
                            </button>

                        </li>
                    ))}
                </ul>

            </div>


    );
};

export default TodoList;

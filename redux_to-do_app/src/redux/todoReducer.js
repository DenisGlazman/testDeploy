const initialState = {
    tasks: []
};

// Типы экшенов
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";

export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload: id
});

// Редьюсер (чистая функция, изменяющая состояние)
export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case REMOVE_TASK:
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, isDone: !task.isDone } : task
                )
            };
        default:
            return state;
    }
};

// Экшен-криэйторы
export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const removeTask = (taskId) => ({ type: REMOVE_TASK, payload: taskId });

import React, {useState} from 'react'
import TodoForm from './TodoForm';
import Todo from '../Todo';

function TodiList() {
    const [todos,setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(todo, ...todos);
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr)
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    };
    return (
        <div>
            <h1>Let's make a  Todo List!!!</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo}/>
            
        </div>
    )
}

export default TodiList

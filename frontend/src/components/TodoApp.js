import React, { useEffect, useState } from 'react';
import API from '../api';

export default function TodoApp({ onLogout }) {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  const fetchTodos = async () => {
    try {
      const res = await API.get('/todos');
      setTodos(res.data);
    } catch (err) {
      alert('Error fetching todos');
    }
  };

  const addTodo = async () => {
    if(title.trim(' ').length===0){
      alert('Please enter todo');
    }
    try {
      await API.post('/todos', { title });
      setTitle('');
      fetchTodos();
    } catch (err) {
      alert('Error adding todo');
    }
  };

 

  const deleteTodo = async (id) => {
    try {
      await API.delete(`/todos/${id}`);
      fetchTodos();
    } catch {
      alert('Delete failed');
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className='todo-Container'> 
      <h2>Your Todo List</h2>
      <button className='logoutBtn' onClick={() => {
        localStorage.removeItem('token');
        onLogout();
      }}>Logout</button>

      <input placeholder="New todo" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button className='addTodoBtn' onClick={addTodo}>Add</button>

      <ul className='todolist'>
        {todos.map(todo => (
          <li key={todo.id} className='todoItem'>
            <p>{todo.title}</p>
            <button className='todoDeleteBtn' onClick={() => deleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  ); 
}

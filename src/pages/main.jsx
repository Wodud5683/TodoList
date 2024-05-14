import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Form from '../components/form/Form.jsx';
import Header from '../components/header/Header.jsx'; 
import Layout from '../components/layout/Layout.jsx';
import List from '../components/list/List.jsx';

function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false
    },
    {
      id: 2,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true
    }
  ]);

  return (
    <Layout>
      <Header />
      <Form todos={todos} setTodos={setTodos}/>
      <List todos={todos} setTodos={setTodos}/>
    </Layout>
  );
}

export default TodoList;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);

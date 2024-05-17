import PropTypes from "prop-types";
import { useState, useRef } from "react";
import "./style.css";

function Form({ todos, setTodos }) {
  const initialState = { id: 0, title: "", body: "", isDone: false };
  const [inputTodo, setInputTodo] = useState(initialState);
  const nextId = useRef(todos.length + 1); // 초기 ID는 todos 배열 길이에 기반

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setInputTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newTodo = { ...inputTodo, id: nextId.current };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    nextId.current += 1;
    setInputTodo(initialState);
  };

  return (
    <form onSubmit={onSubmitHandler} className="form_container">
      <div className="input_container">
        <label>제목</label>
        <input
          type="text"
          name="title"
          onChange={onChangeHandler}
          value={inputTodo.title}
          required
        />
        <label>내용</label>
        <input
          type="text"
          name="body"
          onChange={onChangeHandler}
          value={inputTodo.body}
        />
      </div>
      <button type="submit">추가하기</button>
    </form>
  );
}

Form.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default Form;

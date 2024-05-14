import PropTypes from "prop-types";
import { useState } from "react";
import "./style.css";

function Form({ todos, setTodos }) {
  const initialState = { id: 0, title: "", body: "", isDone: false };
  const [inputTodo, setInputTodo] = useState(initialState);

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setInputTodo({ ...inputTodo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, inputTodo]);
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
      <button>추가하기</button>
    </form>
  );
}

Form.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default Form;

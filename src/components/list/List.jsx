import PropTypes from 'prop-types';
import './style.css';
import Todo from '../todo/Todo';

function List({ todos, setTodos }) {
  const onDeleteHandler = (selectedId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== selectedId));
  };

  const onCompleteHandler = (selectedId) => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => 
        todo.id === selectedId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="list_container">
      <h1>Working.. 🔥</h1>
      <div className="list_wrapper">
        {todos.filter(todo => !todo.isDone).map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            onDeleteHandler={onDeleteHandler}
            onCompleteHandler={onCompleteHandler}
          />
        ))}
      </div>
      <h1>Done..! 🎉</h1>
      <div className="list_wrapper">
        {todos.filter(todo => todo.isDone).map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            onDeleteHandler={onDeleteHandler}
            onCompleteHandler={onCompleteHandler}
          />
        ))}
      </div>
    </div>
  );
}

List.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired
};

export default List;

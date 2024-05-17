import PropTypes from 'prop-types';
import './style.css';

function Todo({ todo, onDeleteHandler, onCompleteHandler }) {
  return (
    <div className="todo_item">
      <h2>{todo.title}</h2>
      <p>{todo.body}</p>
      <button onClick={() => {      
        onCompleteHandler(todo.id);
      }}>
        {todo.isDone ? "취소" : "완료"}
      </button>

      <button onClick={() => {        
        onDeleteHandler(todo.id);
      }}>삭제</button>
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
  onCompleteHandler: PropTypes.func.isRequired,
};

export default Todo;

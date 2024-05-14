import PropTypes from "prop-types";
import "./style.css";

function Todo({ todo, onDeleteHandler, onCompleteHandler }) {
  const { id, title, body, isDone } = todo;

  const handleDelete = () => {
    onDeleteHandler(id);
  };

  const handleComplete = () => {
    onCompleteHandler(id);
  };

  return (
    <div className="todo_container">
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={handleDelete} className="del_btn">
        삭제하기
      </button>
      <button onClick={handleComplete} className="compl_btn">
        {isDone ? "취 소" : "완 료"}
      </button>
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }),
  onDeleteHandler: PropTypes.func.isRequired,
  onCompleteHandler: PropTypes.func.isRequired,
};

export default Todo;

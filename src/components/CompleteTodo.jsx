const style = {
  border:"2px solid #aacfd0",
  backgroundColor: "#fff",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
  backgroundColor: "#c9dede"
}

export const CompleteTodo = (props) => {
  const {completeTodos, onClickBack} = props;
  return (
      <div style={style} className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => (
              <li key={todo} className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </li>
          ))}
        </ul>
      </div>
  );
};

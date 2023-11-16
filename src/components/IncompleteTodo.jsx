
const style = {
  border:"2px solid #aacfd0",
  backgroundColor: "#fff",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
}

export const IncompleteTodo = (props) => {
  const {incompleteTodos, onClickComplete, onClickDelete} = props;
  return(
      <div style={style} className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => (
              <li key={todo} className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
          ))}
        </ul>
      </div>
  );
};

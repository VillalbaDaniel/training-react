import Item from "./Item.js";

function TaskList(props) {
  return (
    <ul className="task-list">
      {props.items.map((task, index) => (
        <Item
          key={task.id}
          id={task.id}
          onDelete={props.onDeleteItem}
          event={index % 2 === 0}
        >
          {task.text}
        </Item>
      ))}
    </ul>
  );
}

export default TaskList;

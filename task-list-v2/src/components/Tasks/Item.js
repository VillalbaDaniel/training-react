import classes from "./Item.module.css";

function Item(props) {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li
      onClick={deleteHandler}
      className={`${classes["task-item"]} ${props.even && classes["even"]}`}
    >
      {props.children}
    </li>
  );
}

export default Item;

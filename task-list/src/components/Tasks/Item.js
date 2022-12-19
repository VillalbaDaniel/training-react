import classes from "./Item.module.css";
import { useState, useRef } from "react";

const Item = (props) => {
  const [itEditing, setIsEditing] = useState(false);
  const titleRef = useRef(null);

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  const editHandler = () => {
    titleRef.current.focus();
    setIsEditing(true);
  };

  const saveHandler = () => {
    titleRef.current.blur();
    props.onEdit(props.id, titleRef.current.textContent);
    setIsEditing(false);
  };

  const handlerKeyPress = (e) => {
    if (e.key === "Enter") {
      saveHandler();
    }
  };

  return (
    <li
      className={`${classes["task-item"]} ${props.even && classes.even}`}
      onClick={deleteHandler}
    >
      <div
        onClick={editHandler}
        onKeyPress={handlerKeyPress}
        contentEditable={true}
        suppressContentEditableWarning={true}
        onBlur={saveHandler}
        ref={titleRef}
      >
        {props.children}
      </div>
    </li>
  );
};

export default Item;

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.scss";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

ListTodo.propTypes = {
  listData: PropTypes.array,
  setTodoList: PropTypes.func,
};

ListTodo.defaultProps = {
  listData: [],
  setTodoList: null,
};
function ListTodo(props) {
  const { listData, setTodoList } = props;
  console.log("hihi", listData);

  const onHandleClick = (item, index) => {
    if (!setTodoList) return;
    setTodoList(item, index);
  };

  const location = useLocation();
  const params = queryString.parse(location.search);
  console.log(params);
  return (
    <div className="justify-center grid bg-orange-300">
      <h2 className="font-bold">
        {" "}
        Title <br />I Have todo list{" "}
      </h2>
      <ul className="todo-list">
        {listData.map((item, index) => (
          <li
            key={item.name}
            className={classNames({
              name: true,
              completed: item.status === "completed",
            })}
            onClick={() => onHandleClick(item, index)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTodo;

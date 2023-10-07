import React, { useState } from "react";
import PropTypes from "prop-types";
import ListTodo from "./ListTodo";
import ZingMp3 from "../ZingMp3";
ListPage.propTypes = {};

ListPage.defaultProps = {};
function ListPage(props) {
  const listData = [
    { id: 1, name: "sleep", status: "new" },
    { id: 2, name: "do work", status: "completed" },
    { id: 3, name: "code", status: "new" },
  ];

  const [todoList, setTodoList] = useState(listData);
  const onHandleClick = (item, index) => {
    const newList = [...todoList];
    const newListItem = {
      ...newList[index],
      status: newList[index].status === "new" ? "completed" : "new",
    };
    newList[index] = newListItem;
    setTodoList(newList);
  };

  return (
    <div>
      <ListTodo listData={todoList} setTodoList={onHandleClick}></ListTodo>
      {/* <ZingMp3></ZingMp3> */}
    </div>
  );
}

export default ListPage;

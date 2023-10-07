import React from "react";
import PropTypes from "prop-types";
import { Route, Outlet, Link, useResolvedPath } from "react-router-dom";
import ListPage from "./TodoPage";
import PageDetail from "./TodoPage/PageDetail";

HomePage.propTypes = {};

function HomePage(props) {
  const url = useResolvedPath("");

  return (
    <div>
      <div className="h1">{url.pathname}</div>
      {/* <Routes>
        <Route path="/home" element={<ListPage />} />
        <Route path={`${url.path}/:todoId`} element={<PageDetail />} />
      </Routes> */}
      <nav>
        <Link to="pages">List Page </Link>
        <Link to="detail/123">List detail</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default HomePage;

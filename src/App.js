import React from "react";

import { Routes, Route, Navigate, Link, NavLink } from "react-router-dom";
import NotFound from "./FeatureTodo/component/NotFound";
import HomePage from "./FeatureTodo/HomePage";
import { Switch } from "@material-tailwind/react";
import Introduce from "./FeatureTodo/component/Introduce";
import LandingPage from "./FeatureTodo/component/Demo";

function App() {
  return (
    <div className="App flex flex-col">
      {/* <header className="App-header font-mono  justify-center">
        <div className="bg-red-300 grid grid-cols-5 text-center p-2">
          <NavLink to={"/albums"}> Go To Zing Mp3</NavLink>
          <NavLink to={"/todo-list"}> To Do List with navlink</NavLink>
          <NavLink to={"/clone-css"}> Go to test css</NavLink>
          <NavLink to={"/categories"}> Go to API Categories</NavLink>
          <NavLink to={"/taiwind"}> Taiwind pages</NavLink>
        </div>
      </header> */}
      {/* <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Happy wedding</title>
      </head> */}

      <Routes>
        {/* Bộ sậu lớn xong rồi ở trong có các route con  */}
        {/* Routes thay thế switch, bắt buộc phải có từ trên xún dưới nếu path map thì reder 1 cái thôi, dùng exact để match chính xác với cái path */}
        {/* Navigate thay thế regedict */}
        {/* <Route path = "/register" element={user ? <Navigate to="/" replace /> :  <Register />} /> */}
        {/* 1 ví dụ có check if 3 đầu */}
        <Route path="/register" element={<Navigate to="/" replace />} />
        <Route path="/register" element={<Navigate to="/" replace />} />

        <Route path="/" element={<HomePage />} exact />
        <Route path="/demo" element={<LandingPage />} exact />

        <Route path="/introduce" element={<Introduce />} exact />
        {/* <Route path="todo-list" element={<PageTest />}>
          <Route path="pages" element={<ListPage />} />
          <Route path={"detail/:detailId"} element={<PageDetail />} />
        </Route>
        <Route path="/albums" element={<ZingMp3 />} />
        <Route path="/clone-css" element={<TestCss />} />
        <Route path="/categories" element={<CategoriesPage />} /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
